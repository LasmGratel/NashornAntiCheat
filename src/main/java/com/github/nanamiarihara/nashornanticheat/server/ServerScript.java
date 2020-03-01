package com.github.nanamiarihara.nashornanticheat.server;

import com.github.nanamiarihara.nashornanticheat.config.ConfigHandlerServer;
import com.github.nanamiarihara.nashornanticheat.utils.Tools;
import com.google.common.base.Joiner;
import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;
import java.util.stream.Collectors;
import org.apache.commons.io.FileUtils;
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
    public static ScriptHolder createScript() throws IOException, InterruptedException {
        String template = Source$.MODULE$.fromInputStream(ServerScript.class.getResourceAsStream("/server-script-template.js"), "UTF-8").mkString();
        //random sorted modids
        final Map<String, String> modHashes = ConfigHandlerServer.getConfig().getModHashes();
        final List<Map.Entry<String, String>> modHashesList = modHashes.entrySet().stream().collect(Collectors.toList());
        Collections.shuffle(modHashesList, new Random(System.currentTimeMillis()));
        template = template.replace("${Mod_Id_List}",toJscriptList(modHashesList.stream().map(e -> "\"" + e.getKey() + "\"").collect(Collectors.toList())));
        ScriptHolder holder = new ScriptHolder();
        template = obfuscate(template);
        System.out.println(template);
        holder.setScript(template);
        holder.setModIdSortedList(modHashesList);
        return holder;
    }
    public static String obfuscate(String original) throws IOException, InterruptedException {
        UUID uuid = UUID.randomUUID();
        File originalFile = new File(System.getProperty("java.io.tmpdir") + File.separator + uuid + "original-anticheat" + ".js");
        File targetFile = new File(System.getProperty("java.io.tmpdir") + File.separator + uuid + "original-anticheat-obfuscated" + ".js");
        try {
            FileUtils.write(originalFile, original);
            boolean b = Tools.invokeJavaScriptObfuscator(originalFile);
            if(b) {
                return FileUtils.readFileToString(targetFile);
            }
            else {
                return original; //failed obfuscating
            }
        } finally {
            originalFile.delete();
            targetFile.delete();
        }
    }
    private static String toJscriptList(List<String> list) {
        StringBuilder sb = new StringBuilder();
        return sb.append("[").append(joiner.join(list)).append("]").toString();
    }
}
