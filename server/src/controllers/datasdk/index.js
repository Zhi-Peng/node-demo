
import Feathers from './feathers'
// import Users from './users'

const def = [
  'user',
  'device'
]

// const ext = {
//     users: Users
// }

const bar = {}


const foo = function () {
  return bar
}

foo.init = function (rootPoint) {
  def.forEach((item) => {
    bar[item] = new Feathers(item)
  })

  // for (const item of Object.keys(ext)) {
  //     bar[item] = new ext[item](rootPoint, item)
  // }
}

export default foo
