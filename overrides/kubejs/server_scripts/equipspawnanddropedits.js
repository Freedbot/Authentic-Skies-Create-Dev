//insane attempt to arm humanoid mobs and buff drop chances
EntityEvents.spawned(['minecraft:zombie', 'minecraft:drowned', 'minecraft:skeleton', 'minecraft:wither_skeleton', 'minecraft:pillager', 'minecraft:vindicator'], event => {
    const {entity} = event
    if(!entity.alive) return
    let mobNbt = entity.getNbt()
    mobNbt.ArmorDropChances = [NBT.f(0.25), NBT.f(0.25), NBT.f(0.25), NBT.f(0.25)]
    if (entity.getType() == 'minecraft:drowned') {
        mobNbt.HandDropChances = [NBT.f(0.5), NBT.f(1)]
        entity.setNbt(mobNbt)
    }
    else {
        mobNbt.HandDropChances = [NBT.f(0.25), NBT.f(0.15)]
        entity.setNbt(mobNbt)
        //replaces all weapons for zombies, wither skeletons,
        //and any skeletons that somehow didn't get bows
        //See data/minecraft/loot_table/entities/armaments
        if (entity.getHandSlots()[0] != 'minecraft:bow' && entity.getType() != 'minecraft:pillager' && entity.getType() != 'minecraft:vindicator') {
            entity.setItemSlot('mainhand', Utils.rollChestLoot('entities/armaments')[0])
            if(Math.random() < 0.15) { entity.setItemSlot('offhand', 'minecraft:shield') }
        }
    }
})
//doubling rare spawn rates by replacing zombies and creepers
EntityEvents.checkSpawn(['minecraft:zombie', 'minecraft:creeper'], event => {
    const { entity, level, server, spawner } = event
    if(spawner == null && Math.random() < 0.05) {
        if(entity.type == 'minecraft:zombie') { 
            server.runCommandSilent(`execute in ${level.dimension} run summon minecraft:zombie_villager ${entity.x} ${entity.y} ${entity.z}`)
        }
        else server.runCommandSilent(`execute in ${level.dimension} run summon minecraft:witch ${entity.x} ${entity.y} ${entity.z}`)
        event.cancel()
    }
})