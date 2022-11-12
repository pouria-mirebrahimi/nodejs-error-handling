const BaseError = require('./baseError')
const HttpStatusCodes = require('../code/httpStatusCodes')

// ! There are lots of predefined error classes you can see in the url:
// !   - https://nodejs.org/api/errors.html#class-typeerror

class InternalServer extends BaseError {
  constructor(
    name,
    statusCode = HttpStatusCodes.Internal_server_error,
    isOperational = false,
    description = 'Internal Server Error.'
  ) {
    super(name, statusCode, isOperational, description)
  }
}

module.exports = InternalServer