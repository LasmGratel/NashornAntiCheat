package com.github.nanamiarihara.nashornanticheat.mixins;

import com.github.nanamiarihara.nashornanticheat.utils.Tools;
import cpw.mods.fml.common.eventhandler.EventBus;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import net.minecraft.client.main.Main;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import sun.reflect.Reflection;

/**
 * works on entryPoint
 */
@Mixin(Main.class)
public class MixinMain {
    @Inject(method = "main", at = @At("HEAD"), remap = false)
    private static void run(CallbackInfo ci) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Reflection.registerFieldsToFilter(EventBus.class, "listeners", "listenerOwners", "busID");
        if(!Tools.validateJavaAgent()) {
            Method exit = Class.forName("java.lang.Shutdown").getDeclaredMethods()[1];
            exit.setAccessible(true);
            exit.invoke(null,255);
        }
    }
}
