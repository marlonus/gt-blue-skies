BlockEvents.modification(event => {
  event.modify('minecraft:reinforced_deepslate', block => {
    block.destroySpeed = 1
    block.hasCollision = true
  })
})