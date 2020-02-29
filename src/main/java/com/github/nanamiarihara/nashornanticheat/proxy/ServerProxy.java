package com.github.nanamiarihara.nashornanticheat.proxy;

import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerServer;
import com.github.nanamiarihara.nashornanticheat.network.NACNetworkHandler;
import com.github.nanamiarihara.nashornanticheat.server.ServerEventHandler;
import cpw.mods.fml.common.FMLCommonHandler;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import java.io.IOException;
import net.minecraft.client.Minecraft;
import net.minecraftforge.common.MinecraftForge;

public class ServerProxy implements Proxy {
    @Override public void init(FMLPreInitializationEvent event) throws Exception {
        ConfigHandlerServer.initializeConfiguration(event);
        NACNetworkHandler.registerServer();
        MinecraftForge.EVENT_BUS.register(new ServerEventHandler());
        FMLCommonHandler.instance().bus().register(new ServerEventHandler());
    }
}
