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
    app.get('/getLocals', (req, res) => {
      const get = {
        headers:{
          authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNWZmZGFhNGQzYjQ5NjcwMDE0ZGVjZTU5IiwidXNlcm5hbWUiOiJDT0NJTkEiLCJsb2NhbHMiOlt7Im5hbWUiOiJEZW1vIFJlc3RvIiwiaWQiOiI1ZmZjNTg2NGZiZTViYTAwMTRlZGM1NWYifV19LCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE2MzA1NDE3NTUsImV4cCI6MTYzMTE0NjU1NX0.LMJ7vi3bIY_CIDb7SDGxza6f4x8l3xpTBt5MW2Y8WeM"
        }
      }
      const {id} = req.params
      console.log(id)
      axios.get(`https://happymatch-backend.herokuapp.com/api/groupTables/getAllGroupTablesByLocalId/:localID/${id}`, get)
      .then(
    
      )
    })
    



})

module.exports = {
  path: "/api",
  handler: app
}

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
