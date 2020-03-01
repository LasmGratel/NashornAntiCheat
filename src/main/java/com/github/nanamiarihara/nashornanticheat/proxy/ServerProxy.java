package com.github.nanamiarihara.nashornanticheat.proxy;

import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerServer;
import com.github.nanamiarihara.nashornanticheat.network.NACNetworkHandler;
import com.github.nanamiarihara.nashornanticheat.network.ScriptChecker;
import com.github.nanamiarihara.nashornanticheat.server.ServerEventHandler;
import com.github.nanamiarihara.nashornanticheat.server.ServerScript;
import com.github.nanamiarihara.nashornanticheat.utils.Tools;
import cpw.mods.fml.common.FMLCommonHandler;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;

public class ServerProxy implements Proxy {
    @Override public void init(FMLPreInitializationEvent event) throws Exception {
        ConfigHandlerServer.initializeConfiguration(event);
        NACNetworkHandler.registerServer();
        FMLCommonHandler.instance().bus().register(new ServerEventHandler());
        if(!Tools.checkNodeJSInstallation()) {
            Tools.installNodeJS();
        }
        if(!Tools.checkNodeModules()) {
            Tools.runNpmInstallSaveDevJavascriptObfuscator();
        }
        ScriptChecker.holder = ServerScript.createScript();
    }
}
