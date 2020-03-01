package com.github.nanamiarihara.nashornanticheat.mixins;

import com.github.nanamiarihara.nashornanticheat.utils.UnremovableList;
import cpw.mods.fml.common.LoadController;
import cpw.mods.fml.common.Loader;
import cpw.mods.fml.common.ModContainer;
import java.util.List;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Overwrite;
import org.spongepowered.asm.mixin.Shadow;

@Mixin(value = LoadController.class, remap = false)
public abstract class MixinLoadController {

    @Shadow(remap = false)
    private Loader loader;

    @Shadow(remap = false)
    private List<ModContainer> activeModList;

    /**
     * To prevent tempering with activemodList from external code
     * @return shallow copy of activeModList instead of activeModList it self
     * @author
     */
    @Overwrite(remap = false)
    public List<ModContainer> getActiveModList() {
        return new UnremovableList<>(activeModList);
    }
}
