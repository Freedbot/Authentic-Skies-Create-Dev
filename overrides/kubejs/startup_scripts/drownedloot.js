//converted empty handed zombies will pull tridents or fishing rods and maybe nautilus shells out of their pockets.
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingConversionEvent", event => {
    let {entity} = event
    if(!entity.alive) return
    if (entity.type == "minecraft:zombie" && entity.mainHandItem == "minecraft:air")
        {
            //See data/minecraft/loot_table/entities/drownedarmaments
            entity.setMainHandItem(Utils.rollChestLoot('entities/drownedarmaments')[0])
            if (Math.random() < 0.03) entity.setOffHandItem('minecraft:nautilus_shell')
        }
})