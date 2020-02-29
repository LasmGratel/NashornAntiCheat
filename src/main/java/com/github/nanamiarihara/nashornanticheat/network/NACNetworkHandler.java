package com.github.nanamiarihara.nashornanticheat.network;

import com.github.nanamiarihara.nashornanticheat.NashornAntiCheat;
import com.github.nanamiarihara.nashornanticheat.network.client.ChallengeHandler;
import com.github.nanamiarihara.nashornanticheat.network.client.PacketScriptResponse;
import com.github.nanamiarihara.nashornanticheat.network.server.PacketScriptChallenge;
import com.github.nanamiarihara.nashornanticheat.network.server.ResponseHandler;
import cpw.mods.fml.common.network.simpleimpl.SimpleNetworkWrapper;
import cpw.mods.fml.relauncher.Side;
import net.minecraft.entity.player.EntityPlayerMP;

public class NACNetworkHandler {
    public static final SimpleNetworkWrapper CHANNAL = new SimpleNetworkWrapper(NashornAntiCheat.MODID);

    public static void registerServer() {
        CHANNAL.registerMessage(ResponseHandler.class, PacketScriptResponse.class, 0, Side.SERVER);
    }
    public static void registerClient() {
        CHANNAL.registerMessage(ChallengeHandler.class, PacketScriptChallenge.class, 0, Side.CLIENT);
    }
    // 向某个玩家发包（服务器到客户端）
    public static void sendMessageToPlayer(PacketScriptChallenge msg, EntityPlayerMP player) {
        CHANNAL.sendTo(msg, player);
    }
    // 向所有人发包（服务器到客户端）
    public static void sendMessageToAll(PacketScriptChallenge msg) {
        CHANNAL.sendToAll(msg);
    }
}

