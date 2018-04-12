const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')

const app = new Koa()
const routes = new Router()

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(routes.routes(), routes.allowedMethods())
app.listen(7070, () => {
  console.log('7070')
})

routes.get('/user', async (ctx) => {
  console.log('进来了')
  ctx.body = {
    name: '工工',
    age: 18
  }
})
