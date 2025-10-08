StartupEvents.registry('block', event => {
    event.create('voidglass')
        .displayName('Voidglass')
        .glassSoundType()
        .textureAll('kubejs:block/transparent/conductive_glass')
        .defaultCutout()

    event.create('aqualite_casing')
        .displayName('Aqualite Casing')
        .textureAll('kubejs:block/casing/aqualite/casing')
        .soundType('metal')

    event.create('atlantean_fusion_casing')
        .displayName('Atlantean Pearlite Fusion Casing')
        .textureAll('kubejs:block/casing/aqualite/fusion_casing')
        .soundType('metal')

    event.create('echo_casing')
        .displayName('Echo Casing')
        .textureAll('kubejs:block/casing/echo/casing')
        .soundType('metal')

    event.create('eternity_casing')
        .displayName('Eternity Casing')
        .textureAll('kubejs:block/casing/eternity/eternity_casing')
        .soundType('metal')

    event.create('rainbow_casing')
        .displayName('Rainbow Casing')
        .textureAll('kubejs:block/casing/rainbow/casing')
        .soundType('metal')

    event.create('resonarium_casing')
        .displayName('Resonarium Casing')
        .textureAll('kubejs:block/casing/resonarium/casing')
        .soundType('metal')

    event.create('crude_casing')
        .displayName('Crudely Crafted Casing')
        .textureAll('kubejs:block/casing/soul/casing')
        .soundType('metal')
})