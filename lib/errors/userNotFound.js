const BaseError = require('./baseError')
const HttpStatusCodes = require('../code/httpStatusCodes')

// ! There are lots of predefined error classes you can see in the url:
// !   - https://nodejs.org/api/errors.html#class-typeerror


class userNotFound extends BaseError {
  constructor(
    name,
    statusCode = HttpStatusCodes.Not_found,
    isOperational = true || false,
    description = "Not found."
  ) {
    super(name, statusCode, isOperational, description)
  }
}

module.exports = userNotFound