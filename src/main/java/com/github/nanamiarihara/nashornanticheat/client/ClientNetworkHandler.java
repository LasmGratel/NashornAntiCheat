package com.github.nanamiarihara.nashornanticheat.client;

import com.github.nanamiarihara.nashornanticheat.server.S2CScriptMessage;
import cpw.mods.fml.common.network.simpleimpl.IMessage;
import cpw.mods.fml.common.network.simpleimpl.IMessageHandler;
import cpw.mods.fml.common.network.simpleimpl.MessageContext;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

public class ClientNetworkHandler implements IMessageHandler<S2CScriptMessage, IMessage> {
    private ScriptEngine scriptEngine = new ScriptEngineManager().getEngineByName("js");

    @Override
    public IMessage onMessage(S2CScriptMessage message, MessageContext ctx) {
        return null;
    }
}
