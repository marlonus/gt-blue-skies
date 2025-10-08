StartupEvents.registry('item', event => {

    event.create('preheater_module').maxStackSize(1).displayName('Boiler Pre-Heater Module')

    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", 'uxv', 'opv', 'max']
    tiers.forEach((universal_circuit) => {
        event.create(`${universal_circuit}_universal_circuit`)
            .tag(`gtceu:circuits/${universal_circuit}`)
            .tag("gtceu:circuits/universal")
            .displayName(`${universal_circuit.toUpperCase()} Universal Circuit`)
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: `kubejs:item/circuits/universal/${universal_circuit}_universal_circuit` })
    })

    event.create('max1_universal_circuit')
            .tag("gtceu:circuits/max1")
            .tag("gtceu:circuits/universal")
            .displayName('πV Universal Circuit')
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: "kubejs:item/circuits/universal/max1_universal_circuit" })

    event.create('max2_universal_circuit')
            .tag("gtceu:circuits/max2")
            .tag("gtceu:circuits/universal")
            .displayName('ΩV Universal Circuit')
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: "kubejs:item/circuits/universal/max2_universal_circuit" })

    event.create('max3_universal_circuit')
            .tag("gtceu:circuits/max3")
            .tag("gtceu:circuits/universal")
            .displayName('𐡀V Universal Circuit')
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: "kubejs:item/circuits/universal/max3_universal_circuit" })

    event.create('refined_processor')
        .tag("gtceu:circuits/lv")
        .displayName('Refined Processor')
        .tooltip('§7LV-Tier Circuit')
        .textureJson({ layer0: "kubejs:item/circuits/refined_processor" })

    event.create('refined_processor_assembly')
        .tag("gtceu:circuits/mv")
        .displayName('Refined Processor Assembly')
        .tooltip('§7MV-Tier Circuit')
        .textureJson({ layer0: "kubejs:item/circuits/refined_processor_assembly" })

    event.create('refined_processor_supercomputer')
        .tag("gtceu:circuits/hv")
        .displayName('Refined Processor Supercomputer')
        .tooltip('§7HV-Tier Circuit')
        .textureJson({ layer0: "kubejs:item/circuits/refined_processor_supercomputer" })

    event.create('refined_processor_mainframe')
        .tag("gtceu:circuits/ev")
        .displayName('Refined Processor Mainframe')
        .tooltip('§7EV-Tier Circuit')
        .textureJson({ layer0: "kubejs:item/circuits/refined_processor_mainframe" })

    function Circuit(theme, type, volt) {
        event.create(`${theme}_${type}`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_${type}` })
            .tag(`gtceu:circuits/${volt}`)
    }

    function Mainframe(theme, volt) {
        event.create(`${theme}_processor_mainframe`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_processor_mainframe_base`, layer1: `kubejs:item/circuits/${theme}_processor_mainframe_lights` })
            .tag(`gtceu:circuits/${volt}`)
    }

    function Unit(theme) {
        event.create(`${theme}_processing_unit`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_processing_unit` })
        event.create(`${theme}_circuit_board`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_circuit_board` })
    }

    Unit("matter")
    Circuit("matter", "processor", "uxv")
    Circuit("matter", "processor_assembly", "opv")
    Circuit("matter", "processor_computer", "max")
    Mainframe("matter", "max1")

    Unit("dimensional")
    Circuit("dimensional", "processor", "opv")
    Circuit("dimensional", "processor_assembly", "max")
    Circuit("dimensional", "processor_computer", "max1")
    Mainframe("dimensional", "max2")

    Unit("ontologic")
    Circuit("ontologic", "processor", "max")
    Circuit("ontologic", "processor_assembly", "max1")
    Circuit("ontologic", "processor_computer", "max2")
    Mainframe("ontologic", "max3")

    event.create("uxpic_wafer").texture("kubejs:item/uxpic/uxpic_wafer").displayName("UXPIC Wafer")
    event.create("uxpic_chip").texture("kubejs:item/uxpic/uxpic_chip").displayName("UXPIC Chip")
    event.create("universe_boule").texture("kubejs:item/universalwafer/universal_boule").displayName("Universe-doped Monocrystalline Silicon Boule")
    event.create("universe_wafer").texture("kubejs:item/universalwafer/universal_wafer").displayName("Universe-doped Wafer")
    event.create("unactivated_multidimensional_cpu_wafer").texture("kubejs:item/multidimensionalcpu/unactivated_multidimensional_cpu_wafer").displayName("Unactivated Multidimensional CPU Wafer")
    event.create("multidimensional_cpu_wafer").texture("kubejs:item/multidimensionalcpu/multidimensional_cpu_wafer").displayName("Multidimensional CPU Wafer")
    event.create("multidimensional_cpu_chip").texture("kubejs:item/multidimensionalcpu/multidimensional_cpu_chip").displayName("Multidimensional CPU Chip")
    event.create("hyperdynamic_ram_wafer").texture("kubejs:item/hyperdynamicram/hyperdynamic_ram_wafer").displayName("Hyperdynamic RAM Wafer")
    event.create("hyperdynamic_ram_chip_base").texture("kubejs:item/hyperdynamicram/hyperdynamic_ram_chip").displayName("Hyperdynamic RAM Chip Base")
    event.create("hyperdynamic_ram_chip").texture("kubejs:item/hyperdynamicram/activated_hyperdynamic_ram_chip").displayName("Hyperdynamic RAM Chip")
    event.create("quantum_soc_wafer").texture("kubejs:item/quantumsoc/quantum_soc_wafer").displayName("Quantum SoC Wafer")
    event.create("quantum_soc_chip_base").texture("kubejs:item/quantumsoc/quantum_soc_chip_base").displayName("Quantum SoC Chip Base")
    event.create("quantum_soc_chip").texture("kubejs:item/quantumsoc/quantum_soc_chip").displayName("Quantum SoC Chip")

    event.create("sculk-compatible_trellis_microstructure").texture("kubejs:item/bioalloy/sculk-compatible_trellis_microstructure")
    event.create("fibrinogenic_sculk_goo").texture("kubejs:item/bioalloy/fibrinogenic_sculk_goo")
    event.create("sculk-saturated_microstructure_pulp").texture("kubejs:item/bioalloy/sculk-saturated_microstructure_pulp")
    event.create("animated_bioalloy_pulp").texture("kubejs:item/bioalloy/animated_bioalloy_pulp")

    event.create('empty_vial')
    .displayName('Empty Vial')
    .texture('kubejs:item/undergarden/empty_vial')

    event.create('stable_microbe_culture_vial')
    .displayName('Stable Microbial Culture Vial')
    .texture('kubejs:item/undergarden/stable_microbe_culture_vial')

    event.create('mycelial_gel')
    .displayName('Mycelial Gel')
    .texture('kubejs:item/undergarden/mycelial_gel')

    event.create('prepared_mycelial_gel')
    .displayName('Prepared Mycelial Gel')
    .texture('kubejs:item/undergarden/prepared_mycelial_gel')

    function Circuit1(theme, type, volt, additional, typeuppercase) {
        event.create(`${theme}_${type}`)
            .textureJson({ layer0: `kubejs:item/circuits/postuhv/${theme}_${type}` })
            .tag(`gtceu:circuits/${volt}`)
            .displayName(`${theme.charAt(0).toUpperCase() + theme.slice(1)}${additional} ${typeuppercase}`)
    }

    Circuit1('gooware', 'processor', 'zpm', '', 'Processor')
    Circuit1('gooware', 'processor_assembly', 'uv', '', 'Processor Assembly')
    Circuit1('gooware', 'processor_computer', 'uhv', '', 'Processor Supercomputer')
    Circuit1('gooware', 'processor_mainframe', 'uev', '', 'Processor Mainframe')

    Circuit1('optical', 'processor', 'uv', ' IMC', 'Processor')
    Circuit1('optical', 'processor_assembly', 'uhv', ' IMC', 'Processor Assembly')
    Circuit1('optical', 'processor_computer', 'uev', ' IMC', 'Processor Supercomputer')
    Circuit1('optical', 'processor_mainframe', 'uiv', ' IMC', 'Processor Mainframe')

    Circuit1('spintronic', 'processor', 'uhv', ' IMC', 'Processor')
    Circuit1('spintronic', 'processor_assembly', 'uev', ' IMC', 'Processor Assembly')
    Circuit1('spintronic', 'processor_computer', 'uiv', ' IMC', 'Processor Supercomputer')
    Circuit1('spintronic', 'processor_mainframe', 'uxv', ' IMC', 'Processor Mainframe')

    Circuit1('cosmic', 'processor', 'uev', ' Planetary', 'Processor')
    Circuit1('cosmic', 'processor_assembly', 'uiv', ' Planetary', 'Processor Assembly')
    Circuit1('cosmic', 'processor_computer', 'uxv', ' Planetary', 'Processor Supercomputer')
    Circuit1('cosmic', 'processor_mainframe', 'opv', ' Planetary', 'Processor Mainframe')

    Circuit1('supracausal', 'processor', 'uiv', ' Galactic', 'Processor')
    Circuit1('supracausal', 'processor_assembly', 'uxv', ' Galactic', 'Processor Assembly')
    Circuit1('supracausal', 'processor_computer', 'opv', ' Galactic', 'Processor Supercomputer')
    Circuit1('supracausal', 'processor_mainframe', 'max', ' Galactic', 'Processor Mainframe')

    event.create('black_hole_collapser')
    .displayName('Black Hole Collapser')
    .texture('kubejs:item/black_hole_collapser')

    event.create('black_hole_seed')
    .displayName('Black Hole Seed')
    .texture('kubejs:item/black_hole_seed')

    event.create('neutron_shifter')
    .displayName('Neutron Shifter')
    .texture('kubejs:item/neutron_shifter')
    
    event.create('stable_singularity')
    .displayName('Stable Singularity')
    .texture('kubejs:item/stable_singularity')
    
    event.create('tesseract')
    .displayName('Tesseract')
    .texture('kubejs:item/tesseract')
    
    event.create('stable_tesseract')
    .displayName('Stable Tesseract')
    .texture('kubejs:item/stable_tesseract')
    
    function quark(theme, displayname) {
        event.create(`${theme}_quark`)
            .textureJson({ layer0: `kubejs:item/quark/${theme}_quark` })
            .displayName(displayname)
    }

    quark('bottom', 'Bottom Quark')
    quark('charm', 'Charm Quark')
    quark('down', 'Down Quark')
    quark('empty', 'Empty Quark Containment Field')
    quark('strange', 'Strange Quark')
    quark('top', 'Top Quark')
    quark('unaligned', 'Unaligned Quark Containment Field')
    quark('up', 'Up Quark')

    function motor(tier, displayname) {
        event.create(`${tier}_electric_motor`)
            .textureJson({ layer0: `kubejs:item/components/${tier}_motor` })
            .displayName(displayname)
    }

    function pump(tier, displayname) {
        event.create(`${tier}_electric_pump`)
            .textureJson({ layer0: `kubejs:item/components/${tier}_pump` })
            .displayName(displayname)
    }

    function piston(tier, displayname) {
        event.create(`${tier}_electric_piston`)
            .textureJson({ layer0: `kubejs:item/components/${tier}_piston` })
            .displayName(displayname)
    }

    function conveyor(tier, displayname) {
        event.create(`${tier}_conveyor`)
            .textureJson({ layer0: `kubejs:item/components/${tier}_conveyor` })
            .displayName(displayname)
    }

    motor('max1', 'Thelemic Voltage Electric Motor')
    pump('max1', 'Thelemic Voltage Electric Pump')
    piston('max1', 'Thelemic Voltage Electric Piston')
    conveyor('max1', 'Thelemic Voltage Conveyor')

    motor('max2', 'Omniversal Voltage Electric Motor')
    pump('max2', 'Omniversal Voltage Electric Pump')
    piston('max2', 'Omniversal Voltage Electric Piston')
    conveyor('max2', 'Omniversal Voltage Conveyor')

    motor('max3', 'Ontological Voltage Electric Motor')
    pump('max3', 'Ontological Voltage Electric Pump')
    piston('max3', 'Ontological Voltage Electric Piston')
    conveyor('max3', 'Ontological Voltage Conveyor')

    motor('final', 'Final Electric Motor')
    pump('final', 'Final Electric Pump')
    piston('final', 'Final Electric Piston')
    conveyor('final', 'Final Conveyor')

    event.create('dimensional_quantum_circuit')
    .displayName('Dimensionally Perfected Quantum Circuit')
    .texture('kubejs:item/circuits/itemdimensionalquantumcircuit')

    event.create('dimensional_piko_circuit')
    .displayName('Dimensional Piko Circuit')
    .texture('kubejs:item/circuits/itemdimensionalpikocircuit')

    event.create('final_board')
    .displayName('Final Circuit Board')
    .texture('kubejs:item/circuits/gtnh/final_board')

    event.create('optical_wafer')
    .displayName('Optical Wafer')
    .texture('kubejs:item/circuits/gtnh/optical_wafer')

    event.create('optical_ram')
    .displayName('Optically Compatible RAM')
    .texture('kubejs:item/circuits/gtnh/optical_ram')

    event.create('optical_circuit_board')
    .displayName('Optical Circuit Board')
    .texture('kubejs:item/circuits/gtnh/optical_circuit_board')

    event.create('optical_chip')
    .displayName('Optical CPU Chip')
    .texture('kubejs:item/circuits/gtnh/optical_chip')

    event.create('optical_boule')
    .displayName('Optically Perfected Photon-Dipped Silicon Boule')
    .texture('kubejs:item/circuits/gtnh/optical_boule')

    event.create('living_wafer')
    .displayName('Living Wafer')
    .texture('kubejs:item/circuits/gtnh/living_wafer')

    event.create('enhanced_optical_wafer')
    .displayName('Photonically Enhanced Optical Wafer')
    .texture('kubejs:item/circuits/gtnh/enhanced_optical_wafer')

})