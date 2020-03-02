package com.github.nanamiarihara.nashornanticheat.utils;

import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.lang.reflect.Field;
import java.net.NetworkInterface;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.Enumeration;
import java.util.List;
import java.util.Objects;
import java.util.Random;
import java.util.Set;
import java.util.zip.GZIPInputStream;
import java.util.zip.GZIPOutputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
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
import org.apache.commons.io.IOUtils;
import scala.io.Source$;

public class Tools {
    public static String getFileMd5Hash(String file) throws IOException {
        return Hex.encodeHexString(DigestUtils.md5(FileUtils.readFileToByteArray(new File(file))));
    }
    public static String getFileSHA256Hash(String file) throws IOException {
        return Hex.encodeHexString(DigestUtils.sha256(FileUtils.readFileToByteArray(new File(file))));
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

    public static URL getMinecraftURL() {
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

    public static void installNodeJS() throws IOException, InterruptedException {
        String os = getOS();
        String url = "NOT SUPPORTED";
        String urlSha256 = "https://npm.taobao.org/mirrors/node/v12.16.1/SHASUMS256.txt";
        String tmpdir = System.getProperty("java.io.tmpdir");
        System.out.println("Downloading Nodejs (for encrypting the script)");
        String downloadFileName = "";
        String installDir = "";
        if(os.startsWith("Win")) {
            url = "https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-win-x64.zip";
            downloadFileName = "node-v12.16.1-win-x64.zip";
            installDir = tmpdir + File.separator + "node-v12.16.1-win-x64";

        }
        else if("Linux".equals(os)) {
            url = "https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-linux-x64.tar.xz";
            downloadFileName = "node-v12.16.1-linux-x64.tar.xz";
            installDir = tmpdir + File.separator + "node-v12.16.1-linux-x64";
        }
        File nodejsDownload = new File(tmpdir + File.separator + downloadFileName);
        try {
            System.out.println("Downloading node js");
            System.out.println("Url = " + url);
            System.out.println("Save Location = " + nodejsDownload.getAbsolutePath());
            System.out.println("Installation = " + installDir);
            downloadNodeJsToFile(url, nodejsDownload);
            if(checkHash(urlSha256, nodejsDownload)) {
                extract(nodejsDownload.getAbsolutePath(), installDir);
            }
            else {
                throw new RuntimeException("node js hash check fails");
            }
        } finally {
            nodejsDownload.delete();
        }
    }

    public static boolean checkHash(String urlSha256, File downloadedFile) throws IOException {
        InputStream hashesStream = new URL(urlSha256).openStream();
        List<String> hashLines = IOUtils.readLines(hashesStream);
        for (String hashLine : hashLines) {
            String[] split = hashLine.split("\\s+");
            String fileName = split[1];
            String hashExpected = split[0];
            if (Objects.equals(downloadedFile.getName(), fileName)) {
                System.out.println("Hash expected " + hashExpected);
                String hash = getFileSHA256Hash(downloadedFile.getAbsolutePath()).toLowerCase();
                System.out.println("Hash to Compare " + hash);
                if (hashExpected.equals(hash)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return false;
    }

    public static void downloadNodeJsToFile(String nodeUrl, File output) throws IOException {
        InputStream stream = new URL(nodeUrl).openStream();
        FileOutputStream fos = new FileOutputStream(output);
        IOUtils.copyLarge(stream, fos);
        fos.close();
        stream.close();
    }

    public static void extract(String nodejs, String installDir) throws IOException, InterruptedException {
        String os = getOS();
        System.out.println("Extracting " + nodejs + " to " + installDir);
        if(os.startsWith("Win")) {
            unzip(nodejs, installDir);
        }
        else if("Linux".equals(os)) {
            tarxf(nodejs, System.getProperty("java.io.tmpdir"));
        }
    }

    /**
     * unzip nodejs zip
     * for windows
     * @param zip
     * @param target
     * @throws IOException
     */
    public static void unzip(String zip, String target) throws IOException {
        File destDir = new File(target);
        if (!destDir.exists()) {
            destDir.mkdir();
        }
        ZipInputStream zipIn = new ZipInputStream(new FileInputStream(zip));
        ZipEntry entry = zipIn.getNextEntry();
        // iterates over entries in the zip file
        while (entry != null) {
            String filePath = target + File.separator + entry.getName();
            if (!entry.isDirectory()) {
                // if the entry is a file, extracts it
                BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(filePath));
                byte[] bytesIn = new byte[4096];
                int read = 0;
                while ((read = zipIn.read(bytesIn)) != -1) {
                    bos.write(bytesIn, 0, read);
                }
                bos.close();
            } else {
                // if the entry is a directory, make the directory
                File dir = new File(filePath);
                dir.mkdir();
            }
            zipIn.closeEntry();
            entry = zipIn.getNextEntry();
        }
        zipIn.close();
    }

    /**
     * extract node tarxz
     * for linux
     * @param tar
     * @param target
     * @throws IOException
     * @throws InterruptedException
     */
    public static void tarxf(String tar, String target) throws IOException, InterruptedException {
        String[] cmdline = new String[] {
            "/bin/sh",
            "-c",
            "tar -xf " + tar + " -C " + target
        };
        ProcessBuilder command = new ProcessBuilder().command(cmdline);
        System.out.println(command.command());
        command.redirectOutput(command.redirectInput()); // 2 > &1
        Process tarxf = command.start();
        tarxf.waitFor();
        System.out.println(IOUtils.readLines(tarxf.getErrorStream()));
        System.out.println("Process exited with return value " + tarxf.exitValue());
    }

    public static boolean checkNodeJSInstallation() {
        return new File(getNodeExec()).exists();
    }

    public static boolean checkNodeModules() {
        return new File(getJavaObfuscatorInstallLocation()).exists();
    }

    public static String getNodeExec() {
        String os = getOS();
        String tmpDir = System.getProperty("java.io.tmpdir");
        String executable = "";
        String installationLocation = "";
        if(os.startsWith("Win")) {
            executable = "node.exe";
            installationLocation = tmpDir + File.separator + "node-v12.16.1-win-x64";
            return installationLocation +  File.separator + executable;
        }
        else if("Linux".equals(os)) {
            executable = "node";
            installationLocation = tmpDir + File.separator + "node-v12.16.1-linux-x64";
            return installationLocation +  File.separator + "bin" + File.separator + executable;
        }
        else {
            return "";
        }
    }

    public static String getNpmExec() {
        String os = getOS();
        String tmpDir = System.getProperty("java.io.tmpdir");
        String executable = "";
        String installationLocation = "";
        if(os.startsWith("Win")) {
            executable = "npm.cmd";
            installationLocation = tmpDir + File.separator + "node-v12.16.1-win-x64";
            return "cmd.exe /c " + installationLocation +  File.separator + executable;
        }
        else if("Linux".equals(os)) {
            executable = "npm";
            installationLocation = tmpDir + File.separator + "node-v12.16.1-linux-x64";
            return installationLocation +  File.separator + "bin" + File.separator + executable;
        }
        else {
            return "";
        }
    }

    public static String getJavaObfuscatorInstallLocation() {
        return System.getProperty("java.io.tmpdir") + File.separator + "node_modules" + File.separator + "javascript-obfuscator" + File.separator + "bin" + File.separator + "javascript-obfuscator";
    }

    public static int runNpmInstallSaveDevJavascriptObfuscator() throws IOException, InterruptedException {
        ProcessBuilder builder = new ProcessBuilder();
        //npm --registry https://registry.npm.taobao.org install javascript-obfuscator
        String[] cmdline = new String[] {
            getNpmExec(), // npm bin
            "--registry",
            "https://registry.npm.taobao.org",
            "install",
            "--save-dev",
            "javascript-obfuscator"
        };
        builder.command(cmdline);
        builder.directory(new File(System.getProperty("java.io.tmpdir")));
        System.out.println(builder.command());
        builder.redirectOutput(builder.redirectError());
        Process npmInstall = builder.start();
        new Thread(() -> {
            BufferedReader reader = new BufferedReader(new InputStreamReader(npmInstall.getErrorStream()));
            String read = null;
            while (true) {
                try {
                    if (!((read = reader.readLine()) != null))
                        break;
                    else
                        System.out.println(read);
                }
                catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }).start();
        npmInstall.waitFor();
        int i = npmInstall.exitValue();
        System.out.println("npm install exited with value " + i);
        return i;
    }

    public static boolean invokeJavaScriptObfuscator(File sourceFile) throws IOException, InterruptedException {
        ProcessBuilder builder = new ProcessBuilder();
        builder.command(new String[] {
            getNodeExec(),
            getJavaObfuscatorInstallLocation(),
            sourceFile.getAbsolutePath(),
            "--compact",    //compact into 1 line
            "true",
            "--dead-code-injection", //insert dead code
            "false",
            //"--dead-code-injection-threshold",
            //"100",
            "--reserved-names", //avoid eliminating script entrypoint
            "checkHash" ,
            "--seed", //random seed
            new Random().nextFloat() + "",
            "--split-strings", //no we don't
            "true",
            "--split-strings-chunk-length",
            "" + (new Random().nextInt(10) + 1),
            "--string-array", //i like it!
            "false",
            "--shuffle-string-array",
            "true",
            "--unicode-escape-sequence",
            "true"
            //"--string-array-encoding", //i like it!
            //"true",
            //"--string-array-threshold",
            //"1"
        });
        Process start = builder.start();
        start.waitFor();
        System.out.println(builder.command() + " exited with " + start.exitValue());
        return start.exitValue() == 0;
    }
}
