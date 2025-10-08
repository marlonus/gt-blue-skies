GTCEuStartupEvents.registry('gtceu:machine', event => {

	const pre_lv_machine = (machine, recipetype, casing, overlay) => {
		event.create(machine, 'simple')
			.tiers(GTValues.LV)
			.definition((tier, builder) => builder
            .recipeType(recipetype)
            .workableCasingModel(casing, overlay)
        );
    }
    const machine = (machine, tiers, recipetype, model) => {
        event.create(machine, 'simple')
            .tiers(tiers)
            .definition((tier,  builder) => builder
            .recipeType(recipetype)
            .workableTieredHullModel(model)
        );
    }
	

	pre_lv_machine('small_primitive_sieve', 'primitive_sieving', "gtceu:block/casings/solid/machine_casing_solid_steel", 'gtceu:block/multiblock/large_miner');
	pre_lv_machine('small_primitive_panner', 'primitive_panning', "gtceu:block/casings/solid/machine_casing_solid_steel", 'gtceu:block/multiblock/large_miner');
	pre_lv_machine('small_primitive_smelter', 'primitive_smelting', "gtceu:block/casings/solid/machine_casing_solid_steel", 'gtceu:block/multiblock/large_miner');
    pre_lv_machine('small_primitive_crusher', 'primitive_crushing', "gtceu:block/casings/solid/machine_casing_solid_steel", 'gtceu:block/multiblock/large_miner');
	pre_lv_machine('small_primitive_mixer', 'primitive_mixing', "gtceu:block/casings/solid/machine_casing_solid_steel", 'gtceu:block/multiblock/large_miner');
    machine('sludge_reclaimer', GTValues.LV, 'sludge_reclaimer', 'gtceu:block/multiblock/gcym/large_extractor')
    machine('concentrate_extractor', GTValues.LV, 'concentrate_extractor', 'gtceu:block/multiblock/gcym/large_extractor')
    machine('gem_dust_extractor', GTValues.LV, 'gem_dust_extractor', 'gtceu:block/multiblock/gcym/large_extractor')
    machine('filter_press', GTValues.LV, 'filter_press', 'gtceu:block/multiblock/gcym/large_extractor')
})