

import fs from 'fs'
import path from 'path'
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import resource from 'koa-static'

import _controllers from '../controllers'
const app = new Koa()

const foo = async () => {
  const router = await _controllers()
  app.use(bodyparser())
  app.use(resource(path.join(__dirname, '../../dist/static')))
  app.use(router.routes(), router.allowedMethods())

  return app
}

export default foo