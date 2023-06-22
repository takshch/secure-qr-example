import config from 'config'

const PORT = config.get('port')

if (!PORT) {
  console.log('PORT is not available in config');
}

export { PORT }