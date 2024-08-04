ServerEvents.recipes(event => {
    //Remove by output
    const removed_recipes = [
		'silentgear:rough_rod',
		'silentgear:iron_rod' //duplicate with easier recipe.
    ]
	removed_recipes.forEach(id => event.remove({ output: id }));
    event.remove({input: 'silentgear:rough_rod'}) //removed crude tools just to debloat

    event.shapeless('2x silentgear:template_board', 'farmersdelight:tree_bark')
})