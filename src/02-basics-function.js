// ! Here we define a function to throw an error
// ! Here we handle this error using Try/Catch/Finally structure

const uuid = require('uuid')


/**
 * @name      getUserByID
 * @desc      This is a function that can be used
 *            to find a user in the database
 *       
 * @param     {string}  id    : the user unique ID
 * @returns   {object}  user  : the user object if it exists, otherwise null
 */
const getUserByID = (id) => {
  // use the id to find the user in database
  user = null

  if (user === null) {
    const err_msg = `The user ${id} not found in the database!`
    const err_user_not_found = new Error(err_msg)
    throw err_user_not_found
  } else {
    const _msg = `The user ${id} found!`
    console.log(_msg)
  }

  // you can return anything you want
  return user
}

/**
 * @name      top_level_func
 * @desc      This is a top level functions that calls
 *            other functions or utils
 * 
 * @param
 * @returns   
 */
const top_level_func = () => {
  // generate a unique ID for the user
  user_id = uuid.v1()

  // call the function to find the user
  try {
    const _msg = 'Calling the getUserByID function.'
    console.log(_msg)
    let user = getUserByID(user_id)
    // do something with the user if returned from function
    console.log(`User ${user} returned from the getUserByID function.`)
  } catch (err) {
    const _msg = 'The getUserByID function throws an error!'
    console.log(_msg)
    console.error(`Error: ${err.message}`)
  } finally {
    const _msg = 'Do something at the final stage of your procedure...'
    console.log(_msg)
  }
}


// call the top level function
top_level_func()