ItemEvents.tooltip(tooltip => {
    tooltip.addAdvanced(['trident','silentgear:trident'], (item, advanced, text) => {
        text.add(1, 'Throw at a lightning rod to call down lightning.')
        text.add(2, 'Works without storms or Channeling,')
        text.add(3, 'but with a durability penalty.')
    })
    tooltip.addAdvanced('lightning_rod', (item, advanced, text) => {
        text.add(1, 'Throw any trident at it to call down lightning.')
        text.add(2, 'Works without storms or Channeling,')
        text.add(3, 'but with a durability penalty.')
    })
    tooltip.addAdvanced('botania:fel_pumpkin', (item, advanced, text) => {
        text.add(1, 'Creates a blaze when placed on two iron bars,')
        text.add(2, 'which can be slain for a blaze rod')
    })
    tooltip.addAdvanced('spawner', (item, advanced, text) => {
        text.add(1, 'Configure with a Spawner Key.')
        text.add(2, 'Right click to set/remove spawn egg.')
        text.add(3, 'Mineable, but remove the egg first')
        text.add(4, 'or it will be lost!')
    })
    tooltip.addAdvanced('reinforced_deepslate', (item, advanced, text) => {
        text.add(1, 'Witherproof')
        text.add(2, 'Mineable with a Netherite level pickaxe.')
    })
})