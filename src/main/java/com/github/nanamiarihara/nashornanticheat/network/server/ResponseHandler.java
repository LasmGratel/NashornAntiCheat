package com.github.nanamiarihara.nashornanticheat.network.server;

import com.github.nanamiarihara.nashornanticheat.network.ExpectedResponseRegistry;
import com.github.nanamiarihara.nashornanticheat.network.client.PacketScriptResponse;
import cpw.mods.fml.common.network.simpleimpl.IMessageHandler;
import cpw.mods.fml.common.network.simpleimpl.MessageContext;

public class ResponseHandler implements IMessageHandler<PacketScriptResponse, PacketScriptChallenge> {
    @Override public PacketScriptChallenge onMessage(PacketScriptResponse message, MessageContext ctx) {
        String name = ctx.getServerHandler().playerEntity.getDisplayName();
        if(!ExpectedResponseRegistry.validate(name, message.getHashResponse()))
            ctx.getServerHandler().netManager.channel().disconnect();
        return null;
    }
}
