// const Cookies = require('cookies')

export default async function ({ store, redirect, req, res, app }) {


  try {
    // const cookies = new Cookies(req, res)
    // const token = cookies.get('token')
   
    await app.$axios.$get(
      `/logger`).then(token => {   if (!token) {
        redirect({ name: 'auth' })
           
      } 
      console.log('EL TOKEN ES',token)})
   
  
  
  } catch (e) { console.log(e); redirect({ name: 'auth' }) }


}
