StartupEvents.registry('item', event => {
	event.create('sky_gui').displayName('Skyblock GUI') //fake item for button
  event.create('botania:fel_loaf') //intermediate ingredient
  //ore processing unification
  event.create('create:crushed_raw_iesnium')
  event.create('create:crushed_raw_crimson_iron')
  event.create('create:crushed_raw_azure_silver')
  //intermediate ingredient with 3D cube texture, seems like a block, isn't one
  event.create('ae2:incomp_myst_cube', 'create:sequenced_assembly').modelJson({"parent": "minecraft:block/cube_all", "textures": { "all": "ae2:item/incomp_myst_cube" }})
  //Occultism Ritual Dummy items for custom recipe format and REI searching
  event.create('occultism:ritual_summon_phantom').displayName('Ritual: Summon Phantom')
    .tooltip('The Phantom drops Membrane').texture('occultism:item/ritual_dummy')
  event.create('occultism:ritual_summon_wandering_trader').displayName('Ritual: Summon Wandering Trader')
    .tooltip('The Wandering Trader wants all your Emeralds').texture('occultism:item/ritual_dummy')
  event.create('occultism:ritual_summon_pillager').displayName('Ritual: Summon Pillager Captain')
    .tooltip('The Pillager Captain inflicts Bad Omen').texture('occultism:item/ritual_dummy')
  event.create('occultism:ritual_summon_bigger_fish').displayName('Ritual: Summon Bigger Fish')
    .tooltip('The Elder Guardian drops a Heart of the Sea').texture('occultism:item/ritual_dummy')
  event.create('occultism:ritual_summon_warden').displayName('Ritual: Summon Warden')
    .tooltip('The Warden drops a Sculk Catalyst').texture('occultism:item/ritual_dummy')
  event.create('occultism:ritual_indestructible_enchanted_book').displayName('Ritual: Indestructible Enchanted Book')
    .tooltip('Surpasses Unbreaking III.  Enchanted items no longer lose durability.').texture('occultism:item/ritual_dummy')
})
//intermediate fluid ingredient for Create liquid processing, no in world form
StartupEvents.registry('fluid', event => {
    event.create('botania:ender_air').thinTexture(0xa1e00).bucketColor(0x0a1e00).noBlock()
})