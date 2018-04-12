import Router from 'koa-router'
import controllers from './controllers'
const router = new Router({
  prefix: '/api/v1'
})

const foo = async function () {
  await controllers(router)
  return router
}

export default foo

