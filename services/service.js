import axios from 'axios'
const baseURL = 'https://happymatch-backend.herokuapp.com/api/'
export default axios.create({
  baseURL,
})
