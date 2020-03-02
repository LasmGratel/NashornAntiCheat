package com.github.nanamiarihara.nashornanticheat.server;

import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerServer;
import com.github.nanamiarihara.nashornanticheat.network.NACNetworkHandler;
import com.github.nanamiarihara.nashornanticheat.network.ScriptChecker;
import com.github.nanamiarihara.nashornanticheat.network.server.PacketScriptChallenge;
import com.mojang.authlib.GameProfile;
import cpw.mods.fml.common.eventhandler.SubscribeEvent;
import cpw.mods.fml.common.gameevent.PlayerEvent;
import cpw.mods.fml.common.gameevent.TickEvent;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import net.minecraft.entity.player.EntityPlayerMP;
import net.minecraft.server.MinecraftServer;
import net.minecraft.server.dedicated.DedicatedServer;

public class ServerEventHandler {
    public static Map<GameProfile, Integer> waits = new HashMap<>();
    public static Object lock = new Object();
    @SubscribeEvent
    public void onPlayerJoin(PlayerEvent.PlayerLoggedInEvent event) {
        synchronized (lock) {
            PacketScriptChallenge challenge = new PacketScriptChallenge();
            challenge.setScript(ScriptChecker.holder.getScript());
            waits.put(event.player.getGameProfile(), ConfigHandlerServer.getConfig().getChallengeTimeoutMs() / 50);
            NACNetworkHandler.sendMessageToPlayer(challenge, (EntityPlayerMP)event.player);
        }
    }
    @SubscribeEvent
    public void onPlayerLeave(PlayerEvent.PlayerLoggedOutEvent event) {
        synchronized (lock) {
            waits.remove(event.player.getGameProfile());
        }
    }

    @SubscribeEvent
    public void onServerTick(TickEvent.ServerTickEvent event){
        synchronized (lock) {
            Iterator<Map.Entry<GameProfile, Integer>> iterator = waits.entrySet().iterator();
            while (iterator.hasNext()) {
                Map.Entry<GameProfile, Integer> next = iterator.next();
                Integer value = next.getValue();
                if (value - 1 > 0) {
                    waits.put(next.getKey(), value - 1);
                }
                else {
                    waits.remove(next.getKey());
                    ((DedicatedServer)MinecraftServer.getServer()).
                        getConfigurationManager().
                        getPlayerByUsername(next.getKey().getName()).
                        playerNetServerHandler.kickPlayerFromServer(ConfigHandlerServer.getConfig().getMessageOnChallengeFail());
                }
            }
        }
    }
}
