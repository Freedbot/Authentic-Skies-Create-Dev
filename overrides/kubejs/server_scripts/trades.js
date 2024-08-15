MoreJSEvents.villagerTrades(event => {
    event.removeVanillaTrades('minecraft:mason', 5)
    event.addTrade('minecraft:mason', 5, 'emerald', 'chiseled_quartz_block').maxUses(12).villagerExperience(30)
    event.addTrade('minecraft:mason', 5, 'emerald', 'quartz_pillar').maxUses(12).villagerExperience(30)
})
MoreJSEvents.wandererTrades(event => {
    event.removeVanillaTrades(1);
    event.removeVanillaTrades(2);
    event.removeModdedTrades(1);
    event.removeModdedTrades(2);
    //1 means common pool, first 5 trades
    event.addTrade(1, 'emerald', 'fern').maxUses(12);
    event.addTrade(1, 'emerald', 'brown_mushroom').maxUses(12);
    event.addTrade(1, 'emerald', 'red_mushroom').maxUses(12);
    event.addTrade(1, 'emerald', 'beetroot_seeds').maxUses(12);
    event.addTrade(1, 'emerald', 'melon_seeds').maxUses(12);
    event.addTrade(1, 'emerald', 'pumpkin_seeds').maxUses(12);
    event.addTrade(1, 'emerald', 'wheat_seeds').maxUses(12);
    event.addTrade(1, 'emerald', 'vine').maxUses(12);
    event.addTrade(1, 'emerald', 'sugar_cane').maxUses(8);
    event.addTrade(1, 'emerald', 'bamboo').maxUses(8); //this one isn't vanilla
    event.addTrade(1, 'emerald', TradeItem.of('lily_pad', 2)).maxUses(5);
    event.addTrade(1, 'emerald', TradeItem.of('moss_block', 2)).maxUses(5);
    event.addTrade(1, 'emerald', TradeItem.of('pointed_dripstone', 2)).maxUses(5);
    event.addTrade(1, 'emerald', TradeItem.of('rooted_dirt', 2)).maxUses(5);
    event.addTrade(1, 'emerald', TradeItem.of('small_dripleaf', 2)).maxUses(5);
    event.addTrade(1, 'emerald', TradeItem.of('spore_blossom', 2)).maxUses(5);
    event.addTrade(1, 'emerald', TradeItem.of('red_sand', 4)).maxUses(6);
    event.addTrade(1, 'emerald', TradeItem.of('sand', 8)).maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 2), 'glowstone').maxUses(5);
    event.addTrade(1, TradeItem.of('emerald', 2), 'sea_pickle').maxUses(5);
    event.addTrade(1, TradeItem.of('emerald', 3), 'cactus').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 3), 'brain_coral_block').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 3), 'bubble_coral_block').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 3), 'fire_coral_block').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 3), 'horn_coral_block').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 3), 'tube_coral_block').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 3), 'kelp').maxUses(12);
    event.addTrade(1, TradeItem.of('emerald', 4), 'slime_ball').maxUses(5);
    event.addTrade(1, TradeItem.of('emerald', 5), 'acacia_sapling').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 5), 'birch_sapling').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 5), 'dark_oak_sapling').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 5), 'jungle_sapling').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 5), 'oak_sapling').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 5), 'spruce_sapling').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 5), 'mangrove_propagule').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 5), 'cherry_sapling').maxUses(8);
    event.addTrade(1, TradeItem.of('emerald', 5), 'nautilus_shell').maxUses(8);
    //Modded trades.  This is all of them except biome beans mixed bag
    event.addTrade(1, 'emerald', 'farmersdelight:cabbage_seeds').maxUses(12);
    event.addTrade(1, 'emerald', 'farmersdelight:tomato_seeds').maxUses(12);
    event.addTrade(1, 'emerald', 'farmersdelight:rice').maxUses(12);
    event.addTrade(1, 'emerald', 'farmersdelight:onion').maxUses(12);
    //2 means rare pool, final trade
    event.addTrade(2, TradeItem.of('emerald', 3), TradeItem.of('podzol', 3)).maxUses(6);
    event.addTrade(2, TradeItem.of('emerald', 3), 'packed_ice').maxUses(6);
    event.addTrade(2, TradeItem.of('emerald', 5), 'pufferfish_bucket').maxUses(4);
    event.addTrade(2, TradeItem.of('emerald', 5), 'tropical_fish_bucket').maxUses(4);
    event.addTrade(2, TradeItem.of('emerald', 6), 'blue_ice').maxUses(6);
    event.addTrade(2, TradeItem.of('emerald', 10), 'sniffer_egg').maxUses(2);
});