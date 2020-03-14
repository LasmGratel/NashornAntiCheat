package com.github.nanamiarihara.nashornanticheat.config;

import com.google.common.collect.Maps;
import java.util.Map;

public class Config {
    /**
     * stores mod hashes
     */
    private Map<String, String> modHashes = Maps.newHashMap();

    /**
     * how long before kicking player
     */
    private int challengeTimeoutMs = 60000;

    /**
     * how often shall we re-challenge player
     */
    private int challengeCycleDurationMs = 900000;

    /**
     * say fuck you to cheaters
     */
    private String messageOnChallengeFail = "Failed checking integrity of client mod pack, ENTRY DENIED.";

    public int getChallengeTimeoutMs() {
        return challengeTimeoutMs;
    }

    public void setChallengeTimeoutMs(int challengeTimeoutMs) {
        this.challengeTimeoutMs = challengeTimeoutMs;
    }

    public int getChallengeCycleDurationMs() {
        return challengeCycleDurationMs;
    }

    public void setChallengeCycleDurationMs(int challengeCycleDurationMs) {
        this.challengeCycleDurationMs = challengeCycleDurationMs;
    }

    public String getMessageOnChallengeFail() {
        return messageOnChallengeFail;
    }

    public void setMessageOnChallengeFail(String messageOnChallengeFail) {
        this.messageOnChallengeFail = messageOnChallengeFail;
    }

    public Map<String, String> getModHashes() {
        return modHashes;
    }

    public void setModHashes(Map<String, String> modHashes) {
        this.modHashes = modHashes;
    }
}
