import { httpStart } from './http.js'
import { websocketStart } from './ws.js'

const server = httpStart()
websocketStart(server)
