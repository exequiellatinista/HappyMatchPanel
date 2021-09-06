const axios = require('axios')
const Cookies = require('cookies')
const app = require('express')()
module.exports = { path: '/api', handler: app }


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


app.get('/', (req, res) => {


  res.statusCode = 200
  res.json(getToken(req, res))
})
app.post('/:name/:pass', (req, res) => {

const {name, pass} = req.params
console.log(name, pass, 'olo')
  const post = {
    "username": name,
    "password":pass
  }

  axios.post('https://happymatch-backend.herokuapp.com/api/clients/loginClient', post)
    .then(response => {
      const { token, id, username, locals } = response.data.data
      console.log(response)
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
app.get('/getGroupTables/:localId', (req, res) => {
  const {localId} = req.params
  const token = getToken(req, res)
  const get = { headers: { Authorization: token } }
   axios.get(`https://happymatch-backend.herokuapp.com/api/groupTables/getAllGroupTablesByLocalId/${localId}`, get)
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

app.get('/getUser', (req,res) => {
  const user = getUser(req, res)
  res.json(user)
})

app.get('/getQuestions/:localId', (req, res) => {
  const {localId} = req.params
  const token = getToken(req, res)
  const get = { headers: { Authorization: token } }
  axios.get(`https://happymatch-backend.herokuapp.com/api/questions/getQuestionsByLocalId/${localId}`, get)
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

