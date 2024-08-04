//see create.js for circuit press recipes via mysterious cube

ServerEvents.recipes(event => {
    //Remove by recipe id
    const removed_recipes = [
		'ae2:network/crafting/molecular_assembler',
		'ae2:network/blocks/energy_vibration_chamber',
		'ae2:network/blocks/crank',
		'ae2:network/blocks/crystal_processing_charger',
		'ae2:charger/meteorite_compass',
		'ae2:charger/charged_certus_quartz_crystal',
		'ae2wtlib:quantum_bridge_card',
		//inscriber is not a crusher
		'ae2:inscriber/ender_dust',
		'ae2:inscriber/sky_stone_dust',
		'ae2:inscriber/fluix_dust',
		'ae2:inscriber/certus_quartz_dust'
    ]
	removed_recipes.forEach(id => event.remove({ id: id }));

	//only because the original recipe makes no sense
	event.replaceInput(
		{ id: 'ae2:network/blocks/energy_energy_cell' },
		'ae2:quartz_glass',
		'createaddition:capacitor'
	)
	//Again, it made no sense
	event.shaped('ae2wtlib:quantum_bridge_card', [
		'BBB',
		'SWS',
		'BBB'
	], {
		B: 'ae2:wireless_booster',
		S: 'ae2:quantum_entangled_singularity',
		W: 'ae2:wireless_receiver'
	})
	//crafters crafting craftily for balance
	event.replaceInput(
		{ id: 'ae2:network/blocks/pattern_providers_interface' },
		'crafting_table',
		'create:mechanical_crafter'
	)
	//gating autocrafting and "pipes"
	event.replaceInput(
		[{ id: 'ae2:materials/formationcore' }, { id: 'ae2:materials/annihilationcore' }],
		'ae2:fluix_dust',
		'ae2:sky_dust'
	)
	//crafter balance and earlier accessability
	event.shaped('ae2:molecular_assembler', [
		'IGI',
		'GCG',
		'IGI'
	], {
		I: 'iron_ingot',
		G: 'ae2:quartz_glass',
		C: 'create:mechanical_crafter'
	})
	//alts undoing some gating to allow storage
	event.shaped('ae2:terminal', [
		' D ',
		'LPL',
		' D '
	], {
		D: 'ae2:fluix_dust',
		L: 'ae2:logic_processor',
		P: '#ae2:illuminated_panel'
	})
	event.shaped('ae2:storage_bus', [
		'IDI',
		'PLS',
		'IDI'
	], {
		I: 'iron_ingot',
		D: 'ae2:fluix_dust',
		L: 'ae2:logic_processor',
		P: 'piston',
		S: 'sticky_piston'
	})

	//see create.js for flawless budding certus via infinity book and certus crystal from 4 dust
	//also for sky stone dust

	//in world fluid crafting
	event.custom({
		type: 'ae2:transform',
		ingredients: [
			{ item: 'minecraft:glass_bottle' },
			{ item: 'minecraft:fermented_spider_eye' },
			{ item: 'minecraft:gunpowder' }
		],
		result: {
			item: 'minecraft:splash_potion',
			nbt: `{Potion: "minecraft:weakness"}`
		}
	})
})