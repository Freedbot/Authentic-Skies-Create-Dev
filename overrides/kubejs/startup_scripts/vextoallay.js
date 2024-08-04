//Vex to Allay note conversion
const $MobEntity = Java.loadClass("net.minecraft.world.entity.monster.Vex")
const $EntityType = Java.loadClass("net.minecraft.world.entity.EntityType")

ForgeEvents.onEvent('net.minecraftforge.event.level.NoteBlockEvent', (event) => {
    if (event.level.isClientSide()) return
    const { level, pos, server, player, item} = event
    let vex = level.getEntities($EntityType.VEX, AABB.ofBlocks(pos.offset(-4, -4, -4), pos.offset(4, 4, 4)), (ent) => ent instanceof $MobEntity)[0]

    if (vex == null) return
    vex.playSound('entity.zombie_villager.cure')
    vex.setRemoved('unloaded_to_chunk')
    Utils.server.runCommandSilent(`execute in ${vex.level.dimension} positioned ${vex.x} ${vex.y} ${vex.z} run summon minecraft:allay`)
})