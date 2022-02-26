import axios from "axios"

const API_BASEURL = process.env.REACT_APP_API_URL || "http://localhost:8000"

export const request = axios.create({
  baseURL: API_BASEURL,
  timeout: 1000,
  withCredentials: true,
})
