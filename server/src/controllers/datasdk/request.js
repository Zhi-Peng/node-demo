import http from 'http'
import config from '../../config'

const transfer = function (id, query, body) {
  if (typeof body === 'obj') {
    body = JSON.stringify(body)
  }

  return new Promise((resolve, rejects) => {
    config.http.path = `${ config.rootPath }/${ this.path }/${ id || '' }`
    const req = http.request(config.http, (res) => {
      
      let str = ''
      res.setEncoding('utf8')   
      res.on('data', data => {
        str += data
      })

      res.on('end', () => {
        resolve(str)
      }) 
    })

    req.end(body)
  })
}

class Request {
  constructor(service) {
    this.path = service
  }

  async get (id, query) {
    const data = await transfer.call(this, id, query)
    return data
  }

  async create (data) {
    if (!data) {
      return false
    }
    config.http.method = 'POST'

    const _data = await transfer(null, null, data)
    return _data
  }

  patch (id, query, data) {
    if (!id || !query || !data) {
      return false
    }
  }

  remove (id, query) {
    if (!id) {
      return false
    }
  }

  paginate (query, aggregation) {}

  all (options = {}, limit = 100) {}
}
export default Request
// GET
// HEAD
// POST
// PUT
// DELETE
// PATCH
// CONNECT
// OPTIONS
