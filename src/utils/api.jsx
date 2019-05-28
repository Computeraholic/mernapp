import axios from 'axios';
export default axios.create({
  baseURL: 'https://mernapi-rest.herokuapp.com'
  //baseURL: 'http://localhost:5000'
});
