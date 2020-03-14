//var modidSortedList = ['Forge','FML']
var modidSortedList=${Mod_Id_List}
var Loader = Java.type('cpw.mods.fml.common.Loader')
var Minecraft = Java.type('net.minecraft.client.Minecraft')
var Tools = Java.type('com.github.nanamiarihara.nashornanticheat.utils.Tools')
var console = {
    log: print,
    warn: print,
    error: print
};
function checkHash() {
    //console.log(modidSortedList)
    var list = Loader.instance().getActiveModList();
    var hashes = {}
    var hashList = []
    for(var i = 0; i < list.length; i++){
        var modContainer = list[i]
        var modid = list[i].getModId()
        if("minecraft.jar".equals(modContainer.getSource().getPath())) {
            //handle mcp
            var url = Tools.getMinecraftURL();
            hashes[modid] = Tools.getFileMd5Hash(url.getFile().replace("file:","").split("!")[0])
        }
        else if(!modContainer.getSource().isFile()) {
                            //we are debugging, skip
                            continue;
        }
        else {
            hashes[modid] = Tools.getFileMd5Hash(modContainer.getSource())
        }

    }
     /**
     ** remaining mod should be appended to tail
     **/
    for(var i = 0; i < modidSortedList.length; i++) {
        hashList.push(hashes[modidSortedList[i]])
        delete hashes[modidSortedList[i]]
    }
    var remaining_keys = Object.keys(hashes)
    if(remaining_keys.length > 0) {
        for(var i = 0; i < remaining_keys.length; i++) {
                hashList.push(hashes[remaining_keys[i]])
        }
    }
    return hashList;
}
