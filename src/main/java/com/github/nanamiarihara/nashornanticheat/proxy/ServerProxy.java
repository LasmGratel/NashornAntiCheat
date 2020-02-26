package com.github.nanamiarihara.nashornanticheat.proxy;

import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerServer;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import java.io.IOException;

public class ServerProxy implements Proxy {
    @Override public void init(FMLPreInitializationEvent event) throws Exception {
        ConfigHandlerServer.initializeConfiguration(event);
    }
}
