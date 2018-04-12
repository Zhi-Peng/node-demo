const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const static = require('koa-static')
const bodyparser = require('koa-bodyparser')

const app = new Koa()
const routes = new Router()
app.use(async (ctx, next) => {
  console.log('11111')
  await next()
})

app.use(async (ctx, next) => {
  console.log('222222')
  await next()
})
app.use(static(path.resolve('./dd')))
// app.use(routes.routes(), routes.allowedMethods())
console.log(path.join(__dirname, './dd'), '777')

app.listen(4000, () => {
  console.log('4000')
}) 