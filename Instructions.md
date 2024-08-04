Hi there.
This is here to help people with setting up Java so modded Minecraft will work and installing this pack in certain launchers.

Let's get right down to it.  If you need extra help, feel free ask.

# Java Setup:
An incorrect Java setup is the cause of almost all issues. I'm starting with that. This is important information even if you don't need help with the rest of installing a launcher and the pack.

Firstly, make sure you have 64 bit Java version 17 installed.  If you're not 100% certain, just go ahead and [download it for your OS here](https://adoptium.net/temurin/releases/?os=any&arch=x64&package=jre&version=17).  For 1.18+ (this pack), Java 17 is required.  For Minecraft versions before 1.17, Java 8 is required.  Be aware that CurseForge's official launcher doesn't seem to support specifying different java versions per mod pack.  GD Launcher and Prism do.

This pack requires at minimum 4096 MB (that's 4 GB). I recommend 6144 MB IF you have 8+ GB of RAM. You must have at least 2 GB more RAM total than what you feed to Java.  If you have a lot of memory, still don't give Minecraft more than 9216 MB. More than that may actually make the game run slightly worse.

Java arguments. They're a voodoo magic set of text options you paste into your settings to "fix the game". An outdated or bad one will only make things worse, and without it the game stutters BADLY even on high-end systems. This set by cpw will help any pack including vanilla run much better.

-XX:+UseG1GC -Dsun.rmi.dgc.server.gcInterval=2147483646 -XX:+UnlockExperimentalVMOptions -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M

# The Launcher: 
If you don't already have it you'll want to get a launcher to run the pack, typically Prism, GDLauncher, or Curseforge.

## Prism:
[https://prismlauncher.org](https://prismlauncher.org)
1. Download the appropriate installer for your OS, and install the C++ prerequisite if needed.  If you download the portable version, be aware that you'd have to move the files and create a shortcut yourself.
2. Install Prism and go through your settings.
3. Start with the Java tab. Use the Java instructions from above to fill out Maximum memory allocation and JVM arguments.
4. Click Auto-detect. A menu will pop up with the different Java versions on your computer. Click the correct 64 bit version from above.
5. Accounts tab. Add your Microsoft login account and set it to default or Prism will fail to install any packs until you do.
6. Change any other settings you need to while you're here.
7. Click the Add Instance button on the top left of the main window, then click "Import" for direct zip file usage or "CurseForge" to download the pack.
8. *Only if Downloading* Type ONLY the word "authentic" and scroll down to find Authentic Skies Create.   The search engine is terrible and can't handle multiple word searches properly.
9. Click OK.  You'll then get a Popup for missing "Blocked" mods.  This is a Curseforge restriction.  Read this popup window carefully.
10. Click "Open Missing".  Browser tabs will open for every missing mod and attempt to download them.  If the "Watched Folders" section of the popup is correct, then the bottom left will switch to "All mods found" with a green check.  If not, drag and drop the downloaded mods onto the popup.
11. Click OK.
12. Play the game, and have fun.

Note:  You can specify a different java version for each mod pack by right clicking the pack itself and opening Edit, then Settings and setting the Java Installation differently from the default.

## GDLauncher:
[https://gdlauncher.com](https://www.curseforge.com/linkout?remoteUrl=https%253a%252f%252fgdlauncher.com%252f)
1. Install GDLauncher's setup file, let it automatically download and setup Java for you, and log into your Minecraft account.
2. Spam click the down arrow in the lower right to get past the intro and then close the "What's new" popup.
3. Add an instance with the + button in the lower left as instructed and click then click "Import" for direct zip file usage or "Browse Modpacks" to download the pack.
4. *Only if Downloading* Type ONLY the word "authentic" and scroll down to find Authentic Skies Create.   The search engine is terrible and can't handle multiple word searches properly.
5. *Only if Downloading* Click "Download Latest".
6. Rename the instance if desired and click ->.
7. Once the instance is added the main screen, take this time to edit your settings while it downloads files by clicking the gear icon on the right side of the title bar.
8. After adjusting "General" settings if desired, click the "Java" tab.
9. Adjust the Java Memory and paste the Java Custom Arguments from the Java instructions above. Delete the default Java Arguments before pasting the new ones in.
10. Play the game, and have fun.

## CurseForge:
[https://www.curseforge.com/download/app](https://www.curseforge.com/download/app)
1. Install CurseForge's setup file and follow the steps until you're on the main screen.
2. Click Minecraft Java Edition and add it.
3. Click the gear icon on the bottom left.  Click Minecraft. Scroll to the bottom.
4. Check your Java Version and adjust the Allocated Memory and paste the Additional Arguments from the Java instructions above.
5. Change any other settings you need to while you're at it.
6. At the top main menu click Minecraft, and then "+ Create" and then "import" at the top of the profile menu for direct zip file usage... OR type ONLY the word "Authentic" in the search box.
7. *Only if Downloading* Scroll down to and install Authentic Skies Create.  The search engine is terrible and can't handle multiple word searches properly.
8. Play the game, and have fun.



Pack License: BSD 3