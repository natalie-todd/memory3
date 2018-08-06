// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    // '///'is shorthand for local host
    connection: 'postgresql:///memory3'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
