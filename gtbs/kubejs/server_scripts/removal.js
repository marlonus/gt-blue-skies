//priority = 10
 
ServerEvents.recipes(event => {
 
 const remove = (tier) => {event.remove({ output: (tier)})}

    // CASINGS

    remove('gtceu:ulv_machine_casing')
    remove('gtceu:lv_machine_casing')
    remove('gtceu:mv_machine_casing')
    remove('gtceu:hv_machine_casing')
    remove('gtceu:ev_machine_casing')
    remove('gtceu:iv_machine_casing')
    remove('gtceu:luv_machine_casing')
    remove('gtceu:zpm_machine_casing')
    remove('gtceu:uv_machine_casing')
    remove('gtceu:uhv_machine_casing')
    remove('gtceu:uev_machine_casing')
    remove('gtceu:uiv_machine_casing')
    remove('gtceu:uxv_machine_casing')
    remove('gtceu:opv_machine_casing')
    remove('gtceu:max_machine_casing')

    // INPUTS


    
    // OUTPUTS

    remove('ae2:blank_pattern')
    remove('create:mechanical_belt')
    remove('create:water_wheel')
    remove('create:mechanical_press')
    remove('create:mechanical_mixer')
    remove('create:encased_fan')
    remove('create:crushing_wheel')
    remove('create:mechanical_drill')
    remove('create:hand_crank')
    remove('create:steam_engine')
    remove('create:schematiccannon')
    remove('create:mechanical_crafter')
    remove('create:deployer')
    remove('create:mechanical_arm')
    remove('create:blaze_burner')
    remove('create:empty_blaze_burner')
    remove('create:spout')
    remove('create:mechanical_saw')
    remove('create:mechanical_harvester')
    remove('ae2:quartz_glass')
    remove('ae2:condenser')
    remove('ad_astra:nasa_workbench')
    event.remove({ type: 'gtceu:circuit_assembler', output: 'gtceu:microchip_processor'})
    event.remove({ type: 'gtceu:circuit_assembler', output: 'gtceu:micro_processor_assembly'})
    event.remove({ type: 'gtceu:circuit_assembler', output: 'gtceu:micro_processor_computer'})
    event.remove({ type: 'gtceu:circuit_assembler', output: 'gtceu:micro_processor_mainframe'})
    event.remove({ type: 'gtceu:circuit_assembler', output: 'gtceu:nano_processor_mainframe'})
    event.remove({ type: 'gtceu:circuit_assembler', output: 'gtceu:quantum_processor_mainframe'})

    // MODS

    event.remove({ mod: 'avaritia' })
    event.remove({ mod: 'extendedcrafting' })
    event.remove({ mod: 'sgjourney' })
    event.remove({ mod: 'undergarden' })
    event.remove({ mod: 'botania'})
    event.remove({ mod: 'malum'})
    event.remove({ mod: 'ars_noeveau'})
    event.remove({ mod: 'replication'})
    event.remove({ mod: 'tempad'})
    event.remove({ mod: 'placeablemaxwell'})
    event.remove({ mod: 'aether'})
    event.remove({ mod: 'angelring'})

    // RECIPETYPES

    event.remove({ type: 'create:compacting' })
    event.remove({ type: 'create:crushing' })
    event.remove({ type: 'create:cutting' })
    event.remove({ type: 'create:deploying' })
    event.remove({ type: 'create:emptying' })
    event.remove({ type: 'create:filling' })
    event.remove({ type: 'create:haunting' })
    event.remove({ type: 'create:mechanical_crafting' })
    event.remove({ type: 'create:milling' })
    event.remove({ type: 'create:mixing' })
    event.remove({ type: 'create:pressing' })
    event.remove({ type: 'create:sandpaper_polishing' })
    event.remove({ type: 'create:sequenced_assembly' })
    event.remove({ type: 'create:splashing' })

    
 })