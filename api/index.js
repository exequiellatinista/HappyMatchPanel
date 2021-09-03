const Cookies = require('cookies')
const express = require('express')
const axios = require('axios')
const app = express()


const getToken = (req, res) => {
  const cookies = new Cookies(req, res)
  const token = cookies.get('token')
  return token
}

const getUser = (req, res) => {
  const cookies = new Cookies(req, res)
  const user = JSON.parse(cookies.get('user'))
  return user
}

app.use(express.json())
app.get('/', (req, res) => {


  res.statusCode = 200
  res.json(getToken(req, res))
})
app.post('/', (req, res) => {

  const post = {
    "username": req.body.username,
    "password": req.body.password
  }

  axios.post('https://happymatch-backend.herokuapp.com/api/clients/loginClient', post)
    .then(response => {
      const { token, id, username, locals } = response.data.data
      const cookies = new Cookies(req, res)
      if (token) {

        cookies.set('token', 'Bearer ' + token, {
          maxAge: 3600000 * 12,
          httpOnly: true
        })

        cookies.set('user', JSON.stringify({id,username,locals}), {
          maxAge: 3600000 * 12,
          httpOnly: true
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
app.get('/getGroupTables:localId', (req, res) => {
  const token = getToken(req, res)
  const get = { headers: { Authorization: token } }
  const user = getUser();
  console.log(user)
  console.log(token)
   axios.get('https://happymatch-backend.herokuapp.com/api/groupTables/getAllGroupTablesByLocalId/5ffc5864fbe5ba0014edc55f', get)
    .then(

      response => {
        res.json( response.data )}
    )
    .catch(e => {
      res.statusCode = 403
      res.json({
        error: e.message
      })
    })
})


module.exports = {
  path: "/api",
  handler: app
}

