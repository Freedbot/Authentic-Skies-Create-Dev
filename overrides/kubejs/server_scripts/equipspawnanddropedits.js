//the whole list of affected mobs at the top, whittled down as we go.
EntityEvents.checkSpawn(['minecraft:creeper', 'minecraft:zombie', 'minecraft:skeleton', 'minecraft:wither_skeleton', 'minecraft:pillager', 'minecraft:vindicator', 'minecraft:ravager'], event => {
    const {entity, type, server} = event
    if(!entity.alive) return
    //doubling rare spawn rates by replacing only natural zombies and creepers
    if (type != 'spawner' && type != 'spawn_egg' && (entity.type == 'minecraft:zombie' || entity.type == 'minecraft:creeper') && Math.random() < 0.05) {
        if(entity.type == 'minecraft:zombie') {
            entity.block.createEntity('minecraft:zombie_villager').spawn()
        }
        else { entity.block.createEntity('minecraft:witch').spawn() }
        event.cancel()
    }
    //spawn an evoker with raid ravagers for easy difficulty only, elsed out of the pool
    else if (entity.type == 'minecraft:ravager') {
        if (type == 'event' && server.getWorldData().getDifficulty() == 'EASY') {
            entity.block.createEntity('minecraft:evoker').spawn()
        }
    }
    //insane attempt to arm humanoid mobs and buff gear drop chances
    else if (entity.type != 'minecraft:creeper') { //everything but creepers and ravagers
        let mobNbt = entity.getNbt()
        mobNbt.ArmorDropChances = [NBT.f(0.25), NBT.f(0.25), NBT.f(0.25), NBT.f(0.25)]
        mobNbt.HandDropChances = [NBT.f(0.25), NBT.f(0.15)]
        entity.setNbt(mobNbt)
        //replaces all weapons for zombies, wither skeletons,
        //and any skeletons that somehow didn't get bows
        //See data/minecraft/loot_table/entities/armaments
        if (entity.getHandSlots()[0] != 'minecraft:bow' && entity.type != 'minecraft:pillager' && entity.type != 'minecraft:vindicator') {
            entity.setItemSlot('mainhand', Utils.rollChestLoot('entities/armaments')[0])
            if(Math.random() < 0.15) { entity.setItemSlot('offhand', 'minecraft:shield') }
        }
    }
})
//converted drowned aren't counted under "checkSpawn".  This applies to all drowned, but doesn't have any spawn type check.
EntityEvents.spawned('minecraf:drowned', event => {
    const {entity} = event
    let mobNbt = entity.getNbt()
    mobNbt.ArmorDropChances = [NBT.f(0.25), NBT.f(0.25), NBT.f(0.25), NBT.f(0.25)]
    mobNbt.HandDropChances = [NBT.f(0.5), NBT.f(1)]
    entity.setNbt(mobNbt)
    //converted are re-equipped in /startup_scripts/drownedloot.js
})