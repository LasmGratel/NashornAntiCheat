package com.github.nanamiarihara.nashornanticheat.server;

import com.github.nanamiarihara.nashornanticheat.client.C2SDataMessage;
import cpw.mods.fml.common.network.simpleimpl.IMessage;
import cpw.mods.fml.common.network.simpleimpl.IMessageHandler;
import cpw.mods.fml.common.network.simpleimpl.MessageContext;

public class ServerNetworkHandler implements IMessageHandler<C2SDataMessage, IMessage> {
    @Override
    public IMessage onMessage(C2SDataMessage message, MessageContext ctx) {
        return null;
    }
}
