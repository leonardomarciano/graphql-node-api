import * as http from 'http'
import app from './app'
import { normalizePort } from './utils/utils';

// ? Declarative
const server = http.createServer(app)
const port = normalizePort(process.env.port || 3000)

// * Server
server.listen(port);
server.on('listening', ()=> console.log(`Listening on port ${port}`))