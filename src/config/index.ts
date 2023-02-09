import { config } from 'dotenv';

config();

const configObject: Record<string, Record<string, any>> = {
  development: {
    keepAliveTimeout: 3000,
    headersTimeout: 3000
  },
  test: {
    keepAliveTimeout: 3000,
    headersTimeout: 3000
  },
  production: {
    keepAliveTimeout: 3000,
    headersTimeout: 3000
  }
}

const appConfig = Object.freeze(configObject[process.env.NODE_ENV || 'development']);
export default appConfig;