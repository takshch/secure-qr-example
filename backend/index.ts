import http from 'http';
import app from './src/app';
import { PORT } from './src/config';

const server = http.createServer(app);

function onListening() {
  console.log(`Server started listening on port ${PORT}`);
}

function onError(err: any) {
  console.log(err);
}

server.on('listening', onListening);
server.on('error', onError);

server.listen(PORT);
