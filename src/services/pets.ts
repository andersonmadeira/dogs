import axios, { AxiosResponse } from 'axios'
import { getToken, login as authLogin } from './auth'
import { PetsLoginResponse, PetsUserResponse } from './pets.types'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use(async (config) => {
  const token = getToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export const login = (username: string, password: string): Promise<AxiosResponse<PetsLoginResponse>> =>
  api
    .post<PetsLoginResponse>(`/json/jwt-auth/v1/token`, { username, password })
    .then((response) => {
      authLogin(response.data.token)
      return response
    })

export const getUser = (): Promise<AxiosResponse<PetsUserResponse>> => api.get<PetsUserResponse>(`/json/api/user`)
