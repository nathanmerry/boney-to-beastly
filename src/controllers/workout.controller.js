const workoutService = require('../services/workout.service')

module.exports = {
  async createWorkout(req, res) {
    console.log('Workout Controller: Creating Workout')
    try {
      return res.send({
        data: await workoutService.createWorkout({
          ...req.body,
          email: req.user.email
        })
      })
      return res.send({})
    } catch(e) {
      console.log(e)
      return {}
    }
  },
}