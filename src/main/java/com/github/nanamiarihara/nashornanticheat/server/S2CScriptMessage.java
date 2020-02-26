package com.github.nanamiarihara.nashornanticheat.server;

import cpw.mods.fml.common.network.simpleimpl.IMessage;
import io.netty.buffer.ByteBuf;

import java.nio.charset.StandardCharsets;

public class S2CScriptMessage implements IMessage {
    public String script = "";

    public S2CScriptMessage(String script) {
        this.script = script;
    }

    public S2CScriptMessage() {
    }

    @Override
    public void fromBytes(ByteBuf buf) {
        int length = buf.readInt();
        byte[] bytes = new byte[length];
        buf.readBytes(bytes, 0, length);
        script = new String(bytes, StandardCharsets.UTF_8);
    }

    @Override
    public void toBytes(ByteBuf buf) {
        buf.writeInt(script.length());
        buf.writeBytes(script.getBytes(StandardCharsets.UTF_8));
    }
}
