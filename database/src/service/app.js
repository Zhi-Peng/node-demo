import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import err from '../error'
import api from '../api/v1'

const app = new Koa()

const foo = async () => {
/*
* TODO
* 这里不能把err放在global上，要把这放到npm上
*
*/
  global.error = err

  const router = await api()
  app.use(bodyparser())
  app.use(router.routes(), router.allowedMethods())

  app.on('error', (err, ctx) => {
    ctx.body = {
      success: false,
      data: ctx,
      message: err
    }
    console.log('server error', err)
  })
  return app
}
export default foo