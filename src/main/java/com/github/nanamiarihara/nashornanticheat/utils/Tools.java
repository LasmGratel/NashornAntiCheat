package com.github.nanamiarihara.nashornanticheat.utils;

import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.lang.reflect.Field;
import java.net.NetworkInterface;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.Enumeration;
import java.util.List;
import java.util.Set;
import java.util.zip.GZIPInputStream;
import java.util.zip.GZIPOutputStream;
import javax.management.InstanceNotFoundException;
import javax.management.MBeanException;
import javax.management.MalformedObjectNameException;
import javax.management.ObjectName;
import javax.management.ReflectionException;
import net.minecraft.client.Minecraft;
import net.minecraft.world.World;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.io.FileUtils;
import scala.io.Source$;

public class Tools {
    public static String getFileMd5Hash(String file) throws IOException {
        return Hex.encodeHexString(DigestUtils.md5(FileUtils.readFileToByteArray(new File(file))));
    }
    public static byte[] gzipCompressMessage(String input) throws IOException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        GZIPOutputStream stream = new GZIPOutputStream(bos);
        stream.write(input.getBytes(Charset.forName("UTF-8")));
        stream.flush();
        stream.close();
        return bos.toByteArray();
    }
    public static String gzipDecompressMessage(byte[] input) throws IOException {
        ByteArrayInputStream bis = new ByteArrayInputStream(input);
        return Source$.MODULE$.fromInputStream(new GZIPInputStream(bis),"UTF-8").mkString();
    }

    public static URL getinecraftURL() {
        return Minecraft.class.getProtectionDomain().getCodeSource().getLocation();
    }

    /**
     * get client dynload infomations
     * @return
     * @throws MalformedObjectNameException
     * @throws MBeanException
     * @throws InstanceNotFoundException
     * @throws ReflectionException
     */
    public static Set<String> getDynloadInfo() throws MalformedObjectNameException, MBeanException, InstanceNotFoundException, ReflectionException {
        ObjectName diagnosticsCommandName = new ObjectName("com.sun.management:type=DiagnosticCommand");
        String operationName = "vmDynlibs";
        String result = (String) ManagementFactory.getPlatformMBeanServer().invoke(diagnosticsCommandName, operationName, null, null);
        return parseDynloadInformation(result);
    }

    /**
     * get dynload infos
     * redacts system directory(only for windows users on c:), user homes(all), java homes(all)
     * ignores jars
     * and something like:
     * 7ffde7b15000-7ffde7b38000 rw-p 00000000 00:00 0                          [stack]
     * 7ffde7bb7000-7ffde7bba000 r--p 00000000 00:00 0                          [vvar]
     * 7ffde7bba000-7ffde7bbb000 r-xp 00000000 00:00 0                          [vdso]
     * ffffffffff600000-ffffffffff601000 r-xp 00000000 00:00 0                  [vsyscall]
     * @param informationLines
     * @return
     */
    private static Set<String> parseDynloadInformation(String informationLines) {
        String[] lines;
        String JAVA_HOME = null;
        String WINDOWS_PREFIX = "c:\\windows";
        String userHome = System.getProperty("user.home");

        Set<String> dynlibs = Sets.newHashSet();
        if (informationLines.contains("\r\n")) {
            lines = informationLines.split("\r\n");
        }
        else {
            lines = informationLines.split("\n");
        }
        for (String line : lines) {
            String[] split = line.split("\\s+");
            if (split.length < 6) {
                continue;
            }
            else {
                String info = split[5];
                if (info.endsWith("java") || info.endsWith("java.exe") || info.endsWith("javaw.exe")) {
                    //we don't care java home prefix
                    JAVA_HOME = info.split("bin" + File.separator + "java")[0];
                    info = info.replace(JAVA_HOME, "JAVA_HOME/");
                }
                else if (JAVA_HOME != null && info.startsWith(JAVA_HOME)) {
                    //redact JAVA_HOME
                    info = info.replace(JAVA_HOME, "JAVA_HOME/");
                }

                if (info.endsWith(".jar")) {
                    //ignore jars
                    //we want dlls
                    continue;
                }
                if (info.toLowerCase().startsWith(WINDOWS_PREFIX)) {
                    //redact system prefix
                    info = info.toLowerCase().replace(WINDOWS_PREFIX, "");
                }
                if (info.startsWith(userHome)) {
                    //redact user home
                    info = info.replace(userHome, "USER_HOME");
                }
                if (info.startsWith("[") || info.endsWith("]")) {
                    continue;
                }
                dynlibs.add(info);
            }
        }
        return dynlibs;
    }

    /**
     * operation system
     * @return
     */
    public static String getOS() {
        return System.getProperty("os.name");
    }

    /**
     * hardware address
     * @return
     */
    public static String getHashHWAddress() throws IOException {
        Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        while (interfaces.hasMoreElements()) {
            NetworkInterface iface = interfaces.nextElement();
            if(!iface.isLoopback() && !iface.isVirtual() && iface.isUp()) {
                bos.write(iface.getHardwareAddress());
            }
        }
        return Hex.encodeHexString(DigestUtils.md5(bos.toByteArray()));
    }

    /**
     * only allows authlib-injector
     * simple validation by filename
     * @return
     */
    public static boolean validateJavaAgent() {
        try {
            Field subtracted = World.class.getDeclaredField("skylightSubtracted");
            //defuscated environment
            return true;
        }
        catch (NoSuchFieldException e) {
        }
        RuntimeMXBean runtimeMXBean = ManagementFactory.getRuntimeMXBean();
        List<String> jvmArgs = runtimeMXBean.getInputArguments();
        List<String> agents = Lists.newArrayList();
        System.out.println("JVM arguments:");
        for (String arg : jvmArgs) {
            if (arg.startsWith("-agentpath") || arg.startsWith("-agentlib") || arg.startsWith("-javaagent")) {
                agents.add(arg);
            }
        }
        if(agents.isEmpty()) {
            return true;
        }
        else {
            if(agents.size() > 1) {
                return false;
            }
            else {
                return agents.get(0).contains("authlib-injector");
            }
        }
    }
}
