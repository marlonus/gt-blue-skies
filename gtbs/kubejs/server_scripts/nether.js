ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu

    const eu_ulv = GTValues.VA[GTValues.ULV]
    const eu_lv = GTValues.VA[GTValues.LV]
    const eu_mv = GTValues.VA[GTValues.MV]
    const eu_hv = GTValues.VA[GTValues.HV]
    const eu_ev = GTValues.VA[GTValues.EV]
    const eu_iv = GTValues.VA[GTValues.IV]
    const eu_luv = GTValues.VA[GTValues.LuV]
    const eu_zpm = GTValues.VA[GTValues.ZPM]
    const eu_uv = GTValues.VA[GTValues.UV]
    const eu_uhv = GTValues.VA[GTValues.UHV]
    const eu_uev = GTValues.VA[GTValues.UEV]
    const eu_uiv = GTValues.VA[GTValues.UIV]
    const eu_uxv = GTValues.VA[GTValues.UXV]
    const eu_opv = GTValues.VA[GTValues.OpV]
    const eu_max = GTValues.VA[GTValues.MAX]
    const eu_max1 = GTValues.VA[GTValues.MAX*4]
    const eu_max2 = GTValues.VA[GTValues.MAX*16]
    const eu_max3 = GTValues.VA[GTValues.MAX*64]
    const eu_max4 = GTValues.VA[GTValues.MAX*256]

    const lvcoil = 1700
    const mvcoil = 2600
    const hvcoil = 3500
    const evcoil = 4400
    const ivcoil = 5300
    const luvcoil = 7100
    const zpmcoil = 9000
    const uvcoil = 10700
    const uhvcoil = 11600
    const uevcoil = 12500
    const uivcoil = 13400
    const uxvcoil = 14300
    const opvcoil = 15200
    const maxcoil = 16100
    const max1coil = 17000
    const max2coil = 17900
    const max3coil = 18800
    const max4coil = 99998

//-----------------------------------------------//

        // NETHER

//-----------------------------------------------//     

    greg.lithosphere_extractor('nether')
        .circuit(1)
        .itemOutputs('12x gtceu:infernal_basalt_residue_dust')
        .outputFluids(Fluid.of('minecraft:lava', 4000))
        .duration(200)
        .EUt(eu_ev)
        .dimension('minecraft:the_nether')

    greg.electrolyzer('basaltic')
        .itemInputs('12x gtceu:infernal_basalt_residue_dust')
        .itemOutputs('12x gtceu:ashen_flux_mixture_dust')
        .outputFluids(Fluid.of('gtceu:sulfurous_magma_gas', 4000))
        .duration(200)
        .EUt(eu_ev)
        .dimension('minecraft:the_nether')

    greg.distillation_tower('sulfurous_magma')
        .inputFluids(Fluid.of('gtceu:sulfurous_magma_gas', 4000))
        .itemOutputs('6x gtceu:cinder_residue_dust')
        .outputFluids(Fluid.of('gtceu:molten_obsidian_glass', 2000))
        .duration(200)
        .EUt(eu_ev)
        .dimension('minecraft:the_nether')

    greg.centrifuge('ashen')
        .itemInputs('12x gtceu:ashen_flux_mixture_dust')
        .itemOutputs('6x gtceu:smoldering_metal_sludge_dust')
        .outputFluids(Fluid.of('gtceu:pyroclastic_essence', 2000))
        .duration(200)
        .EUt(eu_ev)
        .dimension('minecraft:the_nether')

    greg.mixer('hellfire')
        .inputFluids(Fluid.of('gtceu:pyroclastic_essence', 2000), Fluid.of('gtceu:molten_obsidian_glass', 2000))
        .outputFluids(Fluid.of('gtceu:hellfire_extract', 4000))
        .duration(200)
        .EUt(eu_ev)
        .dimension('minecraft:the_nether')

    greg.electric_blast_furnace('hellfire')
        .inputFluids(Fluid.of('gtceu:hellfire_extract', 4000))
        .itemInputs('6x gtceu:cinder_residue_dust', '6x gtceu:smoldering_metal_sludge_dust')
        .itemOutputs('12x gtceu:hellfire_alloy_dust')
        .outputFluids(Fluid.of('gtceu:demonic_alloy_slurry', 6000))
        .duration(200)
        .EUt(eu_ev)
        .dimension('minecraft:the_nether')

    greg.electrolyzer('nether_last')
        .inputFluids(Fluid.of('gtceu:demonic_alloy_slurry'), 6000)
        .outputFluids(Fluid.of('gtceu:pyroflux', 1728))
        .itemOutputs('12x gtceu:demonsteel_dust', '8x gtceu:nether_star_dust')
        .duration(200)
        .EUt(eu_ev)
        .dimension('minecraft:the_nether')

    greg.lithosphere_extractor('magma')
    .circuit(2)
    .outputFluids(Fluid.of('gtceu:raw_nether_magma', 16000))
    .dimension('minecraft:the_nether')
    .duration(200)

    greg.centrifuge('imbue_lava')
    .inputFluids(Fluid.of('gtceu:raw_nether_magma', 1600))
    .itemInputs('gtceu:skystone_gem')
    .outputFluids(Fluid.of('gtceu:runic_magma_essence', 800), Fluid.of('gtceu:arcane_slag_suspension', 800))
    .duration(20)
    .dimension('minecraft:the_nether')

    greg.centrifuge('skystone_extraction')
    .inputFluids(Fluid.of('gtceu:arcane_slag_suspension', 800))
    .itemOutputs('gtceu:skystone_gem')
    .duration(20)
    .dimension('minecraft:the_nether')

    greg.mixer('arcane_lava')
    .inputFluids(Fluid.of('gtceu:runic_magma_essence', 800))
    .notConsumable('gtceu:arcane_crystal_gem')
    .outputFluids(Fluid.of('gtceu:arcane_enriched_nether_magma', 800))
    .duration(20)
    .dimension('minecraft:the_nether')

    greg.lava_generator('arcane')
    .inputFluids(Fluid.of('gtceu:arcane_enriched_nether_magma', 800))
    .outputFluids(Fluid.of('gtca:pahoehoe_lava', 800))
    .EUt(eu_iv*-16)

})