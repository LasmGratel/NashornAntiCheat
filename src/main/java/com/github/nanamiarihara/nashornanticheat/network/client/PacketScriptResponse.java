package com.github.nanamiarihara.nashornanticheat.network.client;

import com.github.nanamiarihara.nashornanticheat.utils.Tools;
import com.google.gson.Gson;
import cpw.mods.fml.common.network.simpleimpl.IMessage;
import io.netty.buffer.ByteBuf;
import java.io.IOException;
import java.util.List;

public class PacketScriptResponse implements IMessage {
    private List<String> hashResponse;
    private static Gson gson = new Gson();
    @Override public void fromBytes(ByteBuf buf) {
        int size = buf.readInt();
        byte[] bytes = new byte[size];
        buf.readBytes(bytes);
        try {
            hashResponse = gson.fromJson(Tools.gzipDecompressMessage(bytes), List.class);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override public void toBytes(ByteBuf buf) {
        try {
            byte[] bytes = Tools.gzipCompressMessage(gson.toJson(hashResponse));
            buf.writeInt(bytes.length);
            buf.writeBytes(bytes);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<String> getHashResponse() {
        return hashResponse;
    }

    public void setHashResponse(List<String> hashResponse) {
        this.hashResponse = hashResponse;
    }
}
