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

        // BEGINNER

//-----------------------------------------------//

    greg.assembler('angel_ring')
        .itemInputs('2x #gtceu:circuits/lv', 'minecraft:gold_block', '4x gtceu:steel_frame')
        .itemOutputs('angelring:angel_ring')
        .EUt(eu_lv)
        .duration(200)

    greg.primitive_void_mining('cobblestone')
        .notConsumable('minecraft:cobblestone')
        .itemOutputs('4x minecraft:cobblestone')
        .duration(100)
        
    greg.primitive_void_mining('stone')
        .notConsumable('minecraft:stone')
        .itemOutputs('2x minecraft:stone')
        .duration(100)
        
    greg.primitive_void_mining('vc_ore')
        .circuit(1)
        .itemOutputs('2x gtceu:void_conglomerate_ore')
        .duration(100)
        
    greg.primitive_crushing('gravel')
        .itemInputs('minecraft:cobblestone')
        .itemOutputs('minecraft:gravel')
        .duration(25)
        
    greg.primitive_crushing('sand')
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(25)

    greg.primitive_crushing('claydust')
        .itemInputs('minecraft:clay')
        .itemOutputs('gtceu:clay_dust')
        .duration(20)

    greg.primitive_crushing('brickdust')
        .itemInputs('minecraft:bricks')
        .itemOutputs('gtceu:brick_dust')
        .duration(20)

    greg.primitive_crushing('coaldust')
        .itemInputs('minecraft:coal')
        .itemOutputs('gtceu:coal_dust')
        .duration(20)

    greg.primitive_crushing('charcoaldust')
        .itemInputs('minecraft:charcoal')
        .itemOutputs('gtceu:charcoal_dust')
        .duration(20)
        
    greg.primitive_crushing('crushed_vc')
        .itemInputs('gtceu:void_conglomerate_ore')
        .itemOutputs('2x gtceu:crushed_void_conglomerate_ore')
        .duration(50)
        
    greg.primitive_crushing('vc_dust')
        .itemInputs('2x gtceu:crushed_void_conglomerate_ore')
        .itemOutputs('2x gtceu:void_conglomerate_dust')
        .duration(50)
        
    greg.primitive_panning('vc_panner')
        .itemInputs('4x gtceu:void_conglomerate_dust')
        .itemOutputs(
            '2x gtceu:iron_dust',
            'gtceu:gold_dust',
            '2x gtceu:tin_dust',
            '3x gtceu:copper_dust',
            'gtceu:silver_dust',
            'gtceu:lead_dust'
        )
        .duration(100)
        
    greg.primitive_sieving('vc_sieve')
        .itemInputs('4x gtceu:void_conglomerate_dust')
        .itemOutputs(
            'minecraft:coal',
            'minecraft:lapis_lazuli',
            '3x minecraft:redstone',
            '2x minecraft:clay_ball'
        )
        .duration(100)

//-----------------------------------------------//

        // PRIMITIVE SMELTING

//-----------------------------------------------//
    greg.primitive_smelting('iron_vc')
        .itemInputs('gtceu:iron_dust')
        .itemOutputs('minecraft:iron_ingot')
        .duration(10)

          
    greg.primitive_smelting('copper_vc')
        .itemInputs('gtceu:copper_dust')
        .itemOutputs('minecraft:copper_ingot')
        .duration(10)
          
    greg.primitive_smelting('lead_vc')
        .itemInputs('gtceu:lead_dust')
        .itemOutputs('gtceu:lead_ingot')
        .duration(10)
        
    greg.primitive_smelting('tin_vc')
        .itemInputs('gtceu:tin_dust')
        .itemOutputs('gtceu:tin_ingot')
        .duration(10)
        
    greg.primitive_smelting('gold_vc')
        .itemInputs('gtceu:gold_dust')
        .itemOutputs('minecraft:gold_ingot')
        .duration(10)

    greg.primitive_smelting('wrought')
        .itemInputs('minecraft:iron_ingot')
        .itemOutputs('gtceu:wrought_iron_ingot')
        .duration(40)
        
    greg.primitive_smelting('smooth_stone')
        .itemInputs('minecraft:stone')
        .itemOutputs('minecraft:smooth_stone')
        .duration(40)

    greg.primitive_smelting('circuit_backplate')
        .itemInputs('minecraft:smooth_stone')
        .itemOutputs('2x projectred_core:plate')
        .duration(40)

    greg.primitive_smelting('silver_vc')
        .itemInputs('gtceu:silver_dust')
        .itemOutputs('gtceu:silver_ingot')
        .duration(10)
        
        
    greg.primitive_smelting('glass_vc')
        .itemInputs('minecraft:sand')
        .itemOutputs('minecraft:glass')
        .duration(25)
        
        
    greg.primitive_smelting('brick_vc')
        .itemInputs('minecraft:clay_ball')
        .itemOutputs('minecraft:brick')
        .duration(50)

//-----------------------------------------------//

        // GREENHOUSE

//-----------------------------------------------//

    greg.greenhouse('wheat')
        .notConsumable('minecraft:wheat_seeds')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x minecraft:wheat')
        .duration(320)

    greg.greenhouse('pumpkin')
        .notConsumable('minecraft:pumpkin_seeds')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('2x minecraft:pumpkin')
        .duration(320)
        
    greg.greenhouse('melon')
        .notConsumable('minecraft:melon_seeds')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('2x minecraft:melon')
        .duration(320)

    greg.greenhouse('beetroot')
        .notConsumable('minecraft:beetroot_seeds')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('6x minecraft:beetroot')
        .duration(320)

    greg.greenhouse('sugarcane')
        .notConsumable('minecraft:sugar_cane')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x minecraft:sugar_cane')
        .duration(320)

    greg.greenhouse('oak')
        .notConsumable('minecraft:oak_sapling')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x minecraft:oak_log')
        .duration(320)

    greg.greenhouse('acacia')
        .notConsumable('minecraft:acacia_sapling')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x minecraft:acacia_log')
        .duration(320)

    greg.greenhouse('dark_oak')
        .notConsumable('minecraft:dark_oak_sapling')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x minecraft:dark_oak_log')
        .duration(320)

    greg.greenhouse('spruce')
        .notConsumable('minecraft:spruce_sapling')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x minecraft:spruce_log')
        .duration(320)

    greg.greenhouse('cherry')
        .notConsumable('minecraft:cherry_sapling')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x minecraft:cherry_log')
        .duration(320)

    greg.greenhouse('jungle')
        .notConsumable('minecraft:jungle_sapling')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x minecraft:jungle_log')
        .duration(320)
                                   
    greg.greenhouse('rubber')
        .notConsumable('gtceu:rubber_sapling')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x gtceu:rubber_log', '4x gtceu:sticky_resin')
        .duration(320)

    greg.greenhouse('birch')
        .notConsumable('minecraft:birch_sapling')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('8x minecraft:birch_log')
        .duration(320)

//-----------------------------------------------//

        // BEGINNER

//-----------------------------------------------//

    greg.primitive_mixing('bronze')
        .itemInputs(
            '3x gtceu:copper_dust', 'gtceu:tin_dust'
        )
        .itemOutputs('4x gtceu:bronze_dust')
        .duration(30)

    greg.primitive_mixing('fireclay_dust')
        .itemInputs(
            '2x gtceu:clay_dust', '2x gtceu:brick_dust'
        )
        .itemOutputs('8x gtceu:fireclay_dust')
        .duration(30)
    
    greg.primitive_mixing('tin_alloy')
        .itemInputs(
            'gtceu:tin_dust', 'gtceu:iron_dust'
        )
        .itemOutputs('2x gtceu:tin_alloy_dust')
        .duration(30)

    greg.primitive_mixing('red_alloy')
        .itemInputs(
            'gtceu:copper_dust', '4x minecraft:redstone_dust'
        )
        .itemOutputs('gtceu:red_alloy_dust')
        .duration(30)

    greg.primitive_mixing('electrum')
        .itemInputs(
            'gtceu:gold_dust', 'gtceu:silver_dust'
        )
        .itemOutputs('2x gtceu:electrum_dust')
        .duration(30)

    greg.primitive_mixing('clay')
        .itemInputs(
            '2x minecraft:sand'
        )
        .circuit(1)
        .inputFluids(Fluid.of("minecraft:water", 200))
        .itemOutputs('2x minecraft:clay')
        .duration(60)

    greg.primitive_mixing('clayball')
        .itemInputs(
            '2x minecraft:sand'
        )
        .circuit(2)
        .inputFluids(Fluid.of("minecraft:water", 200))
        .itemOutputs('8x minecraft:clay_ball')
        .duration(60)

    greg.primitive_smelting('bronze_ingot')
        .itemInputs('gtceu:bronze_dust')
        .itemOutputs('gtceu:bronze_ingot')
        .duration(20)

    greg.primitive_smelting('red_alloy_ingot')
        .itemInputs('gtceu:red_alloy_dust')
        .itemOutputs('gtceu:red_alloy_ingot')
        .duration(20)

    greg.primitive_smelting('electrum_ingot')
        .itemInputs('gtceu:electrum_dust')
        .itemOutputs('gtceu:electrum_ingot')
        .duration(20)

    greg.primitive_smelting('tin_alloy_ingot')
        .itemInputs('gtceu:tin_alloy_dust')
        .itemOutputs('gtceu:tin_alloy_ingot')
        .duration(20)

    greg.primitive_smelting('firebrick')
        .itemInputs('gtceu:compressed_fireclay')
        .itemOutputs('4x gtceu:firebrick')
        .duration(20)

    greg.lcorecipe('charcoal')
        .itemInputs('16x #minecraft:logs')
        .itemOutputs('16x minecraft:charcoal')
        .outputFluids(Fluid.of("gtceu:creosote", 4000))
        .duration(640)

    greg.lcorecipe('coke')
        .itemInputs('8x minecraft:coal')
        .itemOutputs('8x gtceu:coke_gem')
        .outputFluids(Fluid.of("gtceu:creosote", 4000))
        .duration(640)

    greg.lpbfrecipe('steel_coke')
        .itemInputs('16x minecraft:iron_ingot', '16x gtceu:coke_gem')
        .itemOutputs('16x gtceu:steel_ingot')
        .duration(1280)

    greg.lpbfrecipe('steel_coke_wrought')
        .itemInputs('16x gtceu:wrought_iron_ingot', '16x gtceu:coke_gem')
        .itemOutputs('16x gtceu:steel_ingot')
        .duration(640)    

    greg.lpbfrecipe('steel_charcoal')
        .itemInputs('16x minecraft:iron_ingot', '32x minecraft:charcoal')
        .itemOutputs('16x gtceu:steel_ingot')
        .duration(1280)

    greg.lpbfrecipe('steel_charcoal_wrought')
        .itemInputs('16x gtceu:wrought_iron_ingot', '32x minecraft:charcoal')
        .itemOutputs('16x gtceu:steel_ingot')
        .duration(640)    

//-----------------------------------------------//

        // LV STEAM

//-----------------------------------------------//

    greg.lpsb('lp_steam')
        .itemInputs('minecraft:charcoal')
        .circuit(3)
        .inputFluids(Fluid.of("minecraft:water", 100))
        .outputFluids(Fluid.of('gtceu:low_pressure_steam', 1000))
        .duration(100)

    greg.lpsb('htlp_steam_charcoal')
        .itemInputs('minecraft:charcoal')
        .notConsumable('kubejs:preheater_module')
        .inputFluids(Fluid.of("minecraft:water", 100))
        .outputFluids(Fluid.of('gtceu:high_temperature_low_pressure_steam', 1000), Fluid.of('gtceu:carbon_dioxide', 1000))
        .duration(100)

    greg.lpsb('htlp_steam_renewable')
        .itemInputs('gtceu:carbon_dust')
        .notConsumable('kubejs:preheater_module')
        .circuit(1)
        .inputFluids(Fluid.of("minecraft:water", 100))
        .outputFluids(Fluid.of('gtceu:high_temperature_low_pressure_steam', 1600), Fluid.of('gtceu:carbon_dioxide', 1000))
        .duration(100)

    greg.lpst('lp_turbine')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:low_pressure_steam', 5))
        .EUt(-64)
        .duration(100)

    greg.lpst('htlp_turbine')
        .perTick(true)
        .inputFluids(Fluid.of('gtceu:high_temperature_low_pressure_steam', 2))
        .EUt(-64)
        .duration(100)

//-----------------------------------------------//

        // TIER 2 VOID ORE PROCESSING

//-----------------------------------------------//

    greg.void_extractor('void_ore')
        .circuit(1)
        .itemOutputs('4x gtceu:void_conglomerate_ore')
        .duration(400)
        .EUt(eu_lv)

    greg.void_purifier('void_purification')
        .itemInputs('16x gtceu:crushed_void_conglomerate_ore')
        .inputFluids(Fluid.of('gtceu:flocculant_agent', 4000))
        .outputFluids(Fluid.of('gtceu:mineral_sludge_residue', 2000), Fluid.of('gtceu:clean_void_mixture', 2000))
        .duration(400)
        .EUt(eu_lv)

    greg.chemical_reactor('flocculant_agent')
        .itemInputs('5x gtceu:sticky_resin')
        .inputFluids(Fluid.of('minecraft:water', 4000))
        .outputFluids(Fluid.of('gtceu:flocculant_agent', 4000))
        .duration(400)
        .EUt(eu_lv)

    greg.filter_press('filter_mineral')
        .notConsumable('enderio:basic_fluid_filter')
        .inputFluids(Fluid.of('gtceu:clean_void_mixture', 1000))
        .outputFluids(Fluid.of('gtceu:mineral_rich_concentrate', 1600))
        .duration(400)
        .EUt(eu_lv)

    greg.filter_press('filter_gem')
        .notConsumable('enderio:basic_item_filter')
        .inputFluids(Fluid.of('gtceu:clean_void_mixture', 1000))
        .itemOutputs('16x gtceu:gem_mixture_dust')
        .duration(400)
        .EUt(eu_lv)

    greg.concentrate_extractor('mineral_deconcentration')
        .inputFluids(Fluid.of('gtceu:mineral_rich_concentrate', 100))
        .itemOutputs(
            'gtceu:nickel_dust',
            'gtceu:gold_dust',
            'gtceu:silver_dust',
            'gtceu:aluminium_dust',
            '2x gtceu:iron_dust',
            'gtceu:zinc_dust',
            'gtceu:tin_dust',
            '2x gtceu:copper_dust',
            '4x gtceu:tricalcium_phosphate'
        )
        .duration(25)
        .EUt(eu_lv)

    greg.gem_dust_extractor('gem_extraction')
        .itemInputs('gtceu:gem_mixture_dust')
        .itemOutputs(
            'minecraft:diamond',
            'minecraft:lapis_lazuli',
            'minecraft:emerald',
            'minecraft:quartz',
            'minecraft:amethyst_shard',
            'gtceu:blue_topaz_gem',
            'gtceu:cinnabar_gem',
            'gtceu:ruby_gem',
            'gtceu:topaz_gem',
            'gtceu:green_sapphire_gem',
            'gtceu:sapphire_gem',
            'gtceu:certus_quartz_gem',
            'gtceu:quartzite_gem',
            'gtceu:realgar_gem',
            'gtceu:olivine_gem',
            'gtceu:opal_gem',
            'gtceu:red_garnet_gem',
            'gtceu:yellow_garnet_gem',
        )
        .duration(25)
        .EUt(eu_lv)
        
    greg.sludge_reclaimer('mineral_sludge_reclamation')
        .inputFluids(Fluid.of('gtceu:mineral_sludge_residue', 2000))
        .outputFluids(Fluid.of('gtceu:non_metallic_sludge', 1600), Fluid.of('gtceu:trace_metal_mixture', 1600))
        .duration(400)
        .EUt(eu_lv)

    greg.sludge_reclaimer('trace_metal_reclamation')
        .inputFluids(Fluid.of('gtceu:trace_metal_mixture', 100))
        .itemOutputs(
            'gtceu:manganese_dust',
            'gtceu:lead_dust',
            'gtceu:antimony_dust'
        )
        .duration(25)
        .EUt(eu_lv)

    greg.sludge_reclaimer('non_metallic_stuff')
        .inputFluids(Fluid.of('gtceu:non_metallic_sludge', 100))
        .itemOutputs(
            'minecraft:redstone',
            'minecraft:coal',
            'minecraft:glowstone_dust',
            'gtceu:silicon_dust',
            'gtceu:sulfur_dust',
            'gtceu:lithium_dust',
            'gtceu:magnesium_dust',
            'gtceu:gallium_dust'
        )
        .duration(25)
        .EUt(eu_lv)

//-----------------------------------------------//

        // DRILL

//-----------------------------------------------//

        greg.drill_engine('morovium')
            .circuit(1)
            .inputFluids(Fluid.of('gtceu:creosote', 4000))
            .itemOutputs('64x gtceu:morovium_dust')
            .outputFluids(Fluid.of('minecraft:lava', 32000))
            .duration(640)

        greg.drill_engine('ferranite')
            .circuit(2)
            .inputFluids(Fluid.of('gtceu:creosote', 4000), Fluid.of('gtceu:coal_tar', 4000))
            .itemOutputs('128x gtceu:morovium_dust', '64x gtceu:ferranite_dust')
            .outputFluids(Fluid.of('gtceu:salt_water', 32000), Fluid.of('minecraft:lava', 64000))
            .duration(640)
            .EUt(eu_mv)

        greg.drill_engine('aethermarite')
            .circuit(3)
            .inputFluids(Fluid.of('gtceu:creosote', 4000), Fluid.of('gtceu:coal_tar', 4000), Fluid.of('gtceu:benzene', 4000))
            .itemOutputs('256x gtceu:morovium_dust', '128x gtceu:ferranite_dust', '64x gtceu:aethermarite_dust')
            .outputFluids(Fluid.of('gtceu:oil_medium', 32000), Fluid.of('gtceu:oil_heavy', 32000), Fluid.of('gtceu:oil', 32000), Fluid.of('gtceu:oil_light', 32000), Fluid.of('gtceu:salt_water', 64000), Fluid.of('minecraft:lava', 64000))
            .duration(640)
            .EUt(eu_hv)

        greg.drill_engine('ev')
            .circuit(4)
            .inputFluids(Fluid.of('gtceu:creosote', 4000), Fluid.of('gtceu:coal_tar', 4000), Fluid.of('gtceu:benzene', 4000))
            .itemOutputs('512x gtceu:morovium_dust', '256x gtceu:ferranite_dust', '128x gtceu:aethermarite_dust', '64x gtceu:veltrium_dust')
            .outputFluids(Fluid.of('gtceu:oil_medium', 64000), Fluid.of('gtceu:oil_heavy', 64000), Fluid.of('gtceu:oil', 64000), Fluid.of('gtceu:oil_light', 64000), Fluid.of('gtceu:salt_water', 128000), Fluid.of('minecraft:lava', 128000))
            .duration(640)
            .EUt(eu_ev)
            
        greg.drill_engine('iv')
            .circuit(5)
            .inputFluids(Fluid.of('gtceu:creosote', 8000), Fluid.of('gtceu:coal_tar', 8000), Fluid.of('gtceu:benzene', 8000))
            .itemOutputs('1024x gtceu:morovium_dust', '512x gtceu:ferranite_dust', '256x gtceu:aethermarite_dust', '128x gtceu:veltrium_dust', '64x gtceu:durium_dust')
            .outputFluids(Fluid.of('gtceu:oil_medium', 128000), Fluid.of('gtceu:oil_heavy', 128000), Fluid.of('gtceu:oil', 128000), Fluid.of('gtceu:oil_light', 128000), Fluid.of('gtceu:salt_water', 256000), Fluid.of('minecraft:lava', 256000))
            .duration(640)
            .EUt(eu_iv)

        greg.drill_engine('luv')
            .circuit(6)
            .inputFluids(Fluid.of('gtceu:creosote', 12000), Fluid.of('gtceu:coal_tar', 12000), Fluid.of('gtceu:benzene', 12000))
            .itemOutputs('2048x gtceu:morovium_dust', '1024x gtceu:ferranite_dust', '512x gtceu:aethermarite_dust', '256x gtceu:veltrium_dust', '128x gtceu:durium_dust', '64x gtceu:quantalyte_dust')
            .outputFluids(Fluid.of('gtceu:oil_medium', 256000), Fluid.of('gtceu:oil_heavy', 256000), Fluid.of('gtceu:oil', 256000), Fluid.of('gtceu:oil_light', 256000), Fluid.of('gtceu:salt_water', 512000), Fluid.of('minecraft:lava', 512000), Fluid.of('gtca:pahoehoe_lava', 128000))
            .duration(640)
            .EUt(eu_luv)

//-----------------------------------------------//

        // BENZENE POWER MV

//-----------------------------------------------//

    greg.combustion_reactor('mv_combustion')
        .inputFluids(Fluid.of('gtceu:benzene', 100), Fluid.of('gtceu:oxygen', 2000))
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
        .duration(100)
        .EUt(-1024)

    greg.distillery('benzene_low')
        .circuit(6)
        .inputFluids(Fluid.of('gtceu:coal_tar', 100))
        .outputFluids(Fluid.of('gtceu:benzene', 100))
        .itemOutputs('gtceu:carbon_dust')
        .EUt(32)
        .duration(100)
        
//-----------------------------------------------//

        // LARGE GREENHOUSE

//-----------------------------------------------//

        const lg = (growable) => {
            greg.large_greenhouse(`lg_${growable}`)
                .inputFluids(Fluid.of("water"), 100)
                .notConsumable(growable)
                .itemOutputs(`32x ${growable}`)
                .EUt(32)
                .duration(100)
        }
        lg('minecraft:oak_log')
        lg('minecraft:birch_log')
        lg('minecraft:spruce_log')
        lg('minecraft:dark_oak_log')
        lg('minecraft:cherry_log')
        lg('minecraft:acacia_log')
        lg('gtceu:sticky_resin')
        lg('gtceu:rubber_log')
        lg('minecraft:melon')
        lg('minecraft:sugar_cane')
        lg('minecraft:beetroot')
        lg('minecraft:wheat')
        lg('minecraft:carrot')
        lg('minecraft:potato')
        lg('minecraft:pumpkin')
        lg('minecraft:dandelion')
        lg('minecraft:poppy')
        lg('minecraft:cornflower')
        lg('minecraft:blue_orchid')
        lg('minecraft:oxeye_daisy')
        lg('minecraft:azure_bluet')
        lg('minecraft:white_tulip')
        lg('minecraft:allium')
        lg('minecraft:lilac')
        lg('minecraft:orange_tulip')
        lg('minecraft:pink_tulip')
        lg('minecraft:peony')
        lg('minecraft:rose_bush')
        lg('minecraft:red_tulip')
        lg('minecraft:lily_of_the_valley')
        lg('minecraft:sunflower')

//-----------------------------------------------//

        // INDUSTRIAL PBF

//-----------------------------------------------//

        greg.ipbf('steel_ipbf')
        .itemInputs('128x minecraft:iron_ingot', '8x gtceu:coke_gem')
        .itemOutputs('128x gtceu:steel_ingot')
        .duration(320)

//-----------------------------------------------//

        // ASTRAL EXTRACTOR

//-----------------------------------------------//

        greg.astral_extractor('mv_t1')
        .circuit(1)
        .inputFluids(Fluid.of('gtceu:astrite_catalyst_1', 1000))
        .itemOutputs('128x gtceu:gem_mixture_dust')
        .outputFluids(Fluid.of('gtceu:non_metallic_sludge', 12800), Fluid.of('gtceu:trace_metal_residue', 12800), Fluid.of('gtceu:mineral_rich_concentrate', 12800))
        .EUt(eu_mv*2)
        .duration(1280)

//-----------------------------------------------//

        // LARGE MINERAL EXTRACTOR

//-----------------------------------------------//

    greg.large_mineral_extractor('trace_metal_reclamation')
        .inputFluids(Fluid.of('gtceu:trace_metal_mixture', 1600))
        .itemOutputs(
            '16x gtceu:raw_manganese',
            '16x gtceu:raw_lead',
            '16x gtceu:raw_antimony',
            '16x gtceu:raw_pentlandite',
            '16x gtceu:raw_chalcopyrite',
            '16x gtceu:raw_rutile',
            '16x gtceu:raw_tungstate',
            '4x gtceu:neodymium_dust',
            '8x gtceu:raw_molybdenite',
            '16x gtceu:raw_galena',
            '16x gtceu:raw_graphite'
        )
        .duration(20)
        .EUt(eu_lv)

        
    greg.large_mineral_extractor('non_metallic_stuff')
        .inputFluids(Fluid.of('gtceu:non_metallic_sludge', 1600))
        .itemOutputs(
            '16x gtceu:raw_redstone',
            '16x gtceu:raw_coal',
            '16x minecraft:glowstone_dust',
            '16x gtceu:silicon_dust',
            '16x gtceu:raw_sulfur',
            '16x gtceu:raw_lithium',
            '16x gtceu:magnesium_dust',
            '16x gtceu:raw_arsenic',
            '16x gtceu:raw_gallium'
        )
        .duration(20)
        .EUt(eu_lv)

        
    greg.large_mineral_extractor('gem_extraction')
        .itemInputs('16x gtceu:gem_mixture_dust')
        .itemOutputs(
            '16x gtceu:raw_diamond',
            '16x gtceu:raw_lapis',
            '16x gtceu:raw_emerald',
            '16x gtceu:raw_nether_quartz',
            '16x gtceu:raw_amethyst',
            '16x gtceu:raw_blue_topaz',
            '16x gtceu:raw_cinnabar',
            '16x gtceu:raw_ruby',
            '16x gtceu:raw_topaz',
            '16x gtceu:raw_green_sapphire',
            '16x gtceu:raw_sapphire',
            '16x gtceu:raw_certus_quartz',
            '16x gtceu:raw_quartzite',
            '16x gtceu:raw_realgar',
            '16x gtceu:raw_olivine',
            '16x gtceu:raw_opal',
            '16x gtceu:raw_red_garnet',
            '16x gtceu:raw_yellow_garnet',
        )
        .duration(20)
        .EUt(eu_lv)

    greg.large_mineral_extractor('mineral_deconcentration')
        .inputFluids(Fluid.of('gtceu:mineral_rich_concentrate', 1600))
        .itemOutputs(
            '16x gtceu:raw_nickel',
            '16x minecraft:raw_gold',
            '16x gtceu:raw_silver',
            '16x gtceu:raw_aluminium',
            '32x minecraft:raw_iron',
            '16x gtceu:raw_sphalerite',
            '16x gtceu:raw_tin',
            '16x gtceu:sodium_dust',
            '16x gtceu:raw_beryllium',
            '16x gtceu:carbon_dust',
            '16x gtceu:raw_chromium',
            '32x gtceu:raw_copper',
        )
        .duration(20)
        .EUt(eu_lv)

//-----------------------------------------------//

        // LARGE INSCRIBER

//-----------------------------------------------//

        greg.large_inscriber('printed_silicon')
            .itemInputs('16x gtceu:silicon_dust')
            .itemOutputs('16x ae2:printed_silicon')
            .duration(200)
            .EUt(eu_mv)

        greg.large_inscriber('printed_logic_processor')
            .itemInputs('16x minecraft:gold_ingot')
            .itemOutputs('16x ae2:printed_logic_processor')
            .duration(200)
            .EUt(eu_mv)

        greg.large_inscriber('printed_engineering_processor')
            .itemInputs('16x minecraft:diamond')
            .itemOutputs('16x ae2:printed_engineering_processor')
            .duration(200)
            .EUt(eu_mv)

        greg.large_inscriber('printed_calculation_processor')
            .itemInputs('16x gtceu:certus_quartz_gem')
            .itemOutputs('16x ae2:printed_calculation_processor')
            .duration(200)
            .EUt(eu_mv)

        greg.large_inscriber('logic_processor')
            .itemInputs('16x ae2:printed_logic_processor', '16x minecraft:redstone', '16x ae2:printed_silicon')
            .itemOutputs('16x ae2:logic_processor')
            .duration(200)
            .EUt(eu_mv)

        greg.large_inscriber('engineering_processor')
            .itemInputs('16x ae2:printed_engineering_processor', '16x minecraft:redstone', '16x ae2:printed_silicon')
            .itemOutputs('16x ae2:engineering_processor')
            .duration(200)
            .EUt(eu_mv)

        greg.large_inscriber('calculation_processor')
            .itemInputs('16x ae2:printed_calculation_processor', '16x minecraft:redstone', '16x ae2:printed_silicon')
            .itemOutputs('16x ae2:calculation_processor')
            .duration(200)
            .EUt(eu_mv)

        greg.assembler('blank_pattern')
            .itemInputs('4x gtceu:sticky_resin', '4x minecraft:glowstone_dust')
            .itemOutputs('4x ae2:blank_pattern')
            .duration(200)
            .EUt(eu_lv)


//-----------------------------------------------//

        // AE2

//-----------------------------------------------//

        greg.mixer('fluix')
            .itemInputs('minecraft:redstone', 'minecraft:quartz', 'ae2:charged_certus_quartz_crystal')
            .itemOutputs('2x ae2:fluix_crystal')
            .inputFluids(Fluid.of("minecraft:water", 100))
            .duration(20)
            .EUt(eu_lv)

        greg.macerator('fluix_dust')
            .itemInputs('ae2:fluix_crystal')
            .itemOutputs('ae2:fluix_dust')
            .duration(20)
            .EUt(eu_lv)

        greg.autoclave('charged_certus')
            .itemInputs('gtceu:certus_quartz_gem')
            .itemOutputs('ae2:charged_certus_quartz_crystal')
            .duration(20)
            .EUt(eu_lv)

        greg.alloy_smelter('quartz_glass')
            .itemInputs('4x #forge:glass', '5x #forge:dusts/certus_quartz')
            .itemOutputs('4x ae2:quartz_glass')
            .duration(20)
            .EUt(eu_lv)

        greg.compressor('singularity')
            .itemInputs('64x compressium:cobblestone_4')
            .itemOutputs('ae2:singularity')
            .duration(600)
            .EUt(eu_mv)

//-----------------------------------------------//

        // EV POWER

//-----------------------------------------------//        

        greg.macerator('moonstone')
            .itemInputs('ad_astra:moon_cobblestone')
            .itemOutputs('gtceu:moonstone_dust')
            .duration(20)
            .EUt(eu_hv)

        greg.ray_receiver('photon_enriching')
            .itemInputs('10x gtceu:moonstone_dust')
            .perTick(true)
            .outputFluids(Fluid.of('gtceu:photon_moonstone', 5))
            .duration(20)
            .dimension('ad_astra:earth_orbit')

        greg.salt_boiler('salt_heating_solid')
            .itemInputs('gtceu:salt')
            .perTick(true)
            .inputFluids(Fluid.of('gtceu:photon_moonstone', 5))
            .outputFluids(Fluid.of('gtceu:hot_molten_salt', 5))
            .perTick(false)
            .itemOutputs('10x gtceu:moonstone_dust')
            .duration(20)
            .dimension('ad_astra:earth_orbit')

        greg.salt_boiler('salt_heating_fluid')
            .perTick(true)
            .inputFluids(Fluid.of('gtceu:photon_moonstone', 5), Fluid.of('gtceu:cold_molten_salt', 5))
            .outputFluids(Fluid.of('gtceu:hot_molten_salt', 5))
            .perTick(false)
            .itemOutputs('10x gtceu:moonstone_dust')
            .duration(20)
            .dimension('ad_astra:earth_orbit')

        greg.salt_exchanger('salt_steam')
            .perTick(true)
            .inputFluids(Fluid.of('gtceu:hot_molten_salt', 5), Fluid.of('minecraft:water', 5))
            .outputFluids(Fluid.of('gtceu:cold_molten_salt', 5))
            .EUt(eu_ev*-16)
            .duration(20)

//-----------------------------------------------//

        // HV POWER

//-----------------------------------------------//    

        greg.lpsb('hv_stuff')
            .inputFluids(Fluid.of('minecraft:water', 100))
            .circuit(2)
            .itemInputs('gtceu:carbon_dust')
            .notConsumable('kubejs:preheater_module')
            .outputFluids(Fluid.of('gtceu:high_pressure_steam', 16000), Fluid.of('gtceu:carbon_dioxide', 1000))
            .duration(100)

        greg.hv_steam_turbine_mb('hv_gen')
            .inputFluids(Fluid.of('gtceu:high_pressure_steam', 16000))
            .EUt(eu_hv*-12)

//-----------------------------------------------//

        // UNIVERSAL CIRCUITS

//-----------------------------------------------//      

        const uctiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", 'uxv', 'opv', 'max', 'max1', 'max2', 'max3']
        uctiers.forEach((tier) => {
            event.recipes.gtceu.autoclave(`${tier}_universal_circuit_recipe`)
                .circuit(1)
                .itemInputs(`#gtceu:circuits/${tier}`)
                .itemOutputs(`kubejs:${tier}_universal_circuit`)
                .duration(20)
                .EUt(eu_lv)
        })

//-----------------------------------------------//

        // SLAUGHTERHOUSE

//-----------------------------------------------//   

        greg.slaughterhouse('slaughtering')
            .circuit(1)
            .inputFluids(Fluid.of('gtceu:sulfuric_acid', 2000))
            .outputFluids(Fluid.of('gtceu:diluted_sulfuric_acid', 3000))
            .itemOutputs('8x gtceu:tiny_echo_shard_dust','8x minecraft:gunpowder','8x minecraft:string','8x minecraft:leather','8x minecraft:magma_cream','8x minecraft:blaze_rod','8x minecraft:phantom_membrane','8x minecraft:bone','8x minecraft:slime_ball','8x minecraft:spider_eye','8x minecraft:sugar','8x minecraft:glowstone','8x minecraft:white_wool','8x minecraft:rotten_flesh','8x minecraft:feather')
            .duration(200)
            .EUt(eu_hv)

//-----------------------------------------------//

        // PLANETARY / ORBITAL

//-----------------------------------------------//   

        greg.assembler('tempad')
        .circuit(1)
            .itemInputs('4x gtceu:mv_field_generator', '2x #gtceu:circuits/ev', 'ae2:singularity')
            .itemOutputs('tempad:he_who_remains_tempad')
            .duration(300)
            .EUt(eu_hv)

        greg.assembler('catalyst_undergarden')
            .itemInputs('2x gtceu:titanium_block', '16x #gtceu:circuits/hv', '8x gtceu:clean_machine_casing', '16x minecraft:diamond', 'gtceu:energy_crystal', 'gtceu:hv_item_magnet')
            .itemOutputs('undergarden:catalyst')
            .duration(600)
            .EUt(eu_hv)

        greg.orbital_gas_siphon('air_earth_hv')
            .notConsumable('#gtceu:circuits/iv')
            .outputFluids(Fluid.of('gtceu:air', 64000), Fluid.of('gtceu:nether_air', 48000), Fluid.of('gtceu:ender_air', 32000), Fluid.of('gtceu:chlorine', 16000))
            .duration(1000)
            .EUt(eu_ev)
            .dimension('ad_astra:earth_orbit')

        greg.orbital_gas_siphon('air_earth_ev')
            .notConsumable('#gtceu:circuits/luv')
            .outputFluids(Fluid.of('gtceu:air', 128000), Fluid.of('gtceu:nether_air', 128000), Fluid.of('gtceu:ender_air', 128000), Fluid.of('gtceu:chlorine', 64000))
            .duration(1000)
            .EUt(eu_iv)
            .dimension('ad_astra:earth_orbit')

        greg.orbital_gas_siphon('air_earth_iv')
            .notConsumable('#gtceu:circuits/zpm')
            .outputFluids(Fluid.of('gtceu:air', 1024000), Fluid.of('gtceu:nether_air', 1024000), Fluid.of('gtceu:ender_air', 1024000), Fluid.of('gtceu:chlorine', 512000))
            .duration(1000)
            .EUt(eu_luv)
            .dimension('ad_astra:earth_orbit')

        greg.planetary_miner('moon')
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 5000))
            .outputFluids(Fluid.of('gtceu:lubricant', 20))
            .itemOutputsRanged('gtceu:raw_ilmenite', 64, 512)
            .itemOutputsRanged('gtceu:raw_cheese', 64, 512)
            .itemOutputsRanged('gtceu:raw_desh', 64, 512)
            .itemOutputsRanged('gtceu:raw_arcane_crystal', 64, 512)
            .itemOutputsRanged('gtceu:raw_tungstate', 64, 512)
            .itemOutputsRanged('ad_astra:moon_cobblestone', 64, 512)
            .itemOutputsRanged('gtceu:raw_magnesite', 64, 512)
            .itemOutputsRanged('gtceu:raw_vanadium_magnetite', 64, 512)
            .itemOutputsRanged('gtceu:raw_chromite', 64, 512)
            .itemOutputsRanged('gtceu:raw_lepidolite', 64, 512)
            .EUt(eu_ev*4)
            .duration(200)
            .dimension('ad_astra:moon')

        greg.planetary_miner('mars1')
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 5000))
            .outputFluids(Fluid.of('gtceu:lubricant', 20))
            .itemOutputsRanged('ad_astra:mars_cobblestone', 64, 512)
            .itemOutputsRanged('gtceu:raw_pentlandite', 64, 512)
            .itemOutputsRanged('gtceu:raw_cobaltite', 64, 512)
            .itemOutputsRanged('gtceu:raw_nickel', 64, 512)
            .itemOutputsRanged('gtceu:raw_garnierite', 64, 512)
            .itemOutputsRanged('gtceu:raw_uranium', 64, 512)
            .itemOutputsRanged('gtceu:raw_uraninite', 64, 512)
            .itemOutputsRanged('gtceu:raw_lithium', 64, 512)
            .itemOutputsRanged('gtceu:raw_tungstate', 64, 512)
            .itemOutputsRanged('gtceu:raw_rock_salt', 64, 512)
            .itemOutputsRanged('gtceu:raw_salt', 64, 512)
            .itemOutputsRanged('gtceu:raw_lepidolite', 64, 512)
            .itemOutputsRanged('gtceu:raw_spodumene', 64, 512)
            .itemOutputsRanged('gtceu:raw_scheelite', 64, 512)
            .itemOutputsRanged('gtceu:raw_ostrum', 64, 512)
            .itemOutputsRanged('gtceu:raw_thorium', 64, 512)
            .itemOutputsRanged('gtceu:raw_emerald', 64, 512)
            .itemOutputsRanged('gtceu:raw_beryllium', 64, 512)
            .itemOutputsRanged('gtceu:raw_enriched_naquadah', 64, 512)
            .itemOutputsRanged('gtceu:raw_naquadah', 64, 512)
            .itemOutputsRanged('gtceu:raw_certus_quartz', 64, 512)
            .itemOutputsRanged('gtceu:raw_barite', 64, 512)
            .circuit(1)
            .EUt(eu_ev*4)
            .duration(200)
            .dimension('ad_astra:mars')

        greg.planetary_miner('mars2')
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 5000))
            .outputFluids(Fluid.of('gtceu:lubricant', 20))
            .itemOutputsRanged('ad_astra:mars_cobblestone', 64, 512)
            .itemOutputsRanged('gtceu:raw_quartzite', 64, 512)
            .itemOutputsRanged('gtceu:raw_stibnite', 64, 512)
            .itemOutputsRanged('minecraft:raw_copper', 64, 512)
            .itemOutputsRanged('gtceu:raw_tetrahedrite', 64, 512)
            .itemOutputsRanged('minecraft:raw_gold', 64, 512)
            .itemOutputsRanged('gtceu:raw_vanadium_magnetite', 64, 512)
            .itemOutputsRanged('gtceu:raw_magnetite', 64, 512)
            .itemOutputsRanged('gtceu:raw_cinnabar', 64, 512)
            .itemOutputsRanged('gtceu:raw_ruby', 64, 512)
            .itemOutputsRanged('gtceu:raw_redstone', 64, 512)
            .itemOutputsRanged('gtceu:raw_malachite', 64, 512)
            .itemOutputsRanged('gtceu:raw_hematite', 64, 512)
            .itemOutputsRanged('gtceu:raw_yellow_limonite', 64, 512)
            .itemOutputsRanged('gtceu:raw_goethite', 64, 512)
            .itemOutputsRanged('gtceu:raw_sphalerite', 64, 512)
            .itemOutputsRanged('gtceu:raw_pyrite', 64, 512)
            .itemOutputsRanged('gtceu:raw_sulfur', 64, 512)
            .itemOutputsRanged('gtceu:raw_antimony', 64, 512)
            .itemOutputsRanged('gtceu:raw_bismuth', 64, 512)
            .itemOutputsRanged('gtceu:raw_arsenic', 64, 512)
            .itemOutputsRanged('gtceu:raw_uraninite', 64, 512)
            .circuit(2)
            .EUt(eu_ev*4)
            .duration(200)
            .dimension('ad_astra:mars')

        greg.planetary_miner('mars3')
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 5000))
            .outputFluids(Fluid.of('gtceu:lubricant', 20))
            .itemOutputsRanged('ad_astra:mars_cobblestone', 64, 512)
            .itemOutputsRanged('gtceu:raw_pitchblende', 64, 512)
            .itemOutputsRanged('gtceu:raw_lead', 64, 512)
            .itemOutputsRanged('gtceu:raw_silver', 64, 512)
            .itemOutputsRanged('gtceu:raw_galena', 64, 512)
            .itemOutputsRanged('gtceu:raw_bastnasite', 64, 512)
            .circuit(3)
            .EUt(eu_ev*4)
            .duration(200)
            .dimension('ad_astra:mars')

        greg.planetary_miner('venus')
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 5000))
            .outputFluids(Fluid.of('gtceu:lubricant', 20))
            .itemOutputsRanged('ad_astra:venus_cobblestone', 64, 512)
            .itemOutputsRanged('gtceu:raw_enriched_naquadah', 64, 512)
            .itemOutputsRanged('gtceu:raw_naquadah', 64, 512)
            .itemOutputsRanged('gtceu:raw_germanite', 64, 512)
            .itemOutputsRanged('gtceu:raw_calorite', 64, 512)
            .EUt(eu_iv*4)
            .duration(200)
            .dimension('ad_astra:venus')


        greg.planetary_miner('mercury')
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 5000))
            .outputFluids(Fluid.of('gtceu:lubricant', 20))
            .itemOutputsRanged('ad_astra:mercury_cobblestone', 64, 512)
            .itemOutputsRanged('gtceu:raw_uranium', 64, 512)
            .itemOutputsRanged('gtceu:raw_uraninite', 64, 512)
            .itemOutputsRanged('gtceu:raw_thorium', 64, 512)
            .itemOutputsRanged('gtceu:raw_plutonium', 64, 512)
            .EUt(eu_iv*4)
            .duration(200)
            .dimension('ad_astra:mercury')
            
//-----------------------------------------------//

        // VOLTAGE CASING

//-----------------------------------------------//   

        const casingassembler = (voltage, ingot) => {
    greg.assembler(`${voltage}_casing_re`)
        .circuit(8)
        .EUt(eu_lv)
        .itemInputs(`8x gtceu:${ingot}_plate`)
        .itemOutputs(`gtceu:${voltage}_machine_casing`)
        .duration(100)
    }

    casingassembler('ulv', 'wrought_iron')
    casingassembler('lv', 'aethersteel')
    casingassembler('mv', 'manachrome')
    casingassembler('hv', 'replicite')
    casingassembler('ev', 'astral_alloy')
    casingassembler('iv', 'voidglass_composite')
    casingassembler('luv', 'quicksilver_resonance_alloy')
    casingassembler('zpm', 'cryoflux_steel')
    casingassembler('uv', 'biovoid_alloy')
    casingassembler('uhv', 'naquadria_stellar_composite')

        


})