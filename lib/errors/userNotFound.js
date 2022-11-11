const BaseError = require('./baseError')

// ! There are lots of predefined error classes you can see in the url:
// !   - https://nodejs.org/api/errors.html#class-typeerror


class userNotFound extends BaseError {
  constructor(
    name,
    statusCode = 404,
    isOperational = true || false,
    description = "Not found."
  ) {
    super(name, statusCode, isOperational, description)
  }
}

module.exports = userNotFound