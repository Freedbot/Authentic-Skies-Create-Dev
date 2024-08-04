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
})
ServerEvents.tags('entity_type', event => {
    //Get/make the #group:thing tag collection and add ID to it
    //occultism tags for ritual sacrifice
    event.add('forge:axolotls', 'axolotl')
    event.add('forge:flying_passives', ['bat','parrot'])
    event.add('forge:iron_golems', 'iron_golem')
    //botania cocoon tags
    event.remove('botania:cocoon/rare', 'turtle')
    event.add('botania:cocoon/rare_aquatic', 'turtle')
  })