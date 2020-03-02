package com.github.nanamiarihara.nashornanticheat.command;

import com.github.nanamiarihara.nashornanticheat.network.ScriptChecker;
import com.github.nanamiarihara.nashornanticheat.server.ServerScript;
import com.google.common.collect.Lists;
import java.io.IOException;
import java.util.List;
import net.minecraft.command.CommandBase;
import net.minecraft.command.ICommandSender;

public class CommandRegenScript extends CommandBase {
    @Override public String getCommandName() {
        return "regenScript";
    }

    @Override public String getCommandUsage(ICommandSender sender) {
        return "Usage: /regenScript" +
            "When client cannot join the game due to script error, Use it;";
    }

    @Override public List getCommandAliases() {
        return Lists.newArrayList();
    }

    @Override public void processCommand(ICommandSender sender, String[] args) {
        try {
            ScriptChecker.holder = ServerScript.createScript();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Override
    public int getRequiredPermissionLevel()
    {
        return 3;
    }
}
