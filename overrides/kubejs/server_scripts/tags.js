//can be for item/block/fluid/entity_type
ServerEvents.tags('item', event => {
    const coral_types = [
        'tube',
        'brain',
        'bubble',
        'fire',
        'horn'
    ]
    coral_types.forEach(coral => event.add('corals', [''+coral+'_coral', ''+coral+'_coral_fan']))

    //Grouping vanilla saplings for Occultism spirit conversion
    event.add('forge:saplings_vanilla', ['oak_sapling', 'spruce_sapling', 'birch_sapling', 'jungle_sapling', 'acacia_sapling', 'dark_oak_sapling', 'mangrove_propagule', 'azalea', 'flowering_azalea'])
    event.add('candles', 'occultism:candle_white')
    //Spawn Egg Group for crafting and REI Info Tab
    event.add('forge:spawn_eggs', '/.*spawn_egg/')
    //For my bark and scrap recipes in farmersdelight.js
    event.add('forge:tools/axes', ['silentgear:axe', 'silentgear:machete', 'silentgear:mattock', 'silentgear:paxel'])
    //Disable making stone tools from flint to smash for more flint and pebbles
    event.remove('quark:stone_tool_materials', 'flint')
    //Stone from pebbles from other stone, including tradable
    event.remove('forge:stone', 'quark:permafrost')
    event.add('silentgear:pebble_crushables', ['#forge:cobblestone', '#minecraft:dripstone_replaceable_blocks', '#forge:stone', '#minecraft:stone_bricks'])
})
ServerEvents.tags('entity_type', event => {
    //Get/make the #group:thing tag collection and add ID to it
    //botania cocoon tags
    event.remove('botania:cocoon/rare', 'turtle')
    event.add('botania:cocoon/rare_aquatic', 'turtle')
  })
  ServerEvents.tags('block', event => {
    event.add('mineable/pickaxe', 'reinforced_deepslate')
    event.add('forge:needs_netherite_tool', 'reinforced_deepslate')
  })