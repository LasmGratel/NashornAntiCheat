package com.github.nanamiarihara.nashornanticheat.network.server;

import com.github.nanamiarihara.nashornanticheat.utils.Tools;
import com.google.common.base.Preconditions;
import cpw.mods.fml.common.network.simpleimpl.IMessage;
import io.netty.buffer.ByteBuf;
import java.io.IOException;

public class PacketScriptChallenge implements IMessage {
    private String script;
    @Override public void fromBytes(ByteBuf buf) {
        int len = buf.readInt();
        byte[] bytes = new byte[len];
        buf.readBytes(bytes);
        try {
            script = Tools.gzipDecompressMessage(bytes);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override public void toBytes(ByteBuf buf) {
        Preconditions.checkNotNull(script);
        try {
            byte[] bytes = Tools.gzipCompressMessage(script);
            buf.writeInt(bytes.length);
            buf.writeBytes(bytes);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }



    public String getScript()
    {
        return script;
    }

    public void setScript(String script) {
        this.script = script;
    }
}
