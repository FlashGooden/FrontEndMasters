const {fixId} = require('./users')

// write some tests


describe('users', () => {
  test('fixId', ()=> {
    expect(fixId("3")).toBe(3)
  })
})
