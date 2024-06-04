const request = require('supertest')
const app = require('../src/app')

const defaultUser = {
  meta: { defaultPay: 1500, paydays: [] },
  name: "Nathan Merry",
  picture: "https://lh3.googleusercontent.com/a/AATXAJzz5PiHeNxEDouoW2S8b0_MYfBJamij8O6Hz7ok=s96-c",
  sub: "google-oauth2|115083220210119747628",
}

describe('User Controller', () => {
  it('Should create a new user', async (done) => {
    const created = await request(app)
      .post('/api/user')
      .send({
        name: "Nathan Merry",
        picture: "https://lh3.googleusercontent.com/a/AATXAJzz5PiHeNxEDouoW2S8b0_MYfBJamij8O6Hz7ok=s96-c",
        sub: "google-oauth2|115083220210119747628",
      })

    expect(created.statusCode).toEqual(200)
    expect(created.body.data[0]).toBe(1)

    const user = await request(app).get('/api/user')
    const { body: { data } } = user
    
    expect(user.statusCode).toStrictEqual(200)
    expect(data.name).toBe('Nathan Merry')
    expect(data.picture).toBe('https://lh3.googleusercontent.com/a/AATXAJzz5PiHeNxEDouoW2S8b0_MYfBJamij8O6Hz7ok=s96-c')
    expect(data.sub).toBe('google-oauth2|115083220210119747628')

    done()
  })
})
