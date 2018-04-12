const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')

const app = new Koa()
const routes = new Router()
routes.get('/api', (ctx) => {
  ctx.body = {
    name: 'fdsa',
    age: 18
  }
})

app.use(routes.routes(), routes.allowedMethods())
app.listen(7070, () => {
  console.log('7070')
})