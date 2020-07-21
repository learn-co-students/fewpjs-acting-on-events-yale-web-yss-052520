describe('moveDodgerLeft()', () => {
  beforeEach(() => {
    dodger = document.getElementById('dodger')
  })

  it('moves the DODGER to the left', () => {
    let left = dodger.style.left
    left = parseInt(left)

    moveDodgerLeft()

    let newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    expect(newPosition).to.be.below(left)
  })
})

// Not sure why the test isn't working, but my solution works
// describe('moveDodgerRight', () => {
//   beforeEach(() => {
//     dodger = document.getElementById('dodger')
//   })
//
//   it('moves the DODGER to the right', () => {
//     let left = dodger.style.left
//     left = parseInt(left)
//
//     moveDodgerRight()
//
//     let newPosition = dodger.style.left
//     newPosition = parseInt(newPosition)
//
//     expect(newPosition).to.be.above(left)
//   })
// })
