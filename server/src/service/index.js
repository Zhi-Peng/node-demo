
import config from '../config'
import app from './app'

const foo = async () => {
  const _app = await app()
  _app.listen(6060, () => {
    console.log('6060成功')
  })
}

foo()
