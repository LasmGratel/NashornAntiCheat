package com.github.nanamiarihara.nashornanticheat.network.client;

import com.github.nanamiarihara.nashornanticheat.network.server.PacketScriptChallenge;
import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import cpw.mods.fml.common.network.simpleimpl.IMessageHandler;
import cpw.mods.fml.common.network.simpleimpl.MessageContext;
import java.util.Set;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import jdk.nashorn.api.scripting.ClassFilter;
import jdk.nashorn.api.scripting.NashornScriptEngineFactory;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

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
            engine.eval(message.getScript());
            Invocable invocable = (Invocable)engine;
            packetScriptResponse.setHashResponse(Lists.newArrayList(((ScriptObjectMirror)invocable.invokeFunction("checkHash")).to(String[].class)));
        } catch (Exception ex) {
            ex.printStackTrace();
            packetScriptResponse.setHashResponse(Lists.newArrayList());
        }
        return packetScriptResponse;
    }
}
