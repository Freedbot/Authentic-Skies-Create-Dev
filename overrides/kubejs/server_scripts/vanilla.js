// priority: 0

ServerEvents.compostableRecipes( event => {
    event.add('silentgear:fluffy_seeds', 0.3)
    event.add('silentgear:flax_seeds', 0.3)
})
ServerEvents.recipes(event => {
	// Remove all of this library mod and it's recipes, but I'm still using 1 of the coins.
	event.remove({ mod: 'libraryferret' })
	//biome beans not worth it's own file, see also wandering villager for bag removal and REI hides.
	event.remove({id: 'biome_beans:mixed_bean_bag_recipe'})
	//dealing with tempad here rather than it's own file
	event.remove({id: 'tempad:tempad'})
	//smelting compatibility for silent gear and occultism
	event.smelting('silentgear:crimson_iron_ingot','create:crushed_raw_crimson_iron').xp(0.1)
	event.blasting('silentgear:crimson_iron_ingot','create:crushed_raw_crimson_iron').xp(0.1)
	event.smelting('silentgear:azure_silver_ingot','create:crushed_raw_azure_silver').xp(0.1)
	event.blasting('silentgear:azure_silver_ingot','create:crushed_raw_azure_silver').xp(0.1)
	event.smelting('occultism:silver_ingot','create:crushed_raw_silver').xp(0.1)
	event.blasting('occultism:silver_ingot','create:crushed_raw_silver').xp(0.1)
	event.smelting('occultism:iesnium_ingot','create:crushed_raw_iesnium').xp(0.1)
	event.blasting('occultism:iesnium_ingot','create:crushed_raw_iesnium').xp(0.1)
	//Sherdded end fertted bricks
	//Unique loot patterns and discs come from ritual summons and crushing sherds.
	Ingredient.of('#decorated_pot_sherds').itemIds.forEach(sherd => {
		event.stonecutting(sherd, 'brick')
	})
	//tempad sensible recipe
	event.shaped('tempad:tempad', [
		'GLB',
		'SES',
		'QQQ'
	], {
		Q: 'quartz_block',
		G: 'tinted_glass',
		L: 'redstone_lamp',
		B: 'beacon',
		S: 'ae2:quantum_entangled_singularity',
		E: 'ae2:dense_energy_cell'
	})
	//Vanilla items renewability-----------------------------
	//Elytra
	event.shaped('elytra', [
		'RMR',
		'MLM',
		'M M'
	], {
		M: 'phantom_membrane',
		R: 'createaddition:iron_rod',
		L: 'leather'
	})
	//Deepslate has uses as witherproof block and late game ingredient potential
	//Note tooltip and block edits
	event.smithing('create:reinforced_sheet', 'netherite_upgrade_smithing_template', 'echo_shard', 'createdeco:netherite_sheet')
	//End portal frame recipe
	event.shaped('reinforced_deepslate', [
		'DDD',
		'DRD',
		'DDD'
	], {
		R: 'create:reinforced_sheet',
		D: 'deepslate'
	})
	//End portal frame recipe
	event.shaped('end_portal_frame', [
		' S ',
		'ERE',
		' E '
	], {
		E: 'end_stone',
		S: 'sculk_shrieker',
		R: 'reinforced_deepslate'
	})
	//Spawn Eggs for convenience
	event.shapeless('zombie_villager_spawn_egg', [
		'zombie_spawn_egg', 'poisonous_potato'
	])
	event.shapeless('witch_spawn_egg', [
		'creeper_spawn_egg', 'fermented_spider_eye', 'fermented_spider_eye'
	])
	//Super Early Wandering Trader
	event.shaped('wandering_trader_spawn_egg', [
		'EGE',
		'CSC',
		'EGE'
	], {
		G: 'gold_ingot',
		E: 'emerald',
		C: 'blue_carpet',
		S: '#forge:spawn_eggs'
	})
	//Spawner recipe
	event.shaped('spawner', [
		'NBN',
		'BSB',
		'NBN'
	], {
		B: 'createdeco:industrial_iron_bars',
		N: 'createdeco:netherite_nugget',
		S: 'nether_star'
	})
})
//Mined Spawner no xp
BlockEvents.broken('spawner', event => event.setXp(0))
//Right click
BlockEvents.rightClicked('block.right_click', (event) => {
	const { item, hand, facing, block, player } = event
	if (hand.name() != 'MAIN_HAND') return

	//Blockify coral in any biome
	if (item == 'minecraft:bone_meal') {
		const coral_types = [
			'tube',
			'brain',
			'bubble',
			'fire',
			'horn'
		]
		for (let coral of coral_types) {
			if ((block.equals('minecraft:'+coral+'_coral') || block.equals('minecraft:'+coral+'_coral_fan')) && !block.blockState.fluidState.empty) {
				block.set('minecraft:'+coral+'_coral_block')
				if(!player.creative) {event.item.count--}
				event.cancel()
				break
			}
		}
	}
	// allow player to pick up end portal frames and break end portals
	else if (item == 'create:wrench') {
		if (player.isCrouching()) {
			if (block.equals('minecraft:end_portal_frame')) {
				const hasEnderEye = block.properties.eye
				block.set('minecraft:air')
				player.give('minecraft:end_portal_frame')
				if (hasEnderEye == 'true') {
					player.give('minecraft:ender_eye')
				}
			}
			else if (block.equals('minecraft:end_portal')) {
				block.set('minecraft:air')
			}
		}
		else { //omgimanerd's wrench rotation script
			/** @type {{string:Internal.Direction_}} */
			const direction = {
				up: Direction.UP,
				down: Direction.DOWN,
				north: Direction.NORTH,
				south: Direction.SOUTH,
				east: Direction.EAST,
				west: Direction.WEST,
				}

				const whitelist = {
				'minecraft:piston': true,
				'minecraft:sticky_piston': true,
				'minecraft:repeater': true,
				'minecraft:comparator': true,
				'minecraft:dispenser': true,
				'minecraft:dropper': true,
				'minecraft:hopper': true,
				'minecraft:observer': true,
				}

				const forbiddenStates = {
				'minecraft:hopper': 'up',
				}
		    // check if block in whitelist
		    if (!whitelist[block.id]) return
		    // check if block has properties
		    if (block.properties === undefined) return
		    // check if block has facing property
		    const blockFacing = block.properties.facing
		    if (blockFacing === undefined) return
		    /** @type {Internal.Direction_} */
		    const blockFacingDirection = direction[blockFacing]
		    let newDirection
		    /**
		     * facing.axis is one of [x, y, z] without regard for the positive or
		     * negative direction. We need to take into account the negative or positive
		     * directive or this will rotate blocks the opposite way if we are facing
		     * the opposite side of the block.
		     */
		    if (facing.axisDirection.step > 0) {
		      newDirection = blockFacingDirection.getClockWise(facing.axis)
		    } else {
		      newDirection = blockFacingDirection.getCounterClockWise(facing.axis)
		    }
		    // check if the resulting direction is a forbidden state and do a 180, this is just based on hoppers
		    if (newDirection === forbiddenStates[block.id]) {
				newDirection = blockFacingDirection.getOpposite()
			  }
		    // create a new properties object because block.properties is immutable,
		    // copying over existing properties
		    const newProperties = Object.assign({}, block.properties, {
		      facing: newDirection,
		    })
		    // set the block
		    block.set(block.id, newProperties)
		    // swing player hand
		    player.swing()
		    // if there was a change in block state, play the wrench sound
		    if (newDirection !== blockFacingDirection) {
		      player.playNotifySound('create:wrench_rotate', 'players', 2, 1)
		    }
		    // cancel any further interaction
		    event.cancel()
		}
	}
})