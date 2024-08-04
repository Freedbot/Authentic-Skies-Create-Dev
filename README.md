# Authentic Skies Create
It's skyblock, but resources are actually scarce.  The focus is on vanilla skyblock methods, but with less grind and more Create, Botania, Occultism, and some Applied Energistics.

Upon release you'll find all the details and builds on the linked Curseforge page.  This github exists as contribution support, issue tracking, and workspace backup.  Any contribution, support, or feedback is deeply appreciated.

## Contribution
If you wish to build or fork this yourself, be aware that I use an abnormal staging method.  This workspace is not exported from a live instance, but rather a dedicated clean folder.  I know it seems a bit jank for most folks and involves a lot of copying files back and forth from the instance, but this is how I personally have to do things to reduce screwups and keep the pack clean and working.

What's missing from this workspace are the server-side mods themselves and the ProbeJS files.  To build this yourself, set up a VS Code workspace and run the build script to get a client pack that can be installed in any Curseforge compatible launcher (I use Prism).  Then copy all but the ".Client Only Mods" to "server/mods" so that the build script can also make a working server pack.  To get proper scripting support, you'll also have to install ProbeJS (both in Minecraft and VS Code) and get the files shuffled and working in the "overrides/kubejs" and ".vscode" folders.  The ProbeJS mod only needs to be installed long enough to dump new vscode files.

### Messing With Mods
	1. delete and replace the .index folder with the modified one from your Prism instance.
	2. Use Prism to export a new modlist.html with all info checked.
	3. Copy non-client mods to server/mods.
	4. Add client mods to .Client Only Mods.txt and in Notepad++: Edit, Line Operations, Sort Lex. Asc.