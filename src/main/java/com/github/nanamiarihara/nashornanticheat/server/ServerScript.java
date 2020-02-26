package com.github.nanamiarihara.nashornanticheat.server;

public class ServerScript {
    public static String createScript() {
        return "var Loader = Java.type(\"cpw.mods.fml.common.Loader\");\n" +
                "var DigestUtils = Java.type(\"org.apache.commons.codec.digest.DigestUtils\");\n" +
                "var str = \"\";\n" +
                "for (" +
                "var mod in Loader.instance().getActiveModList()) {\n" +
                "    str += Loader.instance().getActiveModList()[mod].getModId();\n" +
                "}\n" +
                "DigestUtils.sha256(str);";
    }
}
