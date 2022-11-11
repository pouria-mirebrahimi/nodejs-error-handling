const BaseError = require('../lib/errors/baseError')
const userNotFound = require("../lib/errors/userNotFound")

describe("Check userNotFound class", () => {
  const example_msg = 'Example message'
  const example_err = new userNotFound(example_msg)

  test("userNotFound is an object", () => {
    expect(typeof example_err).toBe("object")
  })

  test("userNotFound extends BaseError", () => {
    expect(example_err instanceof BaseError).toBe(true)
  })

  it('userNotFound.name === example_msg', () => {
    expect(example_err.name).toBe(example_msg)
  })

  it('userNotFound.statusCode === 404', () => {
    expect(example_err.statusCode).toBe(404)
  })

  it('userNotFound.isOperation === true', () => {
    expect(example_err.isOperational).toBe(true)
  })

  it('userNotFound.message === Not Found.', () => {
    expect(example_err.message).toBe('Not found.')
  })
})