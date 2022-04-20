import path from 'path'


const development = {
    client: 'pg',
    connection: {
      host: '192.168.152.10',
      port: 5432,
      user: 'signin-signup-nodejs',
      password: '123456',
      database: 'signin-signup-nodejs',
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
};

const production = {
    client: 'pg',
    connection: {
      host: '',
      port: 5432,
      user: '',
      password: '',
      database: '',
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
};

export {development, production}