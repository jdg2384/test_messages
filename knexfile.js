'use strict';

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/test'
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/test'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
}

// 'use strict';
// module.exports = {
//  development: {
//    client: 'pg',
//    connection: 'postgres://localhost/test',
//  },
//  test: {
//    client: 'pg',
//    connection: 'postgres://localhost/test',
//  },

//  production: {
//    client: 'pg',
//    connection: process.env.DATABASE_URL
//  }
// };