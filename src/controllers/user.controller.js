const userService = require("../services/user.service.js")

module.exports = {
  async create(req, res) {
    console.log('Users Controller: Creating User')
    try {
      return res.send({ data: await userService.create({ ...req.body, email: req.user.email }) })
    } catch(e) {
      console.log(e)
      return {}
    }
  },
  async getCurrent(req, res) {
    console.log('Users Controller: Getting Current User')
  
    try {
      return res.send({ data: await userService.getUserByEmail(req.user.email) })
    } catch(e) {
      console.log(e)
      return {}
    }
  },
  async updateUser(req, res) {
    console.log('Users Controller: Updating User')
    try {
      return res.send({ data: await userService.updateUser({ ...req.body, email: req.user.email }) })
    } catch(e) {
      console.log(e)
      return {}
    }
  },
}