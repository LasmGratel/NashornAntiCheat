package com.github.nanamiarihara.nashornanticheat.client;

import cpw.mods.fml.common.network.simpleimpl.IMessage;
import io.netty.buffer.ByteBuf;

public class C2SDataMessage implements IMessage {

    public byte[] data;

    public C2SDataMessage(byte[] data) {
        this.data = data;
    }

    public C2SDataMessage() {
    }

    @Override
    public void fromBytes(ByteBuf buf) {
        data = new byte[buf.readInt()];
        buf.readBytes(data, 0, data.length);
    }

    @Override
    public void toBytes(ByteBuf buf) {
        buf.writeInt(data.length);
        buf.writeBytes(data);
    }
}
