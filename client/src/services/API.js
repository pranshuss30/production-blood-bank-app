import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });
//jb hmara user login hoga to uska token generate or savve krayenge localstorage mein
API.interceptors.request.use((req) => {
    if (localStorage.getItem("token")) {
      req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
    }
    return req;
  });
  
  export default API;