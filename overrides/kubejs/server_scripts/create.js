ServerEvents.recipes(event => {
    //Remove by recipe id
    const removed_recipes = [
        //changing tuff results
        'create:crushing/tuff',
        'create:crushing/tuff_recycling',
        //silverless electrum removal
        'create:crushing/ochrum',
        'create:crushing/ochrum_recycling',
        //removing gold wire/rod options
        'createaddition:rolling/gold_ingot',
        'createaddition:rolling/gold_plate',
        'createaddition:crafting/large_connector_gold',
        'createaddition:crafting/modular_accumulator_gold',
        'createaddition:crafting/gold_spool',
		'createaddition:crafting/electrum_amulet' //OP, like seriously

    ]
	removed_recipes.forEach(id => event.remove({ id: id }))
    //no rotor needed since sophisticated's XP is unavailable
    event.remove({output: 'create_enchantment_industry:experience_rotor'})

    //crafting
    //decorative source, for ore source, see botania
    event.shapeless('create:veridium', [
        'stone',
        'copper_ingot'
    ])
    event.shapeless('create:crimsite', [
        'stone',
        'iron_ingot'
    ])
    event.shapeless('create:ochrum', [
        'stone',
        'gold_ingot'
    ])
    event.shapeless('create:asurine', [
        'stone',
        'create:zinc_ingot'
    ])
    event.shapeless('create:limestone', [
        'stone',
        'occultism:silver_ingot'
    ])

    //crushing wheels
    event.recipes.create.crushing( //harder gold and iron, no electrum
        [
            Item.of('flint').withChance(0.25),
            Item.of('create:copper_nugget').withChance(0.1),
            Item.of('create:zinc_nugget').withChance(0.1)
        ],
        '#create:stone_types/tuff'
    )
    event.recipes.create.crushing( //see above, but without tags for consistency
        [
            Item.of('flint').withChance(0.25),
            Item.of('create:copper_nugget').withChance(0.1),
            Item.of('create:zinc_nugget').withChance(0.1)
        ],
        'tuff'
    )
    event.recipes.create.crushing( //removing silverless electrum source
        [
            Item.of('create:crushed_raw_gold').withChance(0.2),
            Item.of('gold_nugget').withChance(0.2)
        ],
        '#create:stone_types/ochrum'
    )
    event.recipes.create.crushing( //see above, but without tags for consistency
        [
            Item.of('create:crushed_raw_gold').withChance(0.2),
            Item.of('gold_nugget').withChance(0.2)
        ],
        'create:ochrum'
    )
    event.recipes.create.crushing( //creating occultism silver from limestone
        [
            Item.of('create:crushed_raw_silver').withChance(0.1),
            Item.of('occultism:silver_nugget').withChance(0.1)
        ],
        '#create:stone_types/limestone'
    )
    event.recipes.create.crushing( //see above, but without tags for consistency
        [
            Item.of('create:crushed_raw_silver').withChance(0.1),
            Item.of('occultism:silver_nugget').withChance(0.1)
        ],
        'create:limestone'
    )
    event.recipes.create.crushing( //iesnium ore compatibility, custom crushed item by qwerty
        [
            'create:crushed_raw_iesnium',
            Item.of('create:crushed_raw_iesnium').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        'occultism:iesnium_ore'
    )
    event.recipes.create.crushing( //see above, but for raw ore
        [
            'create:crushed_raw_iesnium',
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        'occultism:raw_iesnium'
    )
    event.recipes.create.crushing( //crimson iron ore compatibility, custom crushed item by me
        [
            'create:crushed_raw_crimson_iron',
            Item.of('create:crushed_raw_crimson_iron').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('netherrack').withChance(0.12)
        ],
        'silentgear:crimson_iron_ore'
    )
    event.recipes.create.crushing( //same, but blackstone variant
        [
            'create:crushed_raw_crimson_iron',
            Item.of('create:crushed_raw_crimson_iron').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('blackstone').withChance(0.12)
        ],
        'silentgear:blackstone_crimson_iron_ore'
    )
    event.recipes.create.crushing( //see above, but for raw ore
        [
            'create:crushed_raw_crimson_iron',
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        'silentgear:raw_crimson_iron'
    )
    event.recipes.create.crushing( //azure silver ore compatibility, custom crushed item by me
        [
            'create:crushed_raw_azure_silver',
            Item.of('create:crushed_raw_azure_silver').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('end_stone').withChance(0.12)
        ],
        'silentgear:azure_silver_ore'
    )
    event.recipes.create.crushing( //see above, but for raw ore
        [
            'create:crushed_raw_azure_silver',
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        'silentgear:raw_azure_silver'
    )
    //AE2 Sky Stone
    event.recipes.create.crushing(
        [
            'dragon_egg',
            'ae2:sky_dust'
        ],
        'dragon_egg'
    )

    //force electrum for power, removing copper wire entirely is too heavy handed?
    //this and buffed power efficiency should be noted in quests
	event.replaceInput(
		[{ id: 'createaddition:mechanical_crafting/alternator' },
        { id: 'createaddition:mechanical_crafting/electric_motor' }],
		'createaddition:copper_spool',
		'createaddition:electrum_spool'
	)

    //smelting
    event.recipes.minecraft.smelting(
        'create:zinc_block', 'create:raw_zinc_block', 6.3, 1800
    )
    //blasting
    event.recipes.minecraft.blasting(
        'create:zinc_block', 'create:raw_zinc_block', 6.3, 900
    )
    //squirting
    event.recipes.create.filling(
        'netherrack',
        [
            {
                fluid: 'create:potion',
                nbt: {
                    'Bottle': 'REGULAR',
                    'Potion': 'minecraft:healing'
                },
                amount: 250
            },
            'nether_bricks'
        ]
    )
    event.recipes.create.filling( //quark xp sapling source
        'quark:ancient_sapling',
        [Fluid.of('create_enchantment_industry:experience', 100), '#forge:saplings_vanilla']
    )
    event.recipes.create.filling(
        'ink_sac',
        [Fluid.of('create_enchantment_industry:ink', 250), 'rotten_flesh']
    )
    event.recipes.create.filling(
        'wet_sponge',
        [Fluid.water(1000), 'sponge']
    )
    event.recipes.create.filling(
        'botania:ender_air_bottle',
        [Fluid.of('botania:ender_air', 250), 'glass_bottle']
    )
    //draining
    event.recipes.create.emptying(
        [Fluid.of('botania:ender_air', 100), 'ae2:certus_quartz_dust'],
        'occultism:crushed_end_stone'
    )
    //washing/splashing
    event.recipes.create.splashing(
        'tuff', 'cobblestone'
    )
    //silent gear and occultism ore compatibility
    event.recipes.create.splashing(
        ['9x occultism:silver_nugget', Item.of('lapis_lazuli').withChance(0.75)],
        'create:crushed_raw_silver'
    )
    event.recipes.create.splashing(
        ['9x occultism:iesnium_nugget', Item.of('glowstone_dust').withChance(0.75)],
        'create:crushed_raw_iesnium'
    )
    event.recipes.create.splashing(
        ['9x silentgear:crimson_iron_nugget', Item.of('blaze_powder').withChance(0.75)],
        'create:crushed_raw_crimson_iron'
    )
    event.recipes.create.splashing(
        ['9x silentgear:azure_silver_nugget', Item.of('silentgear:diamond_shard').withChance(0.75)],
        'create:crushed_raw_azure_silver'
    )
    //mixing
    event.recipes.create.mixing(
        [Fluid.of('create_central_kitchen:dragon_breath', 2000), '4x diamond'],
        ['4x botania:dragonstone', 'botania:life_essence']).superheated()
    event.recipes.create.mixing(
        'crimson_nylium',
        ['netherrack', 'botania:mycelium_seeds', 'crimson_fungus'])
    event.recipes.create.mixing(
        'warped_nylium',
        ['netherrack', 'botania:mycelium_seeds', 'warped_fungus'])
    event.recipes.create.mixing(
        'gilded_blackstone',
        ['gilded_blackstone', 'gold_ingot']).heated()
    event.recipes.create.mixing(
        'powder_snow_bucket',
        ['snow_block', 'bucket'])
    //cutting/sawing
    const coral_types = [
        'tube',
        'brain',
        'bubble',
        'fire',
        'horn'
    ]
    coral_types.forEach(coral => event.recipes.create.cutting(['2x '+coral+'_coral', '2x '+coral+'_coral_fan'], coral+'_coral_block'))
    //haunting
    event.recipes.create.haunting(Item.of('chorus_fruit').withChance(0.1), '#corals')
    event.recipes.create.haunting('silentgear:netherwood_sapling', '#forge:saplings_vanilla') //silent gear sourcing
    //pressing (works on bare ground)
	coral_types.forEach(coral => event.recipes.create.pressing('calcite', 'dead_'+coral+'_coral_block'))
    //compacting (needs basin, can be heated/super)
    event.recipes.create.compacting(
        'ae2:certus_quartz_crystal',
        '4x ae2:certus_quartz_dust'
    )
    event.recipes.create.compacting(
        'echo_shard',
        ['2x sculk', 'amethyst_shard']
    )
    event.recipes.create.compacting(
        '4x ae2:flawless_budding_quartz',
        [
            Item.of('minecraft:enchanted_book').enchant('indestructible:indestructible_enchant', 1).weakNBT(),
            '4x ae2:flawed_budding_quartz',
            Fluid.of('water', 1000)
        ]
    )

    //sequenced assembly
    //this is for AE2's inscriber presses
    let part = 'ae2:incomp_myst_cube'
    event.recipes.create.sequenced_assembly(
        'ae2:mysterious_cube',
        'ae2:fluix_block',
        [
            event.recipes.create.deploying(part, [part, 'iron_block']),
            event.recipes.create.pressing(part, part),
            event.recipes.create.cutting(part, part)
        ]
    ).transitionalItem(part).loops(4)
})