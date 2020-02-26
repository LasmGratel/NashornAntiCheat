package com.github.nanamiarihara.nashornanticheat;

import com.github.nanamiarihara.nashornanticheat.server.ServerScript;
import cpw.mods.fml.common.Mod;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import org.apache.commons.codec.digest.DigestUtils;

import javax.script.*;
import java.io.InputStreamReader;

@Mod(modid = NashornAntiCheat.MODID)
public class NashornAntiCheat {
    public static final String MODID = "nashornanticheat";

    @Mod.EventHandler
    public void preInit(FMLPreInitializationEvent event) throws ScriptException, NoSuchMethodException {
        NACNetworkHandler.register();
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
