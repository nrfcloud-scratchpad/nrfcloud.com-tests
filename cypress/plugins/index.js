const dotenv = require('dotenv')
dotenv.config()

module.exports = (on, config) => {
  config.env.NRFCLOUD_LOGIN = process.env.NRFCLOUD_LOGIN
  config.env.NRFCLOUD_PASSWORD = process.env.NRFCLOUD_PASSWORD
  config.env.TEST_HOST = process.env.TEST_HOST || 'https://nrfcloud.com'
  return config
}
