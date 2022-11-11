// ! Here we create an error object and throw it...
// ! As you can see, there is not any error/exception handling

// using uuid to create an unique ID for the user
const uuid = require('uuid')

// creating a new Error object
const user_id = uuid.v1()
const err_msg = `The user ${user_id} does not exist!`
const err_obj = new Error(err_msg)

// run a test
console.log('A message before throwing an error...')
throw err_obj  // use this command to throw an error
console.log('A message after throwing an error...')
