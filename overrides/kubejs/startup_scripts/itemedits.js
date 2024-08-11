ItemEvents.modification(event => {
    //exchanger durability retiering
    event.modify('exchangers:stone_exchanger', item => {
        item.maxDamage = 262
    })
    event.modify('exchangers:iron_exchanger', item => {
        item.maxDamage = 500
    })
    event.modify('exchangers:diamond_exchanger', item => {
        item.maxDamage = 3122
    })
    event.modify('exchangers:obsidian_exchanger', item => {
        item.maxDamage = 0
    })
})
BlockEvents.modification(event => {
    event.modify('reinforced_deepslate', block =>{
        block.requiresTool = true
    })
})