//removed all exchangers in REI except 4 to match with construction wands.
//Recipes disabled and usage tweaked by mod config.
//hidden and durability tweaked in startup_scripts
ServerEvents.recipes(event => {
    event.shaped('exchangers:stone_exchanger', [
        ' M ',
        ' E ',
        ' M '
    ], {
        M: 'stone',
        E: 'ender_eye'
    })
    event.shaped('exchangers:iron_exchanger', [
        ' M ',
        ' E ',
        ' M '
    ], {
        M: 'iron_ingot',
        E: 'ender_eye'
    })
    event.shaped('exchangers:diamond_exchanger', [
        ' M ',
        ' E ',
        ' M '
    ], {
        M: 'diamond',
        E: 'ender_eye'
    })
    event.shaped('exchangers:obsidian_exchanger', [
        'MSM',
        'MEM',
        'MSM'
    ], {
        M: 'obsidian',
        E: 'ender_eye',
        S: 'nether_star'
    })
})