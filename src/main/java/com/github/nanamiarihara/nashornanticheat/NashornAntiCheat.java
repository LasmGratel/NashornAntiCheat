package com.github.nanamiarihara.nashornanticheat;

import com.github.nanamiarihara.nashornanticheat.proxy.Proxy;
import cpw.mods.fml.common.Mod;
import cpw.mods.fml.common.SidedProxy;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;

@Mod(modid = NashornAntiCheat.MODID)
public class NashornAntiCheat {
    public static final String MODID = "nashornanticheat";

    @SidedProxy(clientSide = "com.github.nanamiarihara.nashornanticheat.proxy.ClientProxy", serverSide = "com.github.nanamiarihara.nashornanticheat.proxy.ServerProxy")
    private static Proxy proxy;

    @Mod.EventHandler
    public void preInit(FMLPreInitializationEvent event) throws Exception {
        proxy.init(event);
    }
}
