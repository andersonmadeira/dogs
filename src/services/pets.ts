import axios, { AxiosResponse } from 'axios'
import { PetsLoginResponse } from './pets.types'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const login = (username: string, password: string): Promise<AxiosResponse<PetsLoginResponse>> =>
  api.post(`/json/jwt-auth/v1/token`, { username, password })
