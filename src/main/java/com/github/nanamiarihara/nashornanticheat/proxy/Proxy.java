package com.github.nanamiarihara.nashornanticheat.proxy;

import cpw.mods.fml.common.event.FMLPreInitializationEvent;
import java.io.IOException;

public interface Proxy {
    public void init(FMLPreInitializationEvent event) throws Exception;
}
