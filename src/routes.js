const router = require('express').Router();
const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const workoutController = require('./controllers/workout.controller')
const userController = require('./controllers/user.controller')

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-3vl6wl67.us.auth0.com/.well-known/jwks.json'
  }),

  // Validate the audience and the issuer
  audience: process.env.AUTH0_AUDIENCE,
  issuer: 'https://dev-3vl6wl67.us.auth0.com/',
  algorithms: [ 'RS256' ]
})

const getEmailFromReq = async (req, res, next) => {
  const namespace = 'https://modest-leavitt-d8146a.netlify.app'
  const email = req.user && req.user[`${namespace}/email`]
  // const email = 'nathanmerry9713@gmail.com'
  if (!email) res.status(401).send('Email not found from token')
  req.user.email = email
  next()
}

// user
router.post('/api/user', checkJwt, userController.create)
// workout
router.post('/api/workout', checkJwt, workoutController.createWorkout)

module.exports = router
