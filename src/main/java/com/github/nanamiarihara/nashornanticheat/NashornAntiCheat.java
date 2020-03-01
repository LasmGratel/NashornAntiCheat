package com.github.nanamiarihara.nashornanticheat;

import com.github.nanamiarihara.nashornanticheat.proxy.Proxy;
import cpw.mods.fml.common.Loader;
import cpw.mods.fml.common.Mod;
import cpw.mods.fml.common.ModContainer;
import cpw.mods.fml.common.SidedProxy;
import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import java.util.List;

@Mod(modid = NashornAntiCheat.MODID)
public class NashornAntiCheat {
    public static final String MODID = "nashornanticheat";

    @SidedProxy(clientSide = "com.github.nanamiarihara.nashornanticheat.proxy.ClientProxy", serverSide = "com.github.nanamiarihara.nashornanticheat.proxy.ServerProxy")
    private static Proxy proxy;

    @Mod.EventHandler
    public void preInit(FMLPreInitializationEvent event) throws Exception {
        proxy.init(event);
        List<ModContainer> list = Loader.instance().getActiveModList();
        list.clear();
        System.out.println(list);
        System.out.println(Loader.instance().getActiveModList());
    }
}
