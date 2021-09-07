import Cookies from 'cookies'

export default async function (req, res, next) {
  const cookies = new Cookies(req, res)

  const loadingPage = req.url === '/_loading/sse'
  const PageLogin = req.url === '/auth'
  const token = cookies.get('token')

  if (!loadingPage && !PageLogin && !token && req.url !== '/settoken') {
    res.writeHead(301, { Location: '/auth' })
    res.end()
  }

  if (!loadingPage && PageLogin && token) {
    res.writeHead(301, { Location: '/questions' })
    res.end()
  }

  if (req.url === '/settoken' && req.url !== '/_loading/sse') {
      const post = {
        "username": req.body.username,
        "password": req.body.password
      }
    
     await this.$axios.$post('https://happymatch-backend.herokuapp.com/api/clients/loginClient', post)
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
    }

  next()
}