package com.github.nanamiarihara.nashornanticheat.server;

import cpw.mods.fml.common.gameevent.PlayerEvent;

import java.util.List;
import java.util.Map;

public class ServerEventHandler {
    private Map<String, List<String>> playerChallengeStorage;
    public void onPlayerJoin(PlayerEvent.PlayerLoggedInEvent event) {
        final String displayName = event.player.getDisplayName();
    }

    public void onPlayerLeave(PlayerEvent.PlayerLoggedOutEvent event) {

    }
}
