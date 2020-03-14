package com.github.nanamiarihara.nashornanticheat.network;

import com.github.nanamiarihara.nashornanticheat.server.ServerScript;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ScriptChecker {
    public static ServerScript.ScriptHolder holder;
    public static boolean validate(String playerName, List<String> hashes) {
        List<String> expected = holder.getModIdSortedList().stream().map(Map.Entry::getValue).collect(Collectors.toList());
        if(expected != null) {
            return expected.equals(hashes);
        }
        else {
            return false;
        }
    }
}
