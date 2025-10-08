//priority = 90

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('space_time').parent(GTMaterialIconSet.SHINY)
    event.create('infinity_catalyst').parent(GTMaterialIconSet.FINE)
    event.create('atomic_alloy').parent(GTMaterialIconSet.BRIGHT)
    event.create('infinity_1').parent(GTMaterialIconSet.BRIGHT)
    event.create('universium').parent(GTMaterialIconSet.METALLIC)
    event.create('stellar_matter').parent(GTMaterialIconSet.METALLIC)
    event.create('cosmic_matter').parent(GTMaterialIconSet.METALLIC)
    event.create('eternity').parent(GTMaterialIconSet.METALLIC)
    event.create('eltz').parent(GTMaterialIconSet.METALLIC)
    event.create('sculk_alloy').parent(GTMaterialIconSet.METALLIC)
    event.create('monium').parent(GTMaterialIconSet.METALLIC)
    event.create('omnium').parent(GTMaterialIconSet.METALLIC)
    event.create('dilithium').parent(GTMaterialIconSet.METALLIC)

})

GTCEuStartupEvents.registry('gtceu:element', event => {

    const greg_e = (name, protons, neutrons, symbol) => {
        event.create(name)
            .protons(protons)
            .neutrons(neutrons)
            .symbol(symbol)

    }

    

    greg_e('morovium', 38, 52, 'Mo')
    greg_e('ferranite', 30, 40, 'Fn*')
    greg_e('aethermarite', 47, 61, 'Am+')
    greg_e('veltrium', 52, 74, 'Vl')
    greg_e('durium', 67, 98, -1, 'Du*')
    greg_e('quantalyte', 73, 107, 'Qt')
    greg_e('singulene', 83, 126, 'Sg+')
    greg_e('eventide_fluxite', 95, 145, 'Ef')   
    greg_e('hyperlunium', 108, 170, 'Hy*+')
    greg_e('froststeel', 109, 171, 'Fe*+')
    greg_e('regalium', 110, 172, 'Re*+')
    greg_e('utherium', 111, 173, 'Ut*+')
    greg_e('cloggrum', 112, 174, 'Cl*+')
    greg_e('cheese', 113, 175, 'Ch*')
    greg_e('pyroflux', 114, 176, 'Py+')
    greg_e('demonsteel', 115, 177, 'De*')
    greg_e('hellfire_alloy', 116, 178, 'Hf*+')
    greg_e('resonarium', 117, 179, 'R+')
    greg_e('soul_crystal', 118, 180, 'Sl-')
    greg_e('echo', 119, 181, 'Ec+')
    greg_e('grime_alloy', 120, 182, 'Gr*+')
    greg_e('solarite', 121, 183, '*S*+')
    greg_e('moltenheart', 122, 184, 'Mo*+')
    greg_e('verdanite', 123, 185, 'Ve*+')
    greg_e('manacite_crystal', 124, 186, 'Ma*+')
    greg_e('time_crystal', 125, 187, 'T*+')
    greg_e('oblivium', 128, 190, 'Θ∅⌬')
    greg_e('relictium', 129, 191, 'Rl+')
    greg_e('graviton_crystal', 130, 192, 'Ga*+')
    greg_e('aquatium', 131, 193, 'Aq*+')
    greg_e('atlantean_pearlite', 132, 194, 'AtPr*+')
    greg_e('fluxed_iridium', 134, 195, 'Q⋆ƒ')
    greg_e('tachyonium_alloy', 135, 196, 'Tχ‖Λ')
    greg_e('photon_glass', 136, 197, 'Pʘ◉')
    greg_e('gravitonium', 137, 198, 'Gv⇾')
    greg_e('nebulium_alloy', 138, 199, 'Ƈ⟡')
    greg_e('aeternium', 139, 200, 'SƇ∞✧')
    greg_e('paradoxium', 140, 201, 'Ω∄⧖')
    greg_e('psythonium', 142, 203, 'Ψµ✦')
    greg_e('singularium', 143, 204, 'A∞✹')
    greg_e('entropy', 144, 205, '∑ξ')
    greg_e('mindspore', 145, 206, 'Ψ°')
    greg_e('oblivionite', 146, 207, 'Θ∅')
    greg_e('zanite', 147, 208, 'Za°')
    greg_e('gravitite', 148, 209, 'Gr✧')
    greg_e('aetherium', 149, 210, 'Æ⁺')
    greg_e('skystone', 150, 211, 'S⋄☁')
    greg_e('aurorite', 151, 212, 'Au✧R')
    greg_e('aethersteel', 152, 214, 'AeSt')
    greg_e('manachrome', 153, 216, 'MaCh')
    greg_e('replicite', 154, 218, 'RpCt')
    greg_e('astral_alloy', 155, 220, 'AsAl')
    greg_e('voidglass_composite', 156, 222, 'VdGl')
    greg_e('quicksilver_resonance_alloy', 157, 224, 'QsRe')
    greg_e('cryoflux_steel', 158, 226, 'CrFs')
    greg_e('biovoid_alloy', 159, 228, 'BvAl')
    greg_e('naquadria_stellar_composite', 160, 230, 'NqSc')

})

GTCEuStartupEvents.registry('gtceu:material', event => {

    const flags = ([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])


    event.create('void_conglomerate')
        .ore(2, 1, true)
        .color(0x656565)

    event.create('clean_void_mixture')
        .liquid(315)
        .color(0x5A5A72)

    event.create('refined_void_mixture')
        .liquid(350)
        .color(0x3A769D)

    event.create('high_purity_void_mixture')
        .liquid(260)
        .color(0xD9EFF8)
        
    event.create('low_pressure_steam')
        .gas()
        .color(0xD8F0FF)

    event.create('high_temperature_low_pressure_steam')
        .gas()
        .color(0xB5E1FA)

    event.create('mineral_rich_concentrate')
        .liquid(320)
        .color(0x3AA785)

    event.create('gem_mixture')
        .dust()
        .color(0x58854F)
    
    event.create('flocculant_agent')
        .liquid(300)
        .color(0x5F4AE8)

    event.create('mineral_sludge_residue')
        .liquid(340)
        .color(0xFFAA22)

    event.create('trace_metal_mixture')
        .liquid(320)
        .color(0xAAA222)

    event.create('non_metallic_sludge')
        .liquid(300)
        .color(0xFFAA11)

    event.create('astrite_catalyst_1')
        .liquid(300)
        .color(0x9D2AFF)

    event.create('high_pressure_steam')
        .gas()
        .color(0xC5E1FF)

    event.create('biosludge')
        .liquid(300)
        .color(0x4A5D23)

    event.create('infested_biosludge')
        .liquid(320)
        .color(0x364C1F)

    event.create('biogenic_slurry')
        .liquid(320)
        .color(0x1D6B56)

    event.create('miasma_gas')
        .gas()
        .color(0x7CFFD6)

    event.create('enzyme_solution')
        .liquid(340)
        .color(0xB6FF3E)

    event.create('undergarden_swamp_sludge')
        .liquid(310)
        .color(0xF6FE3A)

    event.create('putrid_effluent')
        .dust()
        .color(0x58854F)

    event.create('refined_biogenic_mass')
        .ingot()
        .color(0x2F5133)
        .iconSet(GTMaterialIconSet.DULL)

    event.create('solid_residue')
        .dust()
        .color(0x5C4731)

    event.create('impure_metallic_fraction')
        .dust()
        .color(0x9cafc2)

    event.create('organic_fraction')
        .liquid(300)
        .color(0x4D302C)

    event.create('tainted_water')
        .liquid(330)
        .color(0x497a7a)

    event.create('froststeel_residue')
        .dust()
        .color(0xBFD3E6)

    event.create('moonstone')
        .dust()
        .color(0x7e8786)

    event.create('photon_moonstone')
        .liquid(2273)
        .color(0xbfab8e)

    event.create('cold_molten_salt')
        .liquid(330)
        .color(0xbeede0)

    event.create('hot_molten_salt')
        .liquid(1373)
        .color(0xd2faef)

    event.create('trace_mineral')
        .dust()
        .color(0xAFF3A6)

    event.create('choking_fog')
        .gas()
        .color(0x8A8C84)

    event.create('sulphurous_fumes')
        .gas()
        .color(0xC9A82E)

    event.create('putrescine_vapors')
        .gas()
        .color(0x6D3E5D)

    event.create('erebon')
        .gas()
        .color(0x4B79A8)

    event.create('undergarden_air')
        .gas()
        .color(0x39453d)

    event.create('liquid_undergarden_air')
        .liquid(79)
        .color(0x39453d)

    event.create('aether_crystal')
        .dust()
        .color(0x7FFFE0)

    event.create('luminescent_residue')
        .dust()
        .color(0xFFD580)

    event.create('skyborne_alloy')
        .dust()
        .color(0xC2D6FF)

    event.create('aetherium_solution')
        .liquid(290)
        .color(0x6BE8FF)

    event.create('precipitation_agent')
        .liquid(315)
        .color(0x88C97F)

    event.create('void_suspension')
        .liquid(250)
        .color(0xB6A6FF)

    event.create('aether_vapor')
        .gas()
        .color(0xD4FFFF)

    event.create('lumina_gas')
        .gas()
        .color(0xFFF7A6)

    event.create('charged_mist')
        .gas()
        .color(0x9AC6FF)

    event.create('aether_air')
        .gas()
        .color(0x9FC6AF)

    event.create('impure_aether_air')
        .gas()
        .color(0x9AC6AA)

    event.create('liquid_aether_air')
        .liquid(72)
        .color(0x9FC6AF)

    event.create('volcanic_slag_slurry')
        .liquid(3100)
        .color(0x3b2f2f)

            event.create('infernal_basalt_residue')
        .dust()
        .color(0x2E2B2B)


            event.create('sulfurous_magma_gas')
        .gas()
        .color(0xFFD700)


            event.create('molten_obsidian_glass')
        .liquid(3400)
        .color(0x3A004D)


            event.create('ashen_flux_mixture')
        .dust()
        .color(0xA9A9A9)


            event.create('pyroclastic_essence')
        .liquid(3600)
        .color(0xFF4500)


            event.create('smoldering_metal_sludge')
        .dust()
        .color(0x8B0000)


            event.create('cinder_residue')
        .dust()
        .color(0x5C4033)


            event.create('hellfire_extract')
        .liquid(3800)
        .color(0xff2400)

            event.create('demonic_alloy_slurry')
        .liquid(3700)
        .color(0x800080)

        event.create('arcane_enriched_nether_magma')
        .liquid(5000)
        .color(0xc71585)

        event.create('arcane_slag_suspension')
        .liquid(400)
        .color(0x7a1f1f)

        event.create('runic_magma_essence')
        .liquid(3000)
        .color(0xff6f00)

        event.create('raw_nether_magma')
        .liquid(2000)
        .color(0x616167)

    event.create('unprepared_void_conglomerate')
        .dust()
        .color(0x6c6a7e)

    event.create('light_void_conglomerate')
        .dust()
        .color(0xC2D6E8)

    event.create('heavy_void_conglomerate')
        .dust()
        .color(0x4C3B37)

    event.create('calcined_void_conglomerate')
        .dust()
        .color(0xA89B87)

    event.create('shining_residue')
        .liquid(300)
        .color(0xE8E4A8)
        
    event.create('prepared_void_conglomerate_mixture')
        .liquid(300)
        .color(0x7E47B8)

    event.create('sludgy_residue')
        .liquid(300)
        .color(0x3D5C38)
    



    event.create('morovium')
        .ingot()
        .liquid()
        .element(GTElements.get('morovium'))
        .color(0x4F00A3).iconSet(GTMaterialIconSet.RADIOACTIVE)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.LV], 1, 0, true)

    event.create('ferranite')
        .ingot()
        .liquid()
        .element(GTElements.get('ferranite'))
        .blastTemp(1700, 'low', GTValues.VA[GTValues.LV]*4, 1200)
        .color(0x7C5AFF).iconSet(GTMaterialIconSet.DIAMOND)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.MV], 1, 0, true)

    event.create('aethermarite')
        .ingot()
        .liquid()
        .blastTemp(2600, 'low', GTValues.VA[GTValues.MV]*4, 1200)
        .element(GTElements.get('aethermarite'))
        .color(0x59B4D0).iconSet(GTMaterialIconSet.METALLIC)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.HV], 2, 0, true)

    event.create('veltrium')
        .ingot()
        .liquid()
        .blastTemp(3500, 'low', GTValues.VA[GTValues.HV]*4, 1200)
        .element(GTElements.get('veltrium'))
        .color(0xD7F442).iconSet(GTMaterialIconSet.METALLIC)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.EV], 2, 0, true)

    event.create('durium')
        .ingot()
        .liquid()
        .blastTemp(4400, 'low', GTValues.VA[GTValues.EV]*4, 1200)
        .element(GTElements.get('durium'))
        .color(0x0099AA).iconSet(GTMaterialIconSet.DIAMOND)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.IV], 4, 0, true)

    event.create('stellar_durium')
        .ingot()
        .liquid()
        .blastTemp(4400, 'low', GTValues.VA[GTValues.EV]*4, 1200)
        .components('durium', 'tungsten')
        .color(0x0099FF).iconSet(GTMaterialIconSet.SHINY)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.IV], 4, 0, true)

    event.create('quantalyte')
        .ingot()
        .liquid()
        .blastTemp(5300, 'low', GTValues.VA[GTValues.IV]*4, 1200)
        .element(GTElements.get('quantalyte'))
        .color(0x12E0A3).iconSet(GTMaterialIconSet.RADIOACTIVE)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.LuV], 6, 0, true)

    event.create('singulene')
        .ingot()
        .liquid()
        .blastTemp(7100, 'low', GTValues.VA[GTValues.LuV]*4, 1200)
        .element(GTElements.get('singulene'))
        .color(0xCC33FF).iconSet(GTMaterialIconSet.SHINY)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.ZPM], 8, 0, true)

    event.create('eventide_fluxite')
        .ingot()
        .liquid()
        .blastTemp(9000, 'low', GTValues.VA[GTValues.ZPM]*4, 1200)
        .element(GTElements.get('eventide_fluxite'))
        .color(0xFF6655).iconSet(GTMaterialIconSet.METALLIC)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.UV], 16, 0, true)

    event.create('hyperlunium')
        .ingot()
        .liquid()
        .blastTemp(10700, 'low', GTValues.VA[GTValues.UV]*4, 1200)
        .element(GTElements.get('hyperlunium'))
        .color(0x00FFFFF).iconSet(GTMaterialIconSet.METALLIC)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
        .cableProperties(GTValues.V[GTValues.UHV], 20, 0, true)

    event.create('froststeel')
        .ingot()
        .liquid()
        .blastTemp(3500, 'low', GTValues.VA[GTValues.HV]*4, 1200)
        .ore(2, 1, true)
        .element(GTElements.get('froststeel'))
        .color(0x9dacc2).iconSet(GTMaterialIconSet.RUBY)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('regalium')
        .ingot()
        .liquid()
        .ore(2, 1, true)
        .blastTemp(3500, 'low', GTValues.VA[GTValues.HV]*4, 1200)
        .element(GTElements.get('regalium'))
        .color(0xf2bf76).iconSet(GTMaterialIconSet.DIAMOND)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('utherium')
        .ingot()
        .liquid()
        .blastTemp(3500, 'low', GTValues.VA[GTValues.HV]*4, 1200)
        .ore(2, 1, true)
        .element(GTElements.get('utherium'))
        .color(0xa63834).iconSet(GTMaterialIconSet.METALLIC)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('cloggrum')
        .ingot()
        .liquid()
        .blastTemp(3500, 'low', GTValues.VA[GTValues.HV]*4, 1200)
        .ore(2, 1, true)
        .element(GTElements.get('cloggrum'))
        .color(0xc0a07f).iconSet(GTMaterialIconSet.SHINY)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('cheese')
        .ingot()
        .liquid()
        .blastTemp(3500, 'low', GTValues.VA[GTValues.HV]*4, 1200)
        .ore(2, 1, true)
        .element(GTElements.get('cheese'))
        .color(0xFFD95E).iconSet(GTMaterialIconSet.SHINY)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('pyroflux')
        .liquid(9001)
        .color(0xFFAE00)
        .element(GTElements.get('pyroflux'))

    event.create('demonsteel')
        .ingot()
        .liquid()
        .ore(2, 1, true)
        .blastTemp(4400, 'low', GTValues.VA[GTValues.EV]*4, 1200)
        .element(GTElements.get('demonsteel'))
        .color(0x7A0E0E).iconSet(GTMaterialIconSet.SHINY)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('hellfire_alloy')
        .ingot()
        .liquid()
        .blastTemp(4400, 'low', GTValues.VA[GTValues.EV]*4, 1200)
        .ore(2, 1, true)
        .element(GTElements.get('hellfire_alloy'))
        .color(0xFF9B42).iconSet(GTMaterialIconSet.SHINY)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('resonarium')
        .ingot()
        .liquid()
        .ore(2, 1, true)
        .blastTemp(7100, 'low', GTValues.VA[GTValues.LuV]*4, 1200)
        .element(GTElements.get('resonarium'))
        .color(0x7EC8E3).iconSet(GTMaterialIconSet.DIAMOND)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('soul_crystal')
        .ingot()
        .liquid()
        .ore(2, 1, true)
        .blastTemp(7100, 'low', GTValues.VA[GTValues.LuV]*4, 1200)
        .element(GTElements.get('soul_crystal'))
        .color(0x4c2c85).iconSet(GTMaterialIconSet.OPAL)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('echo')
        .ingot()
        .liquid()
        .ore(2, 1, true)
        .blastTemp(7100, 'low', GTValues.VA[GTValues.LuV]*4, 1200)
        .element(GTElements.get('echo'))
        .color(0x00c2c7).iconSet(GTMaterialIconSet.RUBY)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('grime_alloy')
        .ingot()
        .liquid()
        .ore(2, 1, true)
        .blastTemp(7100, 'low', GTValues.VA[GTValues.LuV]*4, 1200)
        .element(GTElements.get('grime_alloy'))
        .color(0x3B6B4A).iconSet(GTMaterialIconSet.SHINY)
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])



    const gtingot = (name, color, icon) => {

        event.create(name)
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get(name))
            .color(color).iconSet(GTMaterialIconSet.getByName(icon))
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    }


    // solarite
event.create('solarite')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('solarite'))
    .color(0xFFD93D).iconSet(GTMaterialIconSet.getByName('monium'))
    .blastTemp(10700, 'low', GTValues.VA[GTValues.UV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// moltenheart
event.create('moltenheart')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('moltenheart'))
    .color(0x4A1A0A).iconSet(GTMaterialIconSet.getByName('monium'))
    .blastTemp(10700, 'low', GTValues.VA[GTValues.UV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// verdanite
event.create('verdanite')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('verdanite'))
    .color(0x2E8B57).iconSet(GTMaterialIconSet.getByName('space_time'))
    .blastTemp(11600, 'low', GTValues.VA[GTValues.UHV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// manacite_crystal
event.create('manacite_crystal')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('manacite_crystal'))
    .color(0x6441A5).iconSet(GTMaterialIconSet.getByName('space_time'))
    .blastTemp(11600, 'low', GTValues.VA[GTValues.UHV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// manasteel
event.create('manasteel')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('manasteel'))
    .color(0x4C8CFF).iconSet(GTMaterialIconSet.getByName('stellar_matter'))
    .blastTemp(11600, 'low', GTValues.VA[GTValues.UHV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// terrasteel
event.create('terrasteel')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('terrasteel'))
    .color(0x0B6623).iconSet(GTMaterialIconSet.getByName('omnium'))
    .blastTemp(11600, 'low', GTValues.VA[GTValues.UHV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// relictium
event.create('relictium')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('relictium'))
    .color(0xB48A78).iconSet(GTMaterialIconSet.getByName('space_time'))
    .blastTemp(12500, 'low', GTValues.VA[GTValues.UEV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// graviton_crystal
event.create('graviton_crystal')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('graviton_crystal'))
    .color(0x1A1A2E).iconSet(GTMaterialIconSet.getByName('cosmic_matter'))
    .blastTemp(12500, 'low', GTValues.VA[GTValues.UEV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// aquatium
event.create('aquatium')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('aquatium'))
    .color(0x48CAE4).iconSet(GTMaterialIconSet.getByName('space_time'))
    .blastTemp(13400, 'low', GTValues.VA[GTValues.UIV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// atlantean_pearlite
event.create('atlantean_pearlite')
    .ingot()
    .liquid()
    .ore(2,1,true)
    .element(GTElements.get('atlantean_pearlite'))
    .color(0xF1F6F9).iconSet(GTMaterialIconSet.getByName('space_time'))
    .blastTemp(13400, 'low', GTValues.VA[GTValues.UIV]*4, 1200)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        event.create('fluxed_iridium')
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get('fluxed_iridium'))
            .color(0x290049).iconSet(GTMaterialIconSet.getByName('atomic_alloy'))
.blastTemp(10700, 'low', GTValues.VA[GTValues.UV]*4, 1200)
.cableProperties(GTValues.V[GTValues.UHV], 16, 8, false)
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        event.create('tachyonium_alloy')
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get('tachyonium_alloy'))
            .color(0xf48b21).iconSet(GTMaterialIconSet.getByName('eltz'))
            .cableProperties(GTValues.V[GTValues.UEV], 16, 8, false)
.blastTemp(11600, 'low', GTValues.VA[GTValues.UHV]*4, 1200)
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        event.create('photon_glass')
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get('photon_glass'))
            .cableProperties(GTValues.V[GTValues.UIV], 16, 8, false)
            .color(0xcf42a7).iconSet(GTMaterialIconSet.getByName('sculk_alloy'))
.blastTemp(12500, 'low', GTValues.VA[GTValues.UEV]*4, 1200)
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        event.create('gravitonium')
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get('gravitonium'))
            .cableProperties(GTValues.V[GTValues.UXV], 16, 8, false)
            .color(0xe3be8c).iconSet(GTMaterialIconSet.getByName('omnium'))
.blastTemp(13400, 'low', GTValues.VA[GTValues.UIV]*4, 1200)
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        event.create('nebulium_alloy')
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get('nebulium_alloy'))
            .cableProperties(GTValues.V[GTValues.OpV], 16, 8, false)
            .color(0xe3be8c).iconSet(GTMaterialIconSet.getByName('space_time'))
.blastTemp(14300, 'low', GTValues.VA[GTValues.UXV]*4, 1200)
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        event.create('logical_infinity')
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get('logical_infinity'))
            .cableProperties(GTValues.V[GTValues.MAX], 16, 8, false)
            .color(0xffffff).iconSet(GTMaterialIconSet.getByName('infinity_1'))
.blastTemp(15200, 'low', GTValues.VA[GTValues.OpV]*4, 1200)
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        event.create('paradoxium')
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get('paradoxium'))
            .cableProperties(GTValues.V[GTValues.MAX], 16, 8, false)
            .color(0x13003f).iconSet(GTMaterialIconSet.getByName('monium'))
.blastTemp(16100, 'low', GTValues.VA[GTValues.MAX], 1200)
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        event.create('psythonium')
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get('psythonium'))
            .cableProperties(GTValues.V[GTValues.MAX], 16, 8, false)
            .color(0xffffff).iconSet(GTMaterialIconSet.getByName('stellar_matter'))
.blastTemp(17900, 'low', GTValues.VA[GTValues.MAX], 1200)
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        event.create('singularium')
            .ingot()
            .liquid()
            .ore(2,1,true)
            .element(GTElements.get('singularium'))
            .cableProperties(GTValues.V[GTValues.MAX], 16, 8, false)
            .color(0xffffff).iconSet(GTMaterialIconSet.getByName('eternity'))
.blastTemp(18800, 'low', GTValues.VA[GTValues.MAX], 1200)
            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('aetherium')
        .ingot()
        .liquid()
        .ore(2,1,true)
        .blastTemp(4400, 'low', GTValues.VA[GTValues.EV]*4, 1200)
        .element(GTElements.get('aetherium'))
        .color(0x8CF0FF).iconSet(GTMaterialIconSet.getByName('metallic'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('skystone')
        .gem()
        .ore(2,1,true)
        .element(GTElements.get('skystone'))
        .color(0xDAD6FF).iconSet(GTMaterialIconSet.getByName('dilithium'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
  
    event.create('zanite')
        .gem()
        .ore(2,1,true)
        .element(GTElements.get('zanite'))
        .color(0x5729c0).iconSet(GTMaterialIconSet.getByName('ruby'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('aurorite')
        .ingot()
        .liquid()
        .ore(2,1,true)
        .blastTemp(4400, 'low', GTValues.VA[GTValues.EV]*4, 1200)
        .element(GTElements.get('aurorite'))
        .color(0x8CF0FF).iconSet(GTMaterialIconSet.getByName('space_time'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('gravitite')
        .gem()
        .ore(2,1,true)
        .element(GTElements.get('gravitite'))
        .color(0xFFE678).iconSet(GTMaterialIconSet.getByName('diamond'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('oblivionite')
        .gem()
        .ore(2,1,true)
        .element(GTElements.get('oblivionite'))
        .color(0xFF023E).iconSet(GTMaterialIconSet.getByName('diamond'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('entropy')
        .ingot()
        .liquid()
        .ore(2,1,true)
        .blastTemp(5300, 'low', GTValues.VA[GTValues.IV]*4, 1200)
        .element(GTElements.get('entropy'))
        .color(0xB01030).iconSet(GTMaterialIconSet.getByName('cosmic_matter'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('mindspore')
        .ingot()
        .liquid()
        .ore(2,1,true)
        .blastTemp(5300, 'low', GTValues.VA[GTValues.IV]*4, 1200)
        .element(GTElements.get('mindspore'))
        .color(0x00FF9C).iconSet(GTMaterialIconSet.getByName('eltz'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])


    event.create('time_crystal')
        .ingot()
        .liquid()
        .ore(2,1,true)
        .blastTemp(11600, 'low', GTValues.VA[GTValues.UHV]*4, 1200)
        .element(GTElements.get('time_crystal'))
        .color(0xA9EFFF).iconSet(GTMaterialIconSet.getByName('cosmic_matter'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('hydroflux_crystal')
        .ingot()
        .liquid()
        .ore(2,1,true)
        .blastTemp(13400, 'low', GTValues.VA[GTValues.UIV]*4, 1200)
        .element(GTElements.get('hydroflux_crystal'))
        .color(0x0096FF).iconSet(GTMaterialIconSet.getByName('monium'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

    event.create('oblivium')
        .ingot()
        .liquid()
        .ore(2,1,true)
        .blastTemp(17000, 'low', GTValues.VA[GTValues.MAX], 1200)
        .element(GTElements.get('oblivium'))
        .cableProperties(GTValues.V[GTValues.MAX], 16, 8, false)
        .color(0x5E5E8A).iconSet(GTMaterialIconSet.getByName('universium'))
        .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

        // LV – Aethersteel
event.create('aethersteel')
    .ingot()
    .liquid()
    .element(GTElements.get('aethersteel'))
    .color(0x9EC6FF).iconSet(GTMaterialIconSet.SHINY)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])

// MV – Manachrome
event.create('manachrome')
    .ingot()
    .liquid()
    .element(GTElements.get('manachrome'))
    .blastTemp(1700, 'low', GTValues.VA[GTValues.LV]*4, 1200)
    .color(0x5BB6FF).iconSet(GTMaterialIconSet.SHINY)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])


// HV – Replicite
event.create('replicite')
    .ingot()
    .liquid()
    .element(GTElements.get('replicite'))
    .blastTemp(2600, 'low', GTValues.VA[GTValues.MV]*4, 1200)
    .color(0xC478FF).iconSet(GTMaterialIconSet.SHINY)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])


// EV – Astral Alloy
event.create('astral_alloy')
    .ingot()
    .liquid()
    .element(GTElements.get('astral_alloy'))
    .blastTemp(3500, 'low', GTValues.VA[GTValues.HV]*4, 1200)
    .color(0xFF6EB4).iconSet(GTMaterialIconSet.SHINY)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])


// IV – Voidglass Composite
event.create('voidglass_composite')
    .ingot()
    .liquid()
    .element(GTElements.get('voidglass_composite'))
    .blastTemp(4400, 'low', GTValues.VA[GTValues.EV]*4, 1200)
    .color(0x6A00CC).iconSet(GTMaterialIconSet.SHINY)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])


// LuV – Quicksilver Resonance Alloy
event.create('quicksilver_resonance_alloy')
    .ingot()
    .liquid()
    .element(GTElements.get('quicksilver_resonance_alloy'))
    .blastTemp(5300, 'low', GTValues.VA[GTValues.IV]*4, 1200)
    .color(0xD9D9F2).iconSet(GTMaterialIconSet.SHINY)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])


// ZPM – Cryoflux Steel
event.create('cryoflux_steel')
    .ingot()
    .liquid()
    .element(GTElements.get('cryoflux_steel'))
    .blastTemp(7100, 'low', GTValues.VA[GTValues.LuV]*4, 1200)
    .color(0x8FF3FF).iconSet(GTMaterialIconSet.SHINY)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])


// UV – Biovoid Alloy
event.create('biovoid_alloy')
    .ingot()
    .liquid()
    .element(GTElements.get('biovoid_alloy'))
    .blastTemp(9000, 'low', GTValues.VA[GTValues.ZPM]*4, 1200)
    .color(0x101F3A).iconSet(GTMaterialIconSet.SHINY)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])


// UHV – Naquadria Stellar Composite
event.create('naquadria_stellar_composite')
    .ingot()
    .liquid()
    .element(GTElements.get('naquadria_stellar_composite'))
    .blastTemp(10700, 'low', GTValues.VA[GTValues.UV]*4, 1200)
    .color(0x2596be).iconSet(GTMaterialIconSet.SHINY)
    .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])



//        const periodictable_ele = ['scandium', 'strontium', 'rubidium', 'francium', 'radium', 'actinium', 'hafnium', 'technetium', 'rhenium', 'rutherfordium', 'dubnium', 'seaborgium', 'bohrium', 'hassium', 'meitnerium', 'roentgenium', 'copernicium', 'nihonium', 'thallium', 'moscovium', 'flerovium', 'livermorium', 'polonium', 'tellurium', 'selenium', 'astatine', 'tennessine', 'protactinium', 'neptunium', 'promethium', 'curium', 'berkelium', 'dysprosium', 'einsteinium', 'fermium', 'erbium', 'thulium', 'mendelevium', 'nobelium', 'ytterbium', 'lawrencium']
//    periodictable_ele.forEach((name) => {
//        event.create(name)
//            .ingot()
//            .liquid()
//            .flags([GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING])
//            .iconSet(GTMaterialIconSet.METALLIC)
//            .element(GTElements.get(name))
//        })

})