package com.github.nanamiarihara.nashornanticheat.config;

import com.github.nanamiarihara.nashornanticheat.NashornAntiCheat;
import com.google.common.collect.Maps;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import cpw.mods.fml.common.FMLLog;
import cpw.mods.fml.common.Loader;
import cpw.mods.fml.common.ModContainer;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.util.Map;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.io.FileUtils;

/**
 * @author koiNoCirculation
 * generate modhashlist on client
 * load config
 */
public class ConfigHandlerClient {
    private static Config config;
    private static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    /**
     * initialize config serverside
     * @param event
     * @throws IOException
     */
    public static void initializeConfiguration(FMLPreInitializationEvent event) throws IOException, ClassNotFoundException {
        File configFile = new File(event.getModConfigurationDirectory() + File.separator + NashornAntiCheat.MODID + ".cfg.json");
        if(!configFile.exists()) {
            config = new Config();
            config.setModHashes(getHashes());
            FMLLog.info("%s", config.getModHashes());
            FileUtils.write(configFile, gson.toJson(config));
        }
        else {
            config = gson.fromJson(FileUtils.readFileToString(configFile), Config.class);
        }
    }

    /**
     * get config
     * @return
     */
    public static Config getConfig() {
        return config;
    }

    private static Map<String, String> getHashes() throws IOException, ClassNotFoundException {
        Map<String, String> hashes = Maps.newHashMap();
        for (ModContainer container : Loader.instance().getActiveModList()) {
            //URL location = container.getMod().getClass().getProtectionDomain().getCodeSource().getLocation();
            File location = container.getSource();
            boolean fuckMCP = "minecraft.jar".equals(location.getPath());
            if(fuckMCP) {
                //mcp case
                URL url = Class.forName("net.minecraft.client.Minecraft").getProtectionDomain().getCodeSource().getLocation();
                location = new File(jarUrlProcessor(url));
            }
            if(!location.isFile()) {
                //we are debugging, skip
                continue;
            }
            FileInputStream fis = new FileInputStream(location);
            byte[] bytes = DigestUtils.md5(fis);
            fis.close();
            hashes.put(container.getModId(), Hex.encodeHexString(bytes));
        }
        return hashes;
    }

    private static String jarUrlProcessor(URL input) {
        //file:/home/lyt/.gradle/caches/minecraft/net/minecraftforge/forge/1.7.10-10.13.4.1614-1.7.10/stable/12/forgeSrc-1.7.10-10.13.4.1614-1.7.10.jar!/net/minecraft/client/Minecraft.class
        return input.getFile().replace("file:","").split("!")[0];
    }
}
