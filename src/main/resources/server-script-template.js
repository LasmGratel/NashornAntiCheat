//var modidSortedList=${modidlist}
var Loader = Java.type('cpw.mods.fml.common.Loader')
var Minecraft = Java.type('net.minecraft.client.Minecraft')
var Hashing = Java.type('com.github.nanamiarihara.nashornanticheat.utils.Hashing')
var modidSortedList = ['Forge','FML']
var console = {
    log: print,
    warn: print,
    error: print
};
function checkHash() {
    var list = Loader.instance().getActiveModList();
    var hashes = {}
    var hashList = []
    for(var i = 0; i < list.length; i++){
        var modContainer = list[i]
        var modid = list[i].getModId()
        if("minecraft.jar".equals(modContainer.getSource().getPath())) {
            //handle mcp
            var url = Minecraft.getMinecraft().getClass().getProtectionDomain().getCodeSource().getLocation();
            hashes[modid] = Hashing.getFileMd5Hash(url.getFile().replace("file:","").split("!")[0])
        }
        else if(!modContainer.getSource().isFile()) {
                            //we are debugging, skip
                            continue;
        }
        else {
            hashes[modid] = Hashing.getFileMd5Hash(modContainer.getSource())
        }

    }
    for(var i = 0; i < modidSortedList.length; i++) {
        //console.log(hashes[modidSortedList[i]])
        hashList.push(hashes[modidSortedList[i]])
    }
    console.log(hashList)
    return hashList;
}
