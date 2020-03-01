package com.github.nanamiarihara.nashornanticheat.mixins;

import com.google.common.collect.Lists;
import cpw.mods.fml.common.LoadController;
import cpw.mods.fml.common.ModContainer;
import java.util.List;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

@Mixin(value = LoadController.class, remap = false)
public abstract class MixinLoadController {

    @Shadow(remap = false)
    private List<ModContainer> activeModList;

    /**
     * To prevent tempering with activemodList from external code
     * @return shallow copy of activeModList instead of activeModList it self
     * @author
     */
    @Redirect(method = "getActiveModList", remap = false, at = @At(value = "INVOKE"))
    public List<ModContainer> remap_getActiveModList(LoadController controller) {
        synchronized (controller) {
            List<ModContainer> anotherContainer = Lists.newArrayList();
            for (ModContainer container : activeModList) {
                anotherContainer.add(container);
            }
            return activeModList;
        }
    }
}
