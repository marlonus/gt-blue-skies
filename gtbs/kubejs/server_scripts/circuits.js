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

        // REFINED CIRCUITS

//-----------------------------------------------// 

    greg.circuit_assembler('refined_processor_soldering_alloy')
        .itemInputs('gtceu:phenolic_printed_circuit_board', 'gtceu:ram_chip', '#gtceu:transistors', '#gtceu:capacitors', '2x #gtceu:diodes', '2x gtceu:fine_copper_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x kubejs:refined_processor')
        .duration(200)
        .EUt(eu_mv)

    greg.circuit_assembler('refined_processor_assembly_soldering_alloy')
        .itemInputs('gtceu:phenolic_printed_circuit_board', '2x kubejs:refined_processor', '2x gtceu:ram_chip', '2x #gtceu:transistors', '4x #gtceu:capacitors', '2x gtceu:fine_annealed_copper_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x kubejs:refined_processor_assembly')
        .duration(400)
        .EUt(eu_mv)

    greg.circuit_assembler('refined_processor_supercomputer_soldering_alloy')
        .itemInputs('gtceu:phenolic_printed_circuit_board', '2x kubejs:refined_processor_assembly', '4x gtceu:ram_chip', '4x #gtceu:diodes', '16x gtceu:fine_ferranite_wire', '16x gtceu:morovium_bolt')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('kubejs:refined_processor_supercomputer')
        .duration(400)
        .EUt(eu_mv)
        .cleanroom(CleanroomType.CLEANROOM)

    greg.circuit_assembler('refined_processor_mainframe_soldering_alloy')
        .itemInputs('gtceu:aethermarite_frame', '2x kubejs:refined_processor_supercomputer', '16x gtceu:ram_chip', '8x #gtceu:capacitors', '8x #gtceu:transistors', '16x gtceu:morovium_single_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('kubejs:refined_processor_mainframe')
        .duration(800)
        .EUt(eu_mv)
        .cleanroom(CleanroomType.CLEANROOM)

    greg.circuit_assembler('refined_processor_tin')
        .itemInputs('gtceu:phenolic_printed_circuit_board', 'gtceu:ram_chip', '#gtceu:transistors', '#gtceu:capacitors', '2x #gtceu:diodes', '2x gtceu:fine_copper_wire')
        .inputFluids(Fluid.of('gtceu:tin', 144))
        .itemOutputs('2x kubejs:refined_processor')
        .duration(200)
        .EUt(eu_mv)

    greg.circuit_assembler('refined_processor_assembly_tin')
        .itemInputs('gtceu:phenolic_printed_circuit_board', '2x kubejs:refined_processor', '2x gtceu:ram_chip', '2x #gtceu:transistors', '4x #gtceu:capacitors', '2x gtceu:fine_annealed_copper_wire')
        .inputFluids(Fluid.of('gtceu:tin', 288))
        .itemOutputs('2x kubejs:refined_processor_assembly')
        .duration(400)
        .EUt(eu_mv)

    greg.circuit_assembler('refined_processor_supercomputer_tin')
        .itemInputs('gtceu:phenolic_printed_circuit_board', '2x kubejs:refined_processor_assembly', '4x gtceu:ram_chip', '4x #gtceu:diodes', '16x gtceu:fine_ferranite_wire', '16x gtceu:morovium_bolt')
        .inputFluids(Fluid.of('gtceu:tin', 288))
        .itemOutputs('kubejs:refined_processor_supercomputer')
        .duration(400)
        .EUt(eu_mv)
        .cleanroom(CleanroomType.CLEANROOM)

    greg.circuit_assembler('refined_processor_mainframe_tin')
        .itemInputs('gtceu:aethermarite_frame', '2x kubejs:refined_processor_supercomputer', '16x gtceu:ram_chip', '8x #gtceu:capacitors', '8x #gtceu:transistors', '16x gtceu:morovium_single_wire')
        .inputFluids(Fluid.of('gtceu:tin', 576))
        .itemOutputs('kubejs:refined_processor_mainframe')
        .duration(800)
        .EUt(eu_mv)
        .cleanroom(CleanroomType.CLEANROOM)

//-----------------------------------------------//

        // MICRO CIRCUITS

//-----------------------------------------------// 

    greg.circuit_assembler('new_micro_processor_soldering_alloy')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '4x #gtceu:resistors', '4x #gtceu:capacitors', '4x #gtceu:transistors', '4x gtceu:fine_red_alloy_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x gtceu:micro_processor')
        .duration(200)
        .EUt(eu_hv)

    greg.circuit_assembler('new_micro_assembly_soldering_alloy')
        .itemInputs('gtceu:plastic_printed_circuit_board', '2x gtceu:micro_processor', '4x gtceu:ram_chip', '4x #gtceu:inductors', '8x #gtceu:capacitors', '8x gtceu:fine_red_alloy_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x gtceu:micro_processor_assembly')
        .duration(400)
        .EUt(eu_hv)

    greg.circuit_assembler('new_micro_supercomputer_soldering_alloy')
        .itemInputs('gtceu:plastic_printed_circuit_board', '2x gtceu:micro_processor_assembly', '4x gtceu:ram_chip', '4x #gtceu:diodes', '16x gtceu:fine_electrum_wire', '16x gtceu:blue_alloy_bolt')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('gtceu:micro_processor_computer')
        .duration(400)
        .EUt(eu_hv)

    greg.circuit_assembler('new_micro_processor_tin')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '4x #gtceu:resistors', '4x #gtceu:capacitors', '4x #gtceu:transistors', '4x gtceu:fine_red_alloy_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x gtceu:micro_processor')
        .duration(200)
        .EUt(eu_hv)

    greg.circuit_assembler('new_micro_assembly_tin')
        .itemInputs('gtceu:plastic_printed_circuit_board', '2x gtceu:micro_processor', '4x gtceu:ram_chip', '4x #gtceu:inductors', '8x #gtceu:capacitors', '8x gtceu:fine_red_alloy_wire')
        .inputFluids(Fluid.of('gtceu:tin', 288))
        .itemOutputs('2x gtceu:micro_processor_assembly')
        .duration(400)
        .EUt(eu_hv)

    greg.circuit_assembler('new_micro_supercomputer_tin')
        .itemInputs('gtceu:plastic_printed_circuit_board', '2x gtceu:micro_processor_assembly', '4x gtceu:ram_chip', '4x #gtceu:diodes', '16x gtceu:fine_electrum_wire', '16x gtceu:blue_alloy_bolt')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('gtceu:micro_processor_computer')
        .duration(400)
        .EUt(eu_hv)

    greg.circuit_assembler('new_micro_mainframe')
        .itemInputs('2x gtceu:aetherium_frame', '2x gtceu:micro_processor_computer', '4x gtceu:tungsten_single_wire', '16x #gtceu:capacitors', '16x gtceu:ram_chip', '16x gtceu:demonsteel_bolt')
        .inputFluids(Fluid.of('gtceu:infested_biosludge', 72))
        .itemOutputs('gtceu:micro_processor_mainframe')
        .duration(800)
        .EUt(eu_hv)

    greg.circuit_assembler('new_nano_mainframe')
        .itemInputs('2x gtceu:mindspore_frame', '2x gtceu:nano_processor_computer', '4x gtceu:advanced_smd_inductor', '8x gtceu:advanced_smd_capacitor', 'gtceu:oblivionite_gem', 'gtceu:dense_calorite_plate')
        .inputFluids(Fluid.of('gtceu:entropy', 72))
        .itemOutputs('gtceu:nano_processor_mainframe')
        .duration(800)
        .EUt(eu_ev)

    greg.circuit_assembler('new_quantum_mainframe')
        .itemInputs('2x gtceu:grime_alloy_frame', '2x gtceu:quantum_processor_computer', '6x gtceu:advanced_smd_inductor', '12x gtceu:advanced_smd_capacitor', 'gtceu:soul_crystal_plate', '2x gtceu:echo_ingot')
        .inputFluids(Fluid.of('gtceu:resonarium', 72))
        .itemOutputs('gtceu:quantum_processor_mainframe')
        .duration(800)
        .EUt(eu_iv)

})
