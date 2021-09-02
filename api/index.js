const Cookies = require('cookies')
const express = require('express')
const axios = require('axios')
const app = express()


const getToken = (req,res) => {
  const cookies = new Cookies(req, res)
  const token = cookies.get('token')
  return token
}

const getUser = (req,res) => {
  const cookies = new Cookies(req, res)
  const user = cookies.get('user')
  return user
}

app.use(express.json())
app.get('/', (req, res) => {
 

  res.statusCode = 200
  res.json(getToken(req,res))
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
      const user = {id, username, locals}
      console.log(user)
      if (token) {
    
        cookies.set('token', 'Bearer ' + token, {
          maxAge: 3600000 * 12,
          httpOnly: true // true by default
        })

        cookies.set('user', locals, {
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
 app.get('/getLocals',async (req, res) => {
  const token = await getToken(req,res)
  const user = await getUser(req,res)

  const get = {
    headers:{
      authorization : token
    }
  }
  
  console.log(toString(user))
  await axios.get(`https://happymatch-backend.herokuapp.com/api/groupTables/getAllGroupTablesByLocalId/${user}`, get)
  .then(
    response => res.json({response})
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

