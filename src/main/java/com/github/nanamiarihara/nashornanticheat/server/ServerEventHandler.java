package com.github.nanamiarihara.nashornanticheat.server;

import com.github.nanamiarihara.nashornanticheat.network.NACNetworkHandler;
import com.github.nanamiarihara.nashornanticheat.network.ScriptChecker;
import com.github.nanamiarihara.nashornanticheat.network.server.PacketScriptChallenge;
import cpw.mods.fml.common.eventhandler.SubscribeEvent;
import cpw.mods.fml.common.gameevent.PlayerEvent;
import java.io.IOException;
import net.minecraft.entity.player.EntityPlayerMP;
public class ServerEventHandler {
    @SubscribeEvent
    public void onPlayerJoin(PlayerEvent.PlayerLoggedInEvent event) throws IOException, InterruptedException {
        PacketScriptChallenge challenge = new PacketScriptChallenge();
        challenge.setScript(ScriptChecker.holder.getScript());
        NACNetworkHandler.sendMessageToPlayer(challenge, (EntityPlayerMP)event.player);
    }
}
