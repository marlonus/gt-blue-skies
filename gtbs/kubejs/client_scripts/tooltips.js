ItemEvents.tooltip(event => {
    
  event.addAdvanced('gtceu:acausal_engine', (item, advanced, text) => {
      text.add(1, Text.lightPurple('Tiered multiblock framework capable of synthesizing progression pathways through causality-independent logic and dimensional recursion.'))   
      text.add(2, Text.white('This megastructure has 12 module slots at the sides. This is not a Rotary Hearth Furnace.'))  
      text.add(3, Text.red('The coils are rather difficult to get.').bold(true)) 
  })

   event.addAdvanced('gtceu:voidpiercer_drill_engine', (item, advanced, text) => {
      text.add(1, Text.lightPurple('An autonomous subsurface engine capable of breaching planetary strata to retrieve exotic matter once thought unreachable.'))   
      text.add(2, Text.white('This megastructure needs specific inputs for higher yield, maybe gaining new materials, digging deeper.'))  
      text.add(3, Text.aqua('Its so destructive, that most ores come out in dust form.')) 
      text.add(4, Text.red('Some ore dusts may need to be refined before being usable.').bold(true)) 
  })

  event.addAdvanced('gtceu:astral_extractor', (item, advanced, text) => {
    text.add(1, Text.lightPurple('At its center burns a luminous heart, transmuting astral energies into matter unbound by natural law.'))
    text.add(2, Text.white('This megastructure mines a glowing core for various materials. Its rather similar to the Voidpiercer Drill Engine.'))  
    text.add(3, Text.red('This surely isnt a Eye of Harmony.').bold(true)) 
    })

    event.addAdvanced('gtceu:large_mineral_extractor', (item, advanced, text) => {
    text.add(1, Text.lightPurple('A must for any Omnigenic Astral Bloom Extractor.'))
    text.add(2, Text.white('This big multiblock does everything the Tier 2 Void Ore Processing can, but better, and faster.'))  
    text.add(3, Text.red('Looks rather intimidating.').bold(true)) 
    })

    event.addAdvanced('kubejs:matter_processor', (item, advanced, text) => {
        text.add(1, Text.yellow('UXV-Tier Circuit'))
    })

    event.addAdvanced(['kubejs:matter_processor_assembly', 'kubejs:dimensional_processor'], (item, advanced, text) => {
        text.add(1, Text.darkBlue('OpV-Tier Circuit').bold(true))
    })

    event.addAdvanced(['kubejs:matter_processor_computer', 'kubejs:dimensional_processor_assembly', 'kubejs:ontologic_processor'], (item, advanced, text) => {
        text.add(1, Text.red('MAX-Tier Circuit').bold(true))
    })
    event.addAdvanced('#gtceu:circuits/max1', (item, advanced, text) => {
        text.add(1, Text.green('πV-Tier Circuit').bold(true))
    })
    event.addAdvanced('#gtceu:circuits/max2', (item, advanced, text) => {
        text.add(1, Text.aqua('ΩV-Tier Circuit').bold(true))
    })
    event.addAdvanced('#gtceu:circuits/max3', (item, advanced, text) => {
        text.add(1, Text.lightPurple('𐡀V-Tier Circuit').bold(true))
    })

})