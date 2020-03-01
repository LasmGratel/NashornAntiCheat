package com.github.nanamiarihara.nashornanticheat.mixins;

import net.minecraft.client.Minecraft;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

/**
 * works on mc class
 */
@Mixin(Minecraft.class)
public class MixinMinecraftClient {

    @Inject(method = "run", at = @At("HEAD"))
    public void run(CallbackInfo ci) {
        System.out.println("zuobide nimasile!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
}
