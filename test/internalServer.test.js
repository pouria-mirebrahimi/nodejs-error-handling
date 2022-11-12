const BaseError = require('../lib/errors/baseError')
const InternalServer = require("../lib/errors/internalServer")

describe("Check internalServer class", () => {
  const example_msg = 'Example message'
  const example_err = new InternalServer(example_msg)

  test("InternalServer is an object", () => {
    expect(typeof example_err).toBe("object")
  })

  test("InternalServer extends BaseError", () => {
    expect(example_err instanceof BaseError).toBe(true)
  })

  it('InternalServer.name === example_msg', () => {
    expect(example_err.name).toBe(example_msg)
  })

  it('InternalServer.statusCode === 500', () => {
    expect(example_err.statusCode).toBe(500)
  })

  it('userNotFound.isOperation === true', () => {
    expect(example_err.isOperational).toBe(false)
  })

  it('InternalServer.message === Internal Server Error.', () => {
    expect(example_err.message).toBe('Internal Server Error.')
  })
})