// ! In this lesson, we want to comapre the errors
// ! also we create the operational error that doesn't exit the process

const new_error = {
  name: 'name',
  message: 'message'
}

const err_msg = 'An error occurred through the processing!'
const a_error = new Error(err_msg)

// limit the stack trace of error
Error.stackTraceLimit = 2
// create the stack for the new_error
Error.captureStackTrace(new_error)

let _msg = 'A message before capturing a new error in the code'
console.log(_msg)

// print the created error stack
console.log(new_error.stack)

_msg = 'A new message after the capture'
console.log(_msg)

// duplicate the error
const copy_of_error = new_error

// create a second error
const second_error = new Error()

// compare the errors that are the same
if (copy_of_error.stack === new_error.stack) {
  _msg = 'Two errors (copy_of_error and new_error) are the same and comparable'
  console.log(_msg)
} else {
  _msg = "Two errors (copy_of_error and new_error) aren't the same"
  console.log(_msg)
}

// compare two different errors
if (second_error.stack === new_error.stack) {
  _msg = 'Two errors (second_error and new_error) are the same and comparable'
  console.log(_msg)
} else {
  _msg = "Two errors (second_error and new_error) aren't the same"
  console.log(_msg)
}