package com.github.nanamiarihara.nashornanticheat.server;

import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerServer;
import com.google.common.base.Joiner;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;
import scala.io.Source$;

public class ServerScript {
    public static class ScriptHolder {
        private String script;
        private List<Map.Entry<String, String>> modIdSortedList;

        public String getScript() {
            return script;
        }

        public void setScript(String script) {
            this.script = script;
        }

        public List<Map.Entry<String, String>> getModIdSortedList() {
            return modIdSortedList;
        }

        public void setModIdSortedList(List<Map.Entry<String, String>> modIdSortedList) {
            this.modIdSortedList = modIdSortedList;
        }
    }
    static Joiner joiner = Joiner.on(",");
    public static ScriptHolder createScript() {
        final String template = Source$.MODULE$.fromInputStream(ServerScript.class.getResourceAsStream("/server-script-template.js"), "UTF-8").mkString();
        //random sorted modids
        final Map<String, String> modHashes = ConfigHandlerServer.getConfig().getModHashes();
        final List<Map.Entry<String, String>> modHashesList = modHashes.entrySet().stream().collect(Collectors.toList());
        Collections.shuffle(modHashesList, new Random(System.currentTimeMillis()));
        template.replace("${Mod_Id_List}",toJscriptList(modHashesList.stream().map(Map.Entry::getKey).collect(Collectors.toList())));
        ScriptHolder holder = new ScriptHolder();
        holder.setScript(template);
        holder.setModIdSortedList(modHashesList);
        return holder;
    }
    private static String toJscriptList(List<String> list) {
        StringBuilder sb = new StringBuilder();
        return sb.append("[").append(joiner.join(list)).append("]").toString();
    }
}
