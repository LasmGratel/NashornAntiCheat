package com.github.nanamiarihara.nashornanticheat.server;

import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerServer;
import com.google.common.base.Joiner;
import scala.io.Source$;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

public class ServerScript {
    public static class ScriptBean {

    }
    static Joiner joiner = Joiner.on(",");
    public static String createScript() {
        final String template = Source$.MODULE$.fromInputStream(ServerScript.class.getResourceAsStream("/server-script-template.js"), "UTF-8").mkString();
        //random sorted modids
        final Map<String, String> modHashes = ConfigHandlerServer.getConfig().getModHashes();
        final List<Map.Entry<String, String>> modHashesList = modHashes.entrySet().stream().collect(Collectors.toList());
        Collections.shuffle(modHashesList, new Random(System.currentTimeMillis()));
        template.replace("${Mod_Id_List}",toJscriptList(modHashesList.stream().map(Map.Entry::getKey).collect(Collectors.toList())));
        return template;
    }
    private static String toJscriptList(List<String> list) {
        StringBuilder sb = new StringBuilder();
        return sb.append("[").append(joiner.join(list)).append("]").toString();
    }
}
