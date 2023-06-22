import config from 'config';
import http from 'http';
import app from './src/app';

const PORT = config.get('port');
if (!PORT) {
  console.log('PORT is not available in config');
}

const server = http.createServer(app);

function onListening() {
  console.info(`Server started listening on port ${PORT}`);
}

function onError(err: any) {
  console.info(err);
}

server.on('listening', onListening);
server.on('error', onError);

server.listen(PORT);
