ServerEvents.recipes(event => {
    //Remove by output
    const removed_recipes = [
		'silentgear:rough_rod',
		'silentgear:iron_rod', //duplicate with easier recipe.
    'silentgear:pebble'
    ]
	removed_recipes.forEach(id => event.remove({ output: id }));
    event.remove({input: 'silentgear:rough_rod'}) //removed crude tools just to debloat
    event.replaceInput(
      { id: 'silentgear:pebble' },
      '#forge:hammers',
      'quark:hammer'
    )
    event.shapeless('9x silentgear:pebble', ['quark:hammer', '#forge:cobblestone']).id('silentgear:pebble').damageIngredient('quark:hammer')
    event.shapeless('2x silentgear:template_board', 'farmersdelight:tree_bark')
})