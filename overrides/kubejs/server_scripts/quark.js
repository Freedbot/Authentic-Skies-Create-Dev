ServerEvents.recipes(event => {
    //Remove by output
    const removed_recipes = [
		'quark:carrot_crate',
        'quark:potato_crate',
        'quark:beetroot_crate',
        'quark:gold_bars',
        'quark:brick_vertical_slab',
        '#quark:stools' //create seats are better
    ]
	removed_recipes.forEach(id => event.remove({ output: id }));

    //Dealing with recipe conficts here.
    const mcw_shutters = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'crimson',
        'warped',
        'mangrove',
        'cherry',
        'diorite',
        'andesite',
        'granite'
    ]
    mcw_shutters.forEach(mat => {
        event.remove({id: 'mcwwindows:'+mat+'_louvered_shutter'})
        event.shaped('3x mcwwindows:'+mat+'_louvered_shutter', [
            'S  ',
            ' S ',
            '  S'
        ], {
            S: mat+'_slab',
        })
    })

    const dyeSapling = [
        'blue',
        'lavender',
        'orange',
        'yellow',
        'red'
    ]
    dyeSapling.forEach(color => {(
        event.shapeless('quark:'+color+'_blossom_sapling', ['#forge:dyes/'+color, '#saplings'])
    )})
})