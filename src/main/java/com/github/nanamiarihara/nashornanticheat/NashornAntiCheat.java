package com.github.nanamiarihara.nashornanticheat;

import com.github.nanamiarihara.nashornanticheat.proxy.Proxy;
import com.github.nanamiarihara.nashornanticheat.server.ServerScript;
import cpw.mods.fml.common.Mod;
import cpw.mods.fml.common.SidedProxy;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import java.io.IOException;
import org.apache.commons.codec.digest.DigestUtils;

import javax.script.*;
import java.io.InputStreamReader;

@Mod(modid = NashornAntiCheat.MODID)
public class NashornAntiCheat {
    public static final String MODID = "nashornanticheat";

    @SidedProxy(clientSide = "com.github.nanamiarihara.nashornanticheat.proxy.ClientProxy", serverSide = "com.github.nanamiarihara.nashornanticheat.proxy.ServerProxy")
    private static Proxy proxy;

    @Mod.EventHandler
    public void preInit(FMLPreInitializationEvent event) throws Exception {
        NACNetworkHandler.register();
        proxy.init(event);
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("js");
        Compilable compiler = (Compilable) engine;
        engine.eval(new InputStreamReader(NashornAntiCheat.class.getResourceAsStream("/corejs.min.js")));
        engine.eval(new InputStreamReader(NashornAntiCheat.class.getResourceAsStream("/javascript-obfuscator.js")));

        Invocable invocable = (Invocable) engine;
        String code = invocable.invokeMethod(invocable.invokeMethod(engine.get("JavaScriptObfuscator"),
                "obfuscate", ServerScript.createScript()), "getObfuscatedCode", engine.eval("{stringArrayEncoding: \"base64\", transformObjectKeys: true}")).toString();
        System.out.println(code);
        System.out.println(engine.eval(code));
    }
}
