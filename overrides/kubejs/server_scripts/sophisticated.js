ServerEvents.recipes(event => {
    const removed_recipes = [
		'sophisticatedstorage:storage_link',
        'sophisticatedstorage:storage_link_from_controller'
    ];
	removed_recipes.forEach(id => event.remove({ id: id }));

    //item transfer nerfs
    event.replaceInput({id: 'sophisticatedstorage:controller'}, '#sophisticatedstorage:base_tier_wooden_storage', 'create:mechanical_arm')
    event.shapeless('8x sophisticatedstorage:storage_link', ['sophisticatedstorage:controller', 'sculk_sensor'])
})