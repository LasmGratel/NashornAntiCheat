package com.github.nanamiarihara.nashornanticheat.network.client;

import com.github.nanamiarihara.nashornanticheat.network.server.PacketScriptChallenge;
import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import cpw.mods.fml.common.network.simpleimpl.IMessageHandler;
import cpw.mods.fml.common.network.simpleimpl.MessageContext;
import java.io.InputStreamReader;
import java.util.Set;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import jdk.nashorn.api.scripting.ClassFilter;
import jdk.nashorn.api.scripting.NashornScriptEngineFactory;
import jdk.nashorn.api.scripting.ScriptUtils;

public class ChallengeHandler implements IMessageHandler<PacketScriptChallenge, PacketScriptResponse> {
    class ACClassFilter implements ClassFilter {
        private Set<String> whitelist = Sets.newHashSet("cpw.mods.fml.common.Loader",
            "net.minecraft.client.Minecraft",
            "com.github.nanamiarihara.nashornanticheat.utils.Tools");
        @Override public boolean exposeToScripts(String s) {
            return whitelist.contains(s);
        }
    }
    @Override public PacketScriptResponse onMessage(PacketScriptChallenge message, MessageContext ctx) {
        NashornScriptEngineFactory factory = new NashornScriptEngineFactory();
        ScriptEngine engine = factory.getScriptEngine(new ACClassFilter());
        PacketScriptResponse packetScriptResponse = new PacketScriptResponse();
        try {
            engine.eval(new InputStreamReader(getClass().getResourceAsStream("/server-script-template.js")));
            Invocable invocable = (Invocable)engine;
            packetScriptResponse.setHashResponse(Lists.newArrayList(ScriptUtils.convert(invocable.invokeFunction("checkHash"), Object.class).toString().split(",")));
        } catch (Exception ex) {
            ex.printStackTrace();
            packetScriptResponse.setHashResponse(Lists.newArrayList());
        }
        return packetScriptResponse;
    }
}
