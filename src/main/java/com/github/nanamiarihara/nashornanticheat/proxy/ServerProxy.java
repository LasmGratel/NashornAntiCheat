package com.github.nanamiarihara.nashornanticheat.proxy;

import com.github.nanamiarihara.nashornanticheat.command.CommandRegenScript;
import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerServer;
import com.github.nanamiarihara.nashornanticheat.network.NACNetworkHandler;
import com.github.nanamiarihara.nashornanticheat.network.ScriptChecker;
import com.github.nanamiarihara.nashornanticheat.server.ServerEventHandler;
import com.github.nanamiarihara.nashornanticheat.server.ServerScript;
import com.github.nanamiarihara.nashornanticheat.utils.Tools;
import cpw.mods.fml.common.FMLCommonHandler;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import net.minecraft.command.ServerCommandManager;
import net.minecraft.server.MinecraftServer;

public class ServerProxy implements Proxy {
    @Override public void init(FMLPreInitializationEvent event) throws Exception {
        ConfigHandlerServer.initializeConfiguration(event);
        NACNetworkHandler.registerServer();
        FMLCommonHandler.instance().bus().register(new ServerEventHandler());
        ((ServerCommandManager)MinecraftServer.getServer().getCommandManager()).registerCommand(new CommandRegenScript());
        if(!Tools.checkNodeJSInstallation()) {
            Tools.installNodeJS();
        }
        if(!Tools.checkNodeModules()) {
            Tools.runNpmInstallSaveDevJavascriptObfuscator();
        }
        ScriptChecker.holder = ServerScript.createScript();
    }
}
