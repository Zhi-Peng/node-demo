import nodemailer from 'nodemailer'
import Router from 'koa-router'
import sdk from './datasdk'
// import basicdata from './basicdata'
import config from '../config'
// import verify from './verify'
const router = new Router({
  prefix: config.rootPath
})

const modules = [
  'user',
  'device'
]

const foo = async () => {
  sdk.init(config.http)
  // await basicdata()
  for (const module of modules) {
    router.use(`/${ module }`, require(`./routes/${module}`).default)
  }

  router.all('/*', (ctx, next) => {
    ctx.body = {
      success: 'err',
      data: {},
      message: '没有这路由'
    }
  })
  return router
}

export default foo
