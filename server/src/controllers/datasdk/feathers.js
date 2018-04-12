
import _ from 'lodash'
import Base from './base'


class Feathers extends Base {
  create(data = {}, userId) {
    return super.create(data)
  }

  // Single or bulk patch update record(s)
  patch(id = null, query = {}, data = {}, userId) {
    return super.patch(id, query, data)
  }

  // Single or bulk remove record(s)
  remove(id = null, query = {}, userId) {
    return super.remove(id, query)
  }
}

export default Feathers
