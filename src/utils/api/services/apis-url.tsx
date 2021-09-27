import axios from 'axios'

export const dndAPI = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 2000,
  headers: {
    "Content-type": "application/json"
  }
})