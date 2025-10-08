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

        // AETHER

//-----------------------------------------------//     

    greg.gas_collector('aether_air')
        .outputFluids(Fluid.of('gtceu:impure_aether_air', 11000))
        .duration(200)
        .EUt(eu_ev)
        .dimension('aether:the_aether')

    greg.centrifuge('aether_air')
        .inputFluids(Fluid.of('gtceu:impure_aether_air', 1100))
        .outputFluids(Fluid.of('gtceu:aether_air', 800))
        .itemOutputs('3x gtceu:luminescent_residue_dust')
        .duration(20)
        .EUt(eu_ev)
        .dimension('aether:the_aether')

    greg.vacuum_freezer('aether_air')
        .inputFluids(Fluid.of('gtceu:aether_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_aether_air', 4000))
        .duration(100)
        .EUt(eu_ev)
        .dimension('aether:the_aether')

    greg.distillation_tower('aether_air')
        .inputFluids(Fluid.of('gtceu:aether_air', 8000))
        .outputFluids(Fluid.of('gtceu:charged_mist', 3000), Fluid.of('gtceu:aether_vapor', 3000), Fluid.of('gtceu:void_suspension', 2000))
        .itemOutputs('20x gtceu:aether_crystal_dust')
        .duration(200)
        .EUt(eu_ev)
        .dimension('aether:the_aether')

    greg.electric_blast_furnace('luminescent')
        .itemInputs('30x gtceu:luminescent_residue_dust')
        .outputFluids(Fluid.of('gtceu:aetherium_solution', 1500))
        .itemOutputs('15x gtceu:skyborne_alloy_dust')
        .duration(200)
        .EUt(eu_ev)
        .dimension('aether:the_aether')

    greg.electrolyzer('skyborne')
        .itemInputs('3x gtceu:skyborne_alloy_dust')
        .itemOutputs('2x gtceu:gravitite_dust', 'gtceu:aurorite_dust')
        .duration(40)
        .EUt(eu_ev)
        .dimension('aether:the_aether')

    greg.autoclave('aether_powder')
        .itemInputs('2x gtceu:aether_crystal_dust')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('gtceu:zanite_gem', 'gtceu:skystone_gem')
        .duration(20)
        .EUt(eu_ev)
        .dimension('aether:the_aether')

    greg.chemical_bath('aetherium')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids(Fluid.of('gtceu:aetherium_solution', 1500))
        .itemOutputs('15x gtceu:aetherium_dust')
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 2000))
        .duration(195)
        .EUt(eu_ev)
        .dimension('aether:the_aether')

    


    

    

})