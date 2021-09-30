
import Service from './service.js'
const resource = 'clients/registerClient'
export default {
get () {
return Service.get(resource)
},
create(data) {
	return Service.post(resource, data)
}
}
