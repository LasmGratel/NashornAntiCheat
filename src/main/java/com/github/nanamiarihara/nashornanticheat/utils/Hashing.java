package com.github.nanamiarihara.nashornanticheat.utils;

import java.io.File;
import java.io.IOException;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.io.FileUtils;

public class Hashing {
    public static String getFileMd5Hash(String file) throws IOException {
        return Hex.encodeHexString(DigestUtils.md5(FileUtils.readFileToByteArray(new File(file))));
    }
}
