// priority: 0

ServerEvents.recipes(event => {
	//Remove by recipe id
	const removed_recipes = [
		'botania:cocoon', //see occultism for alternate source
		'botania:mana_infusion/stone_to_andesite',
		//degrading output, replaced with create stone types, weights handled by crushing recipes
		'botania:orechid/copper_ore',
		'botania:orechid/iron_ore',
		'botania:orechid/gold_ore',
		//gating
		'botania:orechid/redstone_ore',
		'botania:orechid/deepslate_redstone_ore',
		'botania:orechid/deepslate_coal_ore', //re-adding with higher rates
		'botania:orechid/deepslate_diamond_ore', //re-adding with lower rates
		'botania:orechid/deepslate_iron_ore',
		'botania:orechid/deepslate_gold_ore',
		'botania:orechid/lapis_ore',
		'botania:orechid/emerald_ore',
		'botania:orechid/diamond_ore',
		'botania:orechid/deepslate_copper_ore',
		'botania:orechid_ignem/ancient_debris' //sorry, had no choice when considering Occultism balance
	];
	removed_recipes.forEach(id => event.remove({ id: id }));

	//earth rune without coal access
	event.replaceInput({id: 'botania:runic_altar/earth'},
		'coal_block',
		['coal_block', 'quark:charcoal_block']
	)
	//orechid custom ores to add
	event.recipes.botania.orechid("create:veridium", "stone", 13500)//copper 80%
	event.recipes.botania.orechid("create:crimsite", "stone", 13500)//iron 40%
	event.recipes.botania.orechid("create:ochrum", "stone", 13500)//gold 20%
	event.recipes.botania.orechid("create:asurine", "stone", 13500)//create zinc 30%
	event.recipes.botania.orechid("create:limestone", "stone", 13500)//occultism silver 10%, custom
	event.recipes.botania.orechid("deepslate_coal_ore", "deepslate", 400)//higher rate
	event.recipes.botania.orechid("deepslate_diamond_ore", "deepslate", 30)//lower rate
	event.recipes.botania.orechid("create:deepslate_zinc_ore", "deepslate", 84)//making progression possible
	event.recipes.botania.orechid("silentgear:deepslate_bort_ore", "deepslate", 100)
	
	//orechid nether ores to add
	event.recipes.botania.orechid_ignem("occultism:iesnium_ore_natural", "netherrack", 600)

	//azalea to oak saplings for apple availability
	event.recipes.botania.mana_infusion("oak_sapling", "azalea", 200, "botania:alchemy_catalyst")
	event.recipes.botania.mana_infusion("oak_sapling", "flowering_azalea", 200, "botania:alchemy_catalyst")
	//missed in botania's flower transmutation chain, better done this way anyway.
	event.recipes.botania.mana_infusion("pink_petals", "cherry_leaves", 200, "botania:alchemy_catalyst")
	
	//seed transmute loop for modded crops, occultism's demon seeds come from breaking tall grass
	//farmers delight seeds are available from at least the wandering trader... perhaps I just need the sgear?
	//For now I'll make trading required to start with "exotic" seeds
	//event.recipes.botania.mana_infusion("farmersdelight:cabbage_seeds", "occultism:datura_seeds", 6000, "botania:alchemy_catalyst")
	event.recipes.botania.mana_infusion("farmersdelight:onion", "farmersdelight:cabbage_seeds", 6000, "botania:alchemy_catalyst")
	event.recipes.botania.mana_infusion("farmersdelight:tomato_seeds", "farmersdelight:onion", 6000, "botania:alchemy_catalyst")
	event.recipes.botania.mana_infusion("farmersdelight:rice", "farmersdelight:tomato_seeds", 6000, "botania:alchemy_catalyst")
	event.recipes.botania.mana_infusion("silentgear:flax_seeds", "farmersdelight:rice", 6000, "botania:alchemy_catalyst")
	event.recipes.botania.mana_infusion("silentgear:fluffy_seeds", "silentgear:flax_seeds", 6000, "botania:alchemy_catalyst")
	//event.recipes.botania.mana_infusion("occultism:datura_seeds", "silentgear:fluffy_seeds", 6000, "botania:alchemy_catalyst")
	event.recipes.botania.mana_infusion("farmersdelight:cabbage_seeds", "silentgear:fluffy_seeds", 6000, "botania:alchemy_catalyst")
	//glow lichen availability
	event.recipes.botania.mana_infusion("glow_lichen", "moss_carpet", 6000, "botania:alchemy_catalyst")
});