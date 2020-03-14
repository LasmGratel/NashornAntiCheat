package com.github.nanamiarihara.nashornanticheat.dyncollect;

import java.util.List;

/**
 * discarded
 *
 * collects client dynamic lib data
 *
 * maybe we can get something intresting
 *
 * like xenobyte.dll or something
 *
 * just one api
 *
 * POST /dynlibdata <gziped content>
 *
 */
public class DynlibInfo {
    private List<String> dynlibs;

    private String os;

    private String hashHWAddrs;

    private String playerName;

    public List<String> getDynlibs() {
        return dynlibs;
    }

    public void setDynlibs(List<String> dynlibs) {
        this.dynlibs = dynlibs;
    }

    public String getOs() {
        return os;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public String getHashHWAddrs() {
        return hashHWAddrs;
    }

    public void setHashHWAddrs(String hashHWAddrs) {
        this.hashHWAddrs = hashHWAddrs;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }
}
