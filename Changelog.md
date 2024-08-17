## 0.3.6
* Added QuickStack mod.  Keys unbound by default.
	* To anyone trying to change the favorites color, it's borked. #SSRRGG S=saturation, R=red, G=green, nothing = blue.
* Updated Lootr, Moonlight Lib, Occultism, Oculus Flywheel Compat
* Fix GREEN NETHER and YELLOW END by Re-enabling Sky Blue band in Embeddium++
	* However, this is in default configs. You'll have to fix it yourself in Video Settings/Embeddium++/Quality++/Use Sky Blue band.  See [Github](https://github.com/Freedbot/Authentic-Skies-Create-Dev/issues/8) for pictures if you need it.
* Fix Rune of Earth accepts charcoal blocks or coal blocks
* Fixed the quest flavor text rewards for real this time by switching from /say to tellraw.
* Changed Raid Captain summon to Aviar's circle
* Expanded silent gear crafting recipe for pebbles to recycle lots of things for several stone options.
* Disabled iron golem egg drop.

## 0.3.5
* Updated Mods: CraftingTweaks, Embeddium, FramedBlocks, Occultism, Roughly Enough Items, Unnecessary Trident Tweak
* Removed Roughly Enough Trades Mod
* Replaced missing item late loot reward with reinforced deepslate.
* Replaced looting book reward in Mob Tweaks with a generous looting weapon choice reward.
* Fixed zombie villager and witch spawn boosts being triggered by placing carried mobs... lol.
* Fixed lavender blossom sapling recipe from Quark.
* Removed sneaky andesite recipe added by botania.
* Nearly doubled drowned copper drop rate.
* Very slightly boosted zombie and zomblin metal drop rates again, mostly for looting enchant.
* Added flint to stone tool smashing recipe.  Pebble drop rolls reduced but output is the same.

## 0.3.4 - NVM
* Reverted 0.3.3 entirely due to poor decision making :'(
* Removed smelting and blasting gold gear into nuggets.
* Swapped Mason's quartz block trade for chiseled

## 0.3.3
* Removed cutting board and mana alchemy recipe to break down quartz blocks due to bypassing progression.
* Redesigned and repurposed Quark hammer for pebbles.

## 0.3.2
* Reddened warning on customize world screen.
* Switched pack logo back to png for launcher support I guess.
* Fixed missing colon in netherwood script recipes that caused a minor error in console.
* Changed leaves in composting to tag item.
* Chat command quest rewards were broken.  Format changed.  No preceding /.
* REI added to server.
* Reverted CarryOn block config to disabled and blacklist because it's shared with tile entities.
	* Made turtle eggs not require silk touch.  Relevent Info tab added.
	* Reduced time required to mine obsidian (3 minutes to punch instead of 5).
* Doubled zombie and zombified piglin drop rates again.  4x total.  Also 3x looting benefit total
* Diet adjusted so that weakness only sets in at 10% average due to stats not resetting by death (I thought that's how it worked).
	* Also adjusted in quest info.

## 0.3.1 - Curseforge Public Beta
* Edited beta warning and linked curseforge page in main menu and github.
* Slight menu screen cleanup and darkmode mod blacklisting for better menu screen visuals.
* Curseforge project ID in bcc config
* Compressed background image for web pack logo
* Changed default options to dark mojang background as it affects the Forge blinding red loading screen.
* Removed the 1.20.1 migration from playtester quests.
* Updated mods.
* For those reading this on Curseforge, a full changelog will always be included in the pack files.

## 0.3.0 - The Greate 1.20.1 Migration
* Swapped Mods:
	* OCD -> Oculus (client)
	* Shutup Experimental Settings -> Yeetus Experimentus(bug resolved) (client)
	* Swing Through Grass -> Clean Swing Through Grass
	* LazyDFU ~> Smooth Boot
	* Pluto -> Krypton Reforged
	* Easier Villager Trading Reforged -> EasierVillagerTradingRebuild (client)
	* Toughness Bar, Colorful Hearts, Overloaded Armor Bar -> Overflowing Bars (client)
	* Embeddium/Rubidium Extras, Clear Skies -> Embeddium++ (client)
	* Canary -> Radium Reforged
	* Crafting Station -> Crafting Station JEI Edition (because bugs)
	* RER -> JER -> modded mob drops actually show in REI
* Added Mods: Biome Beans, Glassential, Fast IP Ping (client), Noisium, ServerCore, Oculus Flywheel Compat, Unilib (craftpresence update req)
* Removed Mods: Meme in a Bottle (no update :( ), Starlight (less necessary, bugs), Witherproofed+ShiftedLib (broken updates, comments disabled, no github, unneeded extra content)

* Fixed pause and chat menu customization
* Removed Skyblock GUI custom buttons since they're native now
* Removed Trigon button from settings menu

* Updated manifest template and and dev notes with updated Createful Plaques resource pack
* Remade DefaultOptions files and moved more client preference configs there.
* Fixed Skyblock configs to new format, whitelisted corpse interaction, and evened out ground level of the islands
* More REI collapsed groups including the new cherry wood junk.
* Made another pass at the Quark config and disabled/hid more items.

* Script Work:
	* Fixed Quark blossom wood recipes and cherry wood slab conflict with mcaw
	* Changed spawner recipe due to netherite bars missing
	* Fixed mining spawner without silk touch, but added tooltip note for potential to lose spawn egg.
	* Fixed Farmer's Delight cutting board wood and sign unification, vanilla bamboo has a straw byproduct, not bark.
	* Travelling Merchant has cherry sapling
	* Removed previous lang fix for Create Enchantment Industry because it's fixed in this version
	* Reworked tooltips with line specifications to bypass REI double text bug
	* Made sherds craftable
	* Gave sniffer eggs to wandering trader's rare shop pool
	* Added sources via Occultism possessed mobs, pressing, and crushing for all vanilla templates and new discs
	* Botania transmutation for pink petals (they missed this in the flower chain)
	* Added custom reinforced plate (my awful art) and recipe for crafting reinforced deepslate
	* Made deepslate mineable with netherite pick
	* Fixed Occultism scripts to match update
	* Datapacked extra entries to Occultism book for added/modified content including a lang tweak (I'm a bit proud)
	* Biome Beans bag removed from trades, recipes, and REI, as well as it's content items.
	* Added an Evoker spawn along side the Ravager, but only on Easy difficulty during a raid.  Turns out the pack couldn't be beaten without it.
	* Rewrote jank spawn chance boosting script to not function for spawn eggs.  It's still jank, just slightly less.

* Quest Work:
	* Golden Beans added to grass quest as a hint the mod exists.
	* Announcement rewards are switched to the restored {team} name option instead of the dumb @p. (had to bug them for this)
	* Memes removed from major quests and emergency items. :'(
	
## 0.2.1
* Another polish pass on quests
* Posted to Github, and linked it along with a google feedback form in the Playtester quests
* boosted twerk bonemeal chance
* spawners no longer need silk touch, tooltip added
* reworded info spawn egg info tab
## 0.2.0
* Reformatted pack, streamlined build process, and created server pack.
* Removed Crash Utilities due to feature redundancy.
* Added Dark Mode Everywhere
* Set REI's default back to light mode due to dark mode mod.  You'll have to edit this yourself.
* Slightly customized the pause menu.  Let me know if you actually use the Create mod button.

## 0.1.6
* Moved REI config, InventoryHUD, and Embeddium related graphics/shader options to DefaultOptions to prevent overwriting on update
* Fixed Missing Resource Packs
* Added Neko's Enchanted Books to differentiate visuals and seemingly fix a loot crate reward render bug.
* Downgraded Witherproofed 2.7.7>2.7.4, ShiftedLib 1.1.1> 1.0.2.  Author derped and made it incompatible with servers.
* Split the Infinite Resources quest in half and made the first half about brass
* Added obsidian to the classic emergency items for real this time
* Disabled the Occultism Spirit Campfire because it's useless for spirit crafting, but people were checking it's recipes and trying to use it.
* Configured Mobtimizations to not disable zombie turtle egg pathing
* Deleted default configs not required in the pack.
## 0.1.5
* Quick fix for hero of the village and bartering loot tables being in the wrong folder
## 0.1.4 - A big one
* Added the Exchangers mod and simplified it to match construction wands.
* Changed Fel Blazes to mirror the normal Blaze rod loot pool and noted it on the pumpkin
* Doubled Zombie Piglin ingot drop rates and looting to match the zombie rare loot drop rate boost.
* Doubled Zombie Villager and Witch spawn rates by converting zombies and creepers respectively.  Also spawn egg recipes.
* Swapped the turtle from the rare cocoon pool to rare aquatic
* whitelisted obsidian and turtle eggs in Carryon
* Fixed Crafting Station, Lava, and Botania unlock quests
* Added cutting board compatibility for all? missing woods
* Hid the disabled quark azalea woods
* Hid many dependancy lines in main quest line to eliminate phantom lines.
* Added a diamond info tab hint, tweaked the bartering info tab, and tweaks some quest hints
* Changed anchor for skyblock world creation menu warning.
## 0.1.3 - Oops
* Re-added REI Compatibilities that was magically missing
* updated all mods and Forge
* Enabled Quark Blossom Wood Recipes in the config
## 0.1.2 - three times checking EVERY mod.
* Removed Yeetus Experimentus due to 4-way mixin conflict with Diet, Skyblock Builder, and KubeJS that broke many tag recipes ONLY on world creation and first load.
* Disabled one tweak inside Canary's config for similar first load bug with Crafting Station and adjacent inventories.
* Added Shutup Experimental Settings
* Added FTB XMod Compat
* changed malnutrition debuff to weakness
* added obsidian to Classic Emergency items
## 0.1.1 - kubejs config fix
## 0.1.0 - Private Beta
* Taking bets on many minutes before 0.1.1