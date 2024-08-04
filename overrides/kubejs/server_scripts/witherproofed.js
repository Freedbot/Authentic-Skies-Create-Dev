//Note: Witherproofed adds 20% chance for ghostly essence to drop from ghasts/wither skeletons, but it doesn't show in REI.  I have added the drop to possessed mobs through data jsons

ServerEvents.recipes(event => {
    //Remove by recipe id
    const removed_recipes = [
		'witherproofed:smithing/reinforced_alloy'
    ];
	removed_recipes.forEach(id => event.remove({ id: id }));

	//buff output due to expensive netherrite for something that can be done with chunk claiming
	event.smithing(
		'8x witherproofed:reinforced_alloy',
		'witherproofed:reinforced_compound',
		'netherite_ingot'
	)
})