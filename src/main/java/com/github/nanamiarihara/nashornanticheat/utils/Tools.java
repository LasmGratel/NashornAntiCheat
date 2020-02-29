package com.github.nanamiarihara.nashornanticheat.utils;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.zip.GZIPInputStream;
import java.util.zip.GZIPOutputStream;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.io.FileUtils;
import scala.io.Source$;

public class Tools {
    public static String getFileMd5Hash(String file) throws IOException {
        return Hex.encodeHexString(DigestUtils.md5(FileUtils.readFileToByteArray(new File(file))));
    }
    public static byte[] gzipCompressMessage(String input) throws IOException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        GZIPOutputStream stream = new GZIPOutputStream(bos);
        stream.write(input.getBytes(Charset.forName("UTF-8")));
        stream.flush();
        stream.close();
        return bos.toByteArray();
    }
    public static String gzipDecompressMessage(byte[] input) throws IOException {
        ByteArrayInputStream bis = new ByteArrayInputStream(input);
        return Source$.MODULE$.fromInputStream(new GZIPInputStream(bis),"UTF-8").mkString();
    }
}
