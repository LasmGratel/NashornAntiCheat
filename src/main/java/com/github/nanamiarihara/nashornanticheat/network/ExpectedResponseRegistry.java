package com.github.nanamiarihara.nashornanticheat.network;

import com.github.nanamiarihara.nashornanticheat.server.ServerScript;
import com.google.common.collect.Maps;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentMap;
import java.util.stream.Collectors;
import net.minecraft.entity.player.EntityPlayerMP;

public class ExpectedResponseRegistry {
    private static ConcurrentMap<String, ServerScript.ScriptHolder> playerChallengeStorage = Maps.newConcurrentMap();
    public static void setRegistry(EntityPlayerMP entityPlayerMP, ServerScript.ScriptHolder holder) {
        playerChallengeStorage.put(entityPlayerMP.getDisplayName(), holder);
    }
    public static void removeRegistry(EntityPlayerMP entityPlayerMP) {
        playerChallengeStorage.remove(entityPlayerMP.getDisplayName());
    }
    public static boolean validate(String playerName, List<String> hashes) {
        ServerScript.ScriptHolder holder = playerChallengeStorage.get(playerName);
        List<String> expected = holder.getModIdSortedList().stream().map(Map.Entry::getValue).collect(Collectors.toList());
        if(expected != null) {
            return expected.equals(hashes);
        }
        else {
            return false;
        }
    }
}
