package com.github.nanamiarihara.nashornanticheat.proxy;

import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerClient;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import java.io.IOException;

public class ClientProxy implements Proxy{
    @Override public void init(FMLPreInitializationEvent event) throws Exception {
        ConfigHandlerClient.initializeConfiguration(event);
    }
}
