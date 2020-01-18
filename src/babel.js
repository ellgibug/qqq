async function start() {
    // return await Promise.resolve('async is working')
    return Promise.resolve('async is working')
}

start().then(console.log)

const unused = 42

class Util {
    static id = Date.now()
}

console.log('date now', Util.id)

console.log('unused', unused)

import('lodash').then(_ => {
    console.log('lodash', _.random(0, 42, true))
})