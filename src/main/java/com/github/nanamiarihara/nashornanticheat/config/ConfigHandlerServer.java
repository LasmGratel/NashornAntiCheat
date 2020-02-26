package com.github.nanamiarihara.nashornanticheat.config;

import com.github.nanamiarihara.nashornanticheat.NashornAntiCheat;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;

/**
 * @author koiNoCirculation
 *
 */
public class ConfigHandlerServer {
    private static Config config;
    private static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    /**
     * initialize config serverside
     * @param event
     * @throws IOException
     */
    public static void initializeConfiguration(FMLPreInitializationEvent event) throws IOException {
        File configFile = new File(event.getModConfigurationDirectory() + File.separator + NashornAntiCheat.MODID + ".cfg.json");
        if(!configFile.exists()) {
            config = new Config();
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
}
