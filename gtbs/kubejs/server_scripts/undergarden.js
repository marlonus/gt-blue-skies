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

        // UNDERGARDEN

//-----------------------------------------------// 

        event.replaceOutput({ type: 'gtceu:vacuum_freezer'}, 'gtceu:froststeel_ingot', 'undergarden:froststeel_ingot')
        event.replaceOutput({ type: 'gtceu:fluid_solidifier'}, 'gtceu:froststeel_ingot', 'undergarden:froststeel_ingot')
        event.replaceOutput({ type: 'gtceu:compressor'}, 'gtceu:froststeel_ingot', 'undergarden:froststeel_ingot')

        event.replaceOutput({ type: 'gtceu:vacuum_freezer'}, 'gtceu:cloggrum_ingot', 'undergarden:cloggrum_ingot')
        event.replaceOutput({ type: 'gtceu:fluid_solidifier'}, 'gtceu:cloggrum_ingot', 'undergarden:cloggrum_ingot')
        event.replaceOutput({ type: 'gtceu:compressor'}, 'gtceu:cloggrum_ingot', 'undergarden:cloggrum_ingot')

        greg.lithosphere_extractor('swamp_sludge')
            .inputFluids(Fluid.of('minecraft:water', 1000))
            .outputFluids(Fluid.of('gtceu:biogenic_slurry', 1000), Fluid.of('gtceu:undergarden_swamp_sludge', 1000), Fluid.of('gtceu:biosludge', 3000))
            .itemOutputs('gtceu:solid_residue_dust')
            .duration(240)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.centrifuge('biogenic_centrifuge')
            .inputFluids(Fluid.of('gtceu:undergarden_swamp_sludge', 1000))
            .outputFluids(Fluid.of('gtceu:organic_fraction', 250), Fluid.of('gtceu:tainted_water', 500))
            .itemOutputs('gtceu:impure_metallic_fraction_dust')
            .duration(160)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.distillation_tower('organic_fraction_distillation')
            .inputFluids(Fluid.of('gtceu:organic_fraction', 250))
            .outputFluids(Fluid.of('gtceu:miasma_gas', 50))
            .itemOutputs('gtceu:trace_mineral_dust')
            .duration(120)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.electrolyzer('metallic_fraction')
            .itemInputs('gtceu:impure_metallic_fraction_dust')
            .itemOutputs('gtceu:froststeel_residue_dust')
            .duration(120)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.electrolyzer('trace_solid')
            .itemInputs('gtceu:solid_residue_dust')
            .itemOutputs('gtceu:trace_mineral_dust')
            .duration(240)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.chemical_bath('froststeel_residue')
            .inputFluids(Fluid.of('gtceu:enzyme_solution', 125))
            .itemInputs('gtceu:froststeel_residue_dust')
            .itemOutputs('12x gtceu:pure_froststeel_dust', '2x gtceu:putrid_effluent_dust')
            .duration(120)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.bio_reactor('biosludge_reaction')
            .inputFluids(Fluid.of('gtceu:biosludge', 1000))
            .itemInputs('gtceu:carbon_dust')
            .outputFluids(Fluid.of('gtceu:enzyme_solution', 1000), Fluid.of('gtceu:carbon_monoxide'))
            .itemOutputs('4x gtceu:putrid_effluent_dust')
            .duration(240)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.mixer('gel')
            .inputFluids(Fluid.of('gtceu:enzyme_solution', 500), Fluid.of('gtceu:biosludge', 1000))
            .outputFluids(Fluid.of('gtceu:miasma_gas', 50))
            .itemOutputs('kubejs:mycelial_gel')
            .duration(240)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.fermentation_vat('ferment')
            .itemInputs('kubejs:mycelial_gel')
            .inputFluids(Fluid.of('gtceu:oxygen', 1000))
            .itemOutputs('kubejs:prepared_mycelial_gel')
            .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
            .duration(240)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.biosphere('microbe')
            .inputFluids(Fluid.of('gtceu:biosludge', 1000))
            .itemInputs('kubejs:prepared_mycelial_gel', '3x kubejs:empty_vial')
            .itemOutputs('3x kubejs:stable_microbe_culture_vial')
            .duration(240)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.assembler('vial')
            .itemInputs('gtceu:glass_tube', '#minecraft:planks')
            .itemOutputs('3x kubejs:empty_vial')
            .duration(480)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.bio_reactor('cloggrum')
            .inputFluids(Fluid.of('gtceu:miasma_gas', 100))
            .itemInputs('2x gtceu:trace_mineral_dust', 'gtceu:carbon_dust')
            .itemOutputs('12x gtceu:cloggrum_dust')
            .outputFluids(Fluid.of('gtceu:carbon_monoxide'))
            .duration(240)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.biosphere('biosludge_infested')
            .inputFluids(Fluid.of('gtceu:enzyme_solution', 250), Fluid.of('gtceu:biogenic_slurry', 1000), Fluid.of('gtceu:tainted_water', 500))
            .itemInputs('3x kubejs:stable_microbe_culture_vial', '8x gtceu:putrid_effluent_dust')
            .itemOutputs('3x kubejs:empty_vial')
            .outputFluids(Fluid.of('gtceu:infested_biosludge', 4000))
            .duration(240)
            .EUt(eu_hv)
            .dimension('undergarden:undergarden')

        greg.gas_collector('undergarden_air')
            .outputFluids(Fluid.of('gtceu:undergarden_air', 5000))
            .EUt(eu_ev)
            .duration(200)
            .dimension('undergarden:undergarden')

        greg.vacuum_freezer('undergarden_air')
            .inputFluids(Fluid.of('gtceu:undergarden_air', 5000))
            .outputFluids(Fluid.of('gtceu:liquid_undergarden_air', 5000))
            .EUt(eu_ev)
            .duration(200)
            .dimension('undergarden:undergarden')

        greg.distillation_tower('undergarden_air')
            .inputFluids(Fluid.of('gtceu:liquid_undergarden_air', 50000))
            .outputFluids(Fluid.of('gtceu:choking_fog', 30000),Fluid.of('gtceu:miasma_gas', 10000),Fluid.of('gtceu:sulphurous_fume', 5000),Fluid.of('gtceu:putrescine_vapors', 2500),Fluid.of('gtceu:erebon', 2500))
            .EUt(eu_ev)
            .duration(2000)
            .dimension('undergarden:undergarden')


        
        
        

})