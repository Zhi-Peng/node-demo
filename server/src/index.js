import fs from 'fs'
import path from 'path'
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import resource from 'koa-static'

import routes from './routes'
const app = new Koa()

app.use(resource(path.join(__dirname, '../../dist/static')))
app.use(routes.routes(), routes.allowedMethods())

app.listen(3000, () => {
  console.log('3000成功')
})