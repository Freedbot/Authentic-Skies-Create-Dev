ServerEvents.recipes(event => {
    //Remove by recipe id
    const removed_recipes = [
        'occultism:crafting/spirit_campfire', //removing and hiding because it's useless, but people try to use or look up crafting with it
        'occultism:ritual/possess_warden', //replaced below, lang file changed
        //garbage miner removal
        'occultism:miner/basic_resources/stone',
		'occultism:miner/ores/gravel',
		'occultism:miner/ores/clay',
		'occultism:miner/ores/otherstone',
		'occultism:miner/ores/obsidian',
		'occultism:miner/ores/magma_block',
        //not occultism, but I'm adding the recipe back here anyway
        'indestructible:indestructible_gem'
    ];
	removed_recipes.forEach(id => event.remove({ id: id }));

    //all vanilla saplings convert to "oak"
    event.replaceInput(
        {id: 'occultism:spirit_fire/otherworld_sapling_natural'},
        'oak_sapling',
        '#forge:saplings_vanilla'
    )
    //replace unaquirable raw materials
	event.replaceInput(
		[{id: 'occultism:ritual/craft_miner_foliot_unspecialized'}, {id: 'occultism:ritual/summon_foliot_crusher'}],
		'raw_iron',
		'create:crushed_raw_iron'
	)
	event.replaceInput(
		{id: 'occultism:ritual/summon_foliot_crusher'},
		'raw_gold',
		'create:crushed_raw_gold'
	)
	event.replaceInput(
		{id: 'occultism:ritual/summon_foliot_crusher'},
		'raw_copper',
		'create:crushed_raw_copper'
	)
	event.replaceInput(
		{id: 'occultism:ritual/summon_foliot_crusher'},
		'occultism:raw_silver',
		'create:crushed_raw_silver'
	)
    //too damn expensive for tier 2
    event.replaceInput(
		{id: 'occultism:ritual/craft_miner_djinni_ores'},
		'occultism:iesnium_block',
        'iron_block'
	)
    //replace unaquirable echo shard
    event.replaceInput(
		{id: 'occultism:ritual/craft_miner_afrit_deeps'},
		'echo_shard',
        'occultism:silver_block'
	)
    //replace unaquirable netherite with echo shards
    event.replaceInput(
		{id: 'occultism:ritual/craft_miner_marid_master'},
        'netherite_pickaxe',
		'recovery_compass'
	)
    //wormhole recipe nerf, also see script.js
	event.replaceInput(
		{id: 'occultism:ritual/craft_stable_wormhole'},
		'ender_pearl',
		'sculk_sensor'
	)
	//fel loaf, technically this is botania, but the crafting is occultism
	event.shaped('botania:fel_loaf', [
		'SGS',
		'WFW',
		'SBS'
	], {
		S: 'string',
		W: 'wheat',
		F: 'rotten_flesh',
        B: 'bone',
        G: 'gunpowder'
	})
    event.recipes.occultism.spirit_fire('botania:cocoon', 'botania:fel_loaf')
    //just some basalt
    event.recipes.occultism.spirit_fire('basalt', 'deepslate')

    //miner pool shorthand, different miner are "junk", "ores", "deeps", and "master"
    let minorPool = (pool, ore, chance) => {
        if (pool == 'junk') pool = 'basic_resources'
        let id = 'occultism:miner/'+pool+'/'+ore.replace(/^.+:/, '')

        event.recipes.occultism.miner(Item.of(ore).withChance(chance), '#occultism:miners/'+pool).id(id)
    }
    //adding garbage back to the loot pool
    minorPool('junk', 'dirt', 10000),
    minorPool('junk', 'occultism:otherstone', 10000),
    minorPool('junk', 'obsidian', 5000),
    minorPool('junk', 'magma_block', 5000)
    //adding to the normal ore loot pool
    minorPool('ores', 'silentgear:crimson_iron_ore', 200)
    //adding to the deep ore loot pool
    minorPool('deeps', 'budding_amethyst', 10),
    minorPool('deeps', 'occultism:iesnium_ore', 10)
    //adding to the master ore loot pool
    minorPool('master', 'silentgear:azure_silver_ore', 200)
    
    //Rituals
    //Wandering Trader
    event.recipes.occultism.ritual(
        Item.of('wandering_trader_spawn_egg',
        {
            display:{
                Name:"\"Ritual: Summon Wandering Trader\"",
                Lore:["\"The Wandering Trader wants all your Emeralds\""]
            }
        }),
        [
            'gold_nugget',
            'emerald',
            'blue_carpet',
            'emerald'
        ],
        'occultism:book_of_binding_bound_foliot',
        'occultism:possess_foliot',
        30,

    ).ritualType('occultism:summon').summon('wandering_trader').dummy('occultism:ritual_possess_wandering_trader').sacrifice({tag: 'forge:zombies', name: 'Zombie'}).id('occultism:ritual/possess_wandering_trader')
    //Pillager Captain
    event.recipes.occultism.ritual(
        Item.of('pillager_spawn_egg',
        {
            display:{
                Name:"\"Ritual: Summon Pillager Captain\"",
                Lore:["\"The Pillager Captain inflicts Bad Omen\""]
            }
        }),
        [
            '#banners',
            'fermented_spider_eye',
            'crossbow',
            'emerald'
        ],
        'occultism:book_of_binding_bound_djinni',
        'occultism:summon_foliot',
        60,

    ).ritualType('occultism:summon').summon('pillager')
    .entityNbt(`{CanJoinRaid: 1b, OnGround: 1b, AbsorptionAmount: 0.0f, PatrolLeader: 1b, Invulnerable: 0b, ArmorDropChances: [0.085f, 0.085f, 0.085f, 2.0f], ArmorItems: [{}, {}, {}, {id: "minecraft:white_banner", tag: {HideFlags: 32, display: {Name: '{"color":"gold","translate":"block.minecraft.ominous_banner"}'}, BlockEntityTag: {id: "minecraft:banner", Patterns: [{Pattern: "mr", Color: 9}, {Pattern: "bs", Color: 8}, {Pattern: "cs", Color: 7}, {Pattern: "bo", Color: 8}, {Pattern: "ms", Color: 15}, {Pattern: "hh", Color: 8}, {Pattern: "mc", Color: 8}, {Pattern: "bo", Color: 15}]}}, Count: 1b}], HandItems: [{id: "minecraft:crossbow", tag: {Damage: 0}, Count: 1b}, {}], Patrolling: 0b}`)
    .dummy('occultism:ritual_possess_pillager').sacrifice({tag: 'forge:villagers', name: 'Villager'}).id('occultism:ritual/possess_pillager')
    //Warden for Skulk
    event.recipes.occultism.ritual(
        Item.of('sculk_catalyst',
        {
            display:{
                Name:"[{\"translate\":\"item.occultism.ritual_dummy.possess_warden\"}]",
                Lore:["[{\"translate\":\"item.occultism.ritual_dummy.possess_warden.tooltip\"}]"]
            }
        }),
        [
            'ender_pearl',
            'cyan_shulker_box',
            'botania:ender_air_bottle',
            'end_stone',
            'tinted_glass',
            'cyan_wool',
            'tinted_glass',
            'cyan_wool',
            'twisting_vines',
            'twisting_vines'
        ],
        'conduit',
        'occultism:summon_wild_greater_spirit',
        60,

    ).ritualType('occultism:summon').summon('occultism:possessed_warden').dummy('occultism:ritual_dummy/possess_warden').sacrifice({tag: 'forge:axolotls', name: 'ritual.occultism.sacrifice.axolotls'}).id('occultism:ritual/possess_warden')
    //Indestructible Book
    event.recipes.occultism.ritual(
        Item.of('enchanted_book').enchant('indestructible:indestructible_enchant', 1),
        [
            Item.of('enchanted_book').enchant('unbreaking', 3).weakNBT(),
            'netherite_ingot',
            Item.of('enchanted_book').enchant('unbreaking', 3).weakNBT(),
            'netherite_ingot',
            'ae2:sky_dust',
            'ae2:sky_dust'
        ],
        'occultism:book_of_binding_bound_marid',
        'occultism:craft_marid',
        60,

    ).dummy('occultism:ritual_indestructible_enchanted_book').id('occultism:ritual/indestructible_enchanted_book')
})