const { log } = require('./module')

global.message = 'Group 35'

// import('./module.mjs').then((result) => {
//   const { info } = result
//   info('ESModule JS')
// })
// IIEF
;(async () => {
  const result = await import('./module.mjs')
  const { info } = result
  info('ESModule JS')
})()

log('Common JS')

console.log('Hello world!')
