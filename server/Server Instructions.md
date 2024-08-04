# Server Installation
Assuming Java 17 is installed and running as your default java version and you've done your port and firewall forwarding...
[Java 17](https://adoptium.net/temurin/releases/?os=any&arch=x64&package=jre&version=17)
[Port Forwarding](https://www.wikihow.com/Portforward-Minecraft)

1. Extract this zip to the location you want to run the server from.
2. Edit RAM usage in the user_jvm_args.txt file.  Be extra careful with RAM, more is better, but your computer better have a lot if you're playing and hosting on the same machine.
3. Double click "start_server".  The command ".bat" file is for Windows.  The shell ".sh" is for Linux/Mac.  If you can't see file extensions, change your "View" settings in file explorer.
4. Edit server.properties as desired.
5. Have fun playing with friends.

## Troubleshooting
Failure is inevitable.
* **Server not booting?**:  It's probably Java.  Do you have specifically Java 17 installed?  If so, then the default environment variable is probably set to a different java version or not at all.  You have two options.
	1. Change your default [Java Path](https://www.java.com/en/download/help/path.html)
	2. Edit the "start_server" and replace "java" with the path to your java install.
		* On Windows, that would look something like this, but the version numbers in the path will be different.
			* "C:\Program Files\Eclipse Adoptium\jre-17.0.11.9-hotspot\bin\java.exe" @user_jvm_args.txt -jar server.jar nogui
		* On Linux, check the path with the command "readlink -f $(which java)".  The result will be something like this.
			*  /usr/lib/jvm/java-17-openjdk-amd64/bin/java @user_jvm_args.txt -jar server.jar nogui
*  **Still not booting and you're using Linux?**: It's probably a permissions issue.  Run these commands from the folder just outside your server folder.
	sudo chmod -R 775 AuthenticSkiesCreateServer	(adjust depending on the folder name)
	sudo chmod -x AuthenticSkiesCreateServer/start_server.sh  (same)
* **Other Problems**: Helping with individual management software or setting up screen or automatic startup on Linux is outside the scope of my instructions, but if something else goes wrong and it's specific to this pack, please report it to me.

## Using an MC Hosting Service or Pterodactyl/AMP.
1. Your host will have it's own web settings for Java RAM and arguments that will bypass user_jvm_args.txt, so copy them over.
2. Just point your server manager to the "server.jar" to install and launch the game.  If your software insists on using forge's defaults, then try running the server manually with the script first.  Run it locally, delete the world, and rezip it before uploading if you have to.
3. Let the server load up completely and read the last logs to make sure the server has generated the world and hasn't crashed.  Mod errors during load are normal.
4. Have fun playing with friends.

## Updating your Server
1. Backup EVERYTHING.
2. Download the updated server files.
3. Delete the old config, defaultconfigs, kubejs, and mods folders.  If you made changes here, you will have to save them separately and reapply them later.
4. Copy the above folders from the zip into the server folder.
5. Copy the contents of the defaultconfigs folder, but this time you have to overwrite them into the world/serverconfig folder.
6. Double check the Forge version in the forge-auto-install.txt of the server update and change yours as needed.
7. Reapply your changes if needed.
8. Resume fun.

**Note**: The included "server.jar" is the [Forge Server Starter](https://www.curseforge.com/minecraft/mc-mods/forge-server-starter).  Version 3.5.7.  Following the above instructions, it should do all the heavy lifting of downloading and installing Forge and Minecraft, auto-accepting the EULA, and launching the server.