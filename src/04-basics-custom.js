const uuid = require('uuid')

// errors
const userNotFound = require('../lib/errors/userNotFound')

/**
 * @name      getUserByID
 * @desc      Find a user based on a unqiue ID
 * 
 * @param     {string}    id    : user unique ID 
 * @returns   {object}    user  : user if found else null 
 */
const getUserByID = (id) => {
  user = null
  if (user === null) {
    const err_msg = `The user ${id} can not be found!`
    const new_error = new userNotFound(err_msg)
    throw new_error
  } else {
    return user
  }
}

// script to find a user with handline custom errors
const uid = uuid.v1()
try {
  getUserByID(uid)
} catch (err) {
  if (err instanceof userNotFound) {
    console.log('A userNotFound error...')
    console.log(err)
  } else {
    const _msg = 'Another error type is occurred!'
    console.log(_msg)
  }
}