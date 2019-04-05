import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-sb.firebaseio.com'
})

export default instance;