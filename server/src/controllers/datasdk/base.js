
// import debug from 'debug'
// import _ from 'lodash'
import Request from './request'
// import error from 'berry-error'

let app = null

class Base {
  constructor(service) {
    app = app || new Request(service)
    this.service = app
  }

  async get(id, query = {}) {
    const data = await this.service.get(id, query)

    return data
  }

  create(data = {}) {
    return this.service.create(data, {})
  }

  // Single or bulk patch update record(s)
  patch(id = null, query = {}, data = {}) {
    return this.service.patch(null, data, { query })
  }

  // Single or bulk remove record(s)
  remove(id = null, query = {}) {
    return this.service.remove(null, { query })
  }

  paginate(query = {}, aggregation) {
    return this.service.find({ query })
  }

//   async all(options = {}, limit = 100) {
//     let total = 0
//     let idx = 1
//     let pages = 2
//     let data = []
//     const _error = []

//     for (; idx <= pages; idx++) {
//       try {
//         const res = await this.paginate({
//           $limit: limit,
//           $skip: (idx - 1) * limit,
//           ...options
//         })

//         total = res.total
//         data = data.concat(res.data.data)

//         if (idx === 1) {
//           pages = Math.ceil(total / limit)
//         }
//       } catch (err) {
//         _error.push(err)
//       }
//     }

//     return _error.length > 0
//       ? {
//         error: _error
//       }
//       : {
//         total,
//         data
//       }
//   }
}

export default Base
