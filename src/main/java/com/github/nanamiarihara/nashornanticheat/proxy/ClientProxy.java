package com.github.nanamiarihara.nashornanticheat.proxy;

import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerClient;
import com.github.nanamiarihara.nashornanticheat.network.NACNetworkHandler;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;

public class ClientProxy implements Proxy{
    @Override public void init(FMLPreInitializationEvent event) throws Exception {
        ConfigHandlerClient.initializeConfiguration(event);
        NACNetworkHandler.registerClient();
    }
}
