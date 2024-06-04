const request = require('supertest')
const app = require('../src/app')

describe('Workout Controller', () => {
  it('Should create a workout', async (done) => {
    const created = await request(app)
      .post('/api/workout')
      .send({})
    done()
  })
})
