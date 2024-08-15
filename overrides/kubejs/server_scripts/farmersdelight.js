//The only early source for proper stone
ServerEvents.recipes(event => {
    //Conflicting    
    event.remove({ id: 'farmersdelight:wheat_dough_from_water' })

    event.replaceOutput({id: 'farmersdelight:wheat_dough_from_eggs'},
        'farmersdelight:wheat_dough',
        'create:dough'
    )
    //stone tool reclaimation
    let toolsToPebs = (tool, multi) => {
        event.recipes.farmersdelight.cutting(
            'stone_'+tool,
            'silentgear:hammer',
            [
                Item.of('silentgear:pebble', (multi*6)),
                Item.of('silentgear:pebble', multi).withChance(0.75),
                Item.of('silentgear:pebble', multi).withChance(0.5),
                Item.of('silentgear:pebble', multi).withChance(0.25)
            ],
            "entity.item.break"
        )
    }
    toolsToPebs('pickaxe', 3),
    toolsToPebs('axe', 3),
    toolsToPebs('sword', 2),
    toolsToPebs('hoe', 2),
    toolsToPebs('shovel', 2)
    //full wood compatibility
    let cuttingWood = (mod, wood, scrapping) => {
        mod = mod+':'
        if (scrapping === undefined) scrapping = true
        //logs and wood stripping and bark
        let log = '_log'
        function barker() {
            event.recipes.farmersdelight.cutting(
                mod+wood+log,
                '#forge:tools/axes',
                [
                    mod+'stripped_'+wood+log,
                    'farmersdelight:tree_bark'
                ]
            )
        }
        if (mod != 'silentgear:') barker()
        if (mod == 'botania:') log = ''
        else log = '_wood'
        barker()
        //salvaging doors, trapdoors, and signs if set to
        if (scrapping) {
            let scrapper = (woodItem) => {
                event.recipes.farmersdelight.cutting(
                    mod+wood+woodItem,
                    '#forge:tools/axes',
                    [
                        mod+wood+'_planks'
                    ]
                )
            }
            scrapper('_door')
            scrapper('_trapdoor')
            if (mod != 'silentgear:') {scrapper('_sign'), scrapper('_hanging_sign')}
        }
    }
    cuttingWood('silentgear', 'netherwood')
    cuttingWood('quark', 'ancient')
    cuttingWood('quark', 'blossom')
    cuttingWood('botania', 'livingwood', false)
    cuttingWood('botania', 'dreamwood', false)
})