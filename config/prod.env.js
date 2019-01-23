'use strict'
module.exports = {
  NODE_ENV: '"production"',
  ENV: '"' + (process.env.ENV || 'dev')  + '"',
}
