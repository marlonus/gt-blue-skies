ServerEvents.recipes(event => {

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

    const a_e = (name, ingredient, tier, eu, blasttemp) => {
        event.recipes.gtceu.acausal_engine(name)
            .circuit(32)
            .itemInputs(ingredient)
            .itemOutputs(tier)
            .duration(100)
            .EUt(eu)
            .blastFurnaceTemp(blasttemp)
    }

    a_e('ulv', '8x gtceu:wrought_iron_plate', 'gtceu:ulv_machine_casing', eu_ulv, 900)
    a_e('lv', '8x gtceu:steel_plate', 'gtceu:lv_machine_casing', eu_lv, 900)
    a_e('mv', '8x gtceu:aluminium_plate', 'gtceu:mv_machine_casing', eu_mv, 1799)
    a_e('hv', '8x gtceu:stainless_steel_plate', 'gtceu:hv_machine_casing', eu_hv, 2699)
    a_e('ev', '8x gtceu:titanium_plate', 'gtceu:ev_machine_casing', eu_ev, 3599)
    a_e('iv', '8x gtceu:tungsten_steel_plate', 'gtceu:iv_machine_casing', eu_iv, 4499)
    a_e('luv', '8x gtceu:rhodium_plated_palladium_plate', 'gtceu:luv_machine_casing', eu_luv, 5399)
    a_e('zpm', '8x gtceu:naquadah_alloy_plate', 'gtceu:zpm_machine_casing', eu_zpm, 7199)
    a_e('uv', '8x gtceu:darmstadtium_plate', 'gtceu:uv_machine_casing', eu_uv, 9000)
    a_e('uhv', '8x gtceu:neutronium_plate', 'gtceu:uhv_machine_casing', eu_uhv, 10799)

})