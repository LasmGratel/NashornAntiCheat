package com.github.nanamiarihara.nashornanticheat.server;

import com.github.nanamiarihara.nashornanticheat.network.ExpectedResponseRegistry;
import com.github.nanamiarihara.nashornanticheat.network.NACNetworkHandler;
import com.github.nanamiarihara.nashornanticheat.network.server.PacketScriptChallenge;
import cpw.mods.fml.common.gameevent.PlayerEvent;
import net.minecraft.entity.player.EntityPlayerMP;

public class ServerEventHandler {
    public void onPlayerJoin(PlayerEvent.PlayerLoggedInEvent event) {
        PacketScriptChallenge challenge = new PacketScriptChallenge();
        ServerScript.ScriptHolder script = ServerScript.createScript();
        ExpectedResponseRegistry.setRegistry((EntityPlayerMP)event.player, script);
        challenge.setScript(script.getScript());
        NACNetworkHandler.sendMessageToPlayer(challenge, (EntityPlayerMP)event.player);
    }

    public void onPlayerLeave(PlayerEvent.PlayerLoggedOutEvent event) {
        ExpectedResponseRegistry.removeRegistry((EntityPlayerMP)event.player);
    }
}
