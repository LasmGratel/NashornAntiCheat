var modidSortedList = ['Forge','FML']
var modidSortedList=${Mod_Id_List}
var Loader = Java.type('cpw.mods.fml.common.Loader')
var DigestUtils = Java.type('org.apache.commons.codec.digest.DigestUtils')
var FileUtils = Java.type('org.apache.commons.io.FileUtils')
var Minecraft = Java.type('net.minecraft.client.Minecraft')
var File = Java.type('java.io.File')
var Hex = Java.type('org.apache.commons.codec.binary.Hex')
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
            location = new File(url.getFile().replace("file:","").split("!")[0]);
            hashes[modid] = Hex.encodeHexString(DigestUtils.md5(FileUtils.readFileToByteArray(location)))
        }
        else if(!modContainer.getSource().isFile()) {
                            //we are debugging, skip
                            continue;
        }
        else {
            hashes[modid] = Hex.encodeHexString(DigestUtils.md5(FileUtils.readFileToByteArray(modContainer.getSource())))
        }

    }
    for(var i = 0; i < modidSortedList.length; i++) {
        hashList.push(hashes[modidSortedList[i]])
    }
    console.log(hashList)
    return hashList;
}
