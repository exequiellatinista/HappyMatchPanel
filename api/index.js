const Cookies = require('cookies')
const express = require('express')
const axios = require('axios')
const app = express()




app.use(express.json())
app.get('/', (req, res) => {
  const cookies = new Cookies(req, res)
  const token = cookies.get('token')

  res.statusCode = 200
  res.json(token)
})
app.post('/', (req, res) => {

  const post = {
    "username": req.body.username,
    "password": req.body.password
  }

   axios.post('https://happymatch-backend.herokuapp.com/api/clients/loginClient', post)
    .then(response => {
      const { token } = response.data.data
      const cookies = new Cookies(req, res)

      if (token) {
    
        cookies.set('token', 'Bearer ' + token, {
          maxAge: 3600000 * 12,
          httpOnly: true // true by default
        })
   
        res.json({
          data: response.data.data
        })

      }
    })
    .catch(e => {
      res.statusCode = 403
      res.json({
        error: e.message
      })
    })



})

module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
