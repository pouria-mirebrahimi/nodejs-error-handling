const InternalServer = require('../lib/errors/internalServer')

// ! In this lesson, we handle the exception which are not
// ! implemented in a Try/Catch/Finally structure

// limit the error stack
Error.stackTraceLimit = 2

// ! You can comment this code section to see the results
process.on('uncaughtException', error => {

  const _msg = `handling error ${error.statusCode}`
  console.log(_msg, '\n')
  console.log(error.stack)

  if (!error.isOperational) {
    process.exit(1)
  }
})

/**
 * 
 * @returns {array}   posts   all new posts which are
 *                            fetched from the database
 */
const fetchNewPosts = () => {
  let posts = []

  // we want to fetch new posts, 
  // but an internal server error occurres!!!

  const _msg = 'Somthings went wrong, please try again after a while'
  const new_error = new InternalServer(_msg)
  throw new_error

  return posts
}

const new_posts = fetchNewPosts()
const _msg = `fetched ${new_posts.length} posts`
console.log(_msg)