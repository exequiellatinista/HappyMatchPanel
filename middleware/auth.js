const Cookies = require('cookies')

export default function ({ store, redirect, req, res }) {
  console.log(req.headers.cookie)
  const cookies = new Cookies(req, res)

  try {
    const token = cookies.get('token')
    if (!token) {
      redirect({ name: 'auth' })
    }
  } catch (e) { console.log(e); redirect({ name: 'auth' }) }


}