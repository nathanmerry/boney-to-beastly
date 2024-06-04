const knexCleaner = require('knex-cleaner')
const db = require('./src/database/knex')

jest.mock('express-jwt', () =>
  jest.fn((options) => (req, res, next) => {
    req.user = {
      name: 'Nathan  Test',
      [`${process.env.AUTH0_AUDIENCE}/email`]: 'nathanmerrytest@gmail.com',
      sub: 'google-oauth2|115083220210119747628',
    }
    return next()
  })
)

beforeEach(async (done) => {
  await knexCleaner.clean(db, {
    ignoreTables: ['migrations', 'migrations_lock'],
    mode: 'truncate',
  })
  done()
})

afterAll(async (done) => {
  jest.resetAllMocks()
  db.destroy()
  return done()
})