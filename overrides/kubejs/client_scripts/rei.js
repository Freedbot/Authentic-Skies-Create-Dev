// priority: 0
// console.info("Hello, World! (You will see this line every time client resources reload)")

const removed_items = [
    '@libraryferret',
    'ae2:vibration_chamber',
    'ae2:crank',
    'ae2:meteorite_compass',
    'ae2:charger',
    'createaddition:gold_rod',
    'createaddition:gold_wire',
    'createaddition:gold_spool',
    'createaddition:electrum_amulet',
    'create_enchantment_industry:experience_rotor', //unneeded when no alt XP to convert
    'quark:gold_bars',
    'quark:brick_vertical_slab',
    'quark:chute', //redundant
    '#quark:stools', //create seats are better
    '/corundum/', //quark, not made available and no recipes
    '/quark.+azalea(?!.+(carpet|hedge))/', //removing the disabled quark azalea wood
    'farmersdelight:wheat_dough',
    '/incomplete/', //all incomplete create multistep items
    'silentgear:rough_rod',
    'silentgear:iron_rod', //duplicate with easier recipe.
    'indestructible:indestructible_gem', //stick with just the book.  Books are simple
    'tempad:he_who_remains_tempad',
    //disabling liquid items in Sophisticated for consistancy
    'sophisticatedbackpacks:tank_upgrade',
    'sophisticatedbackpacks:pump_upgrade',
    'sophisticatedbackpacks:advanced_pump_upgrade',
    'sophisticatedbackpacks:xp_pump_upgrade',
    'sophisticatedstorage:pump_upgrade',
    'sophisticatedstorage:advanced_pump_upgrade',
    'sophisticatedstorage:xp_pump_upgrade',
    //exchanger simplification
    '/^exchangers:(?!stone|iron|diamond|obsidian)/',
    //useless/non-items
    'sophisticatedstorage:debug_tool',
    'sophisticatedstorage:inaccessible_slot',
    'sophisticatedcore:xp_still',
    'create:crushed_raw_osmium',
    'create:crushed_raw_platinum',
    'create:crushed_raw_tin',
    'create:crushed_raw_lead',
    'create:crushed_raw_quicksilver',
    'create:crushed_raw_aluminum',
    'create:crushed_raw_uranium',
    'create:crushed_raw_nickel',
    'createaddition:accumulator',
    'quark:carrot_crate',
    'quark:potato_crate',
    'quark:beetroot_crate',
    'kubejs:sky_gui',
    'ftbquests:custom_icon',
    'ftbquests:missing_item',
    'ftbquests:lootcrate',
    'questsadditions:lootcrate_block',
    '/lootr/', //all lootr chests and items, including from quark
    'create_central_kitchen:creative_tab_icon',
    'modonomicon:modonomicon',
    'occultism:dictionary_of_spirits_icon',
    'occultism:debug_wand',
    'occultism:advancement_icon',
    'occultism:pentacle',
    'occultism:spirit_campfire',
    'occultism:ritual_dummy/custom_ritual',
    'occultism:jei_dummy/none',
    'occultism:jei_dummy/require_sacrifice',
    'occultism:jei_dummy/require_item_use'
]
removed_items.forEach((id) => {REIEvents.hide('item', event => {event.hide(id)})})

//JEI Info tab additions
REIEvents.information (event => {
	event.addItem(
        [
            'gold_ingot', 'piglin_spawn_egg', Item.of('enchanted_book').enchant('soul_speed', 1).weakNBT(), Item.of('minecraft:splash_potion', '{Potion:"minecraft:fire_resistance"}').weakNBT(), Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(), 'iron_nugget', 'ender_pearl', 'white_wool', 'quartz', 'obsidian', 'crying_obsidian', 'fire_charge', 'leather', 'soul_sand', 'gravel', 'blackstone'
        ],
        'Bartering',
        'Piglin bartering has slightly better odds.  The complete list: soul speed book/boots, fire resistance/water potions, iron nuggets, ender pearls, wool, quartz, obsidian, crying obsidian, fire charges, leather, soul sand, gravel, and blackstone.'
    )
	event.addItem(
        ['vex_spawn_egg', 'allay_spawn_egg'],
        'Vex Allay Conversion',
        'Activate a note block within 4 blocks of a Vex to convert it into an Allay.'
    )
	event.addItem(
        ['#forge:spawn_eggs', 'spawner'],
        'Spawn Egg Info',
        'Spawn Eggs are rare mob drops.  They can be applied to spawners and are returned along with the spawner when it is mined.  Some can be crafted into a more rare type.'
    )
	event.addItem(
        ['diamond', 'emerald_block'],
        'Gem Sources',
        'Beloved Heroes of the people shall be handsomely rewarded.'
    )
	event.addItem(
        'witherproofed:withered_powder',
        'Withered Powder',
        'Dropped by the Wither.'
    )
	event.addItem(
        'create:wrench',
        'Moving Portals',
        'End Portal Frames can be picked up by shift-right-clicking with a Wrench.'
    )
	event.addItem(
        'end_portal_frame',
        'Wrenching Portals',
        'End Portal Frames can be picked up by shift-right-clicking with a Create Wrench.'
    )
})