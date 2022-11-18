import axios, { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'
import Cookies from 'js-cookie'

export default function SetupApi() {
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
    headers: {
      Authorization: `Bearer ${Cookies.get('auth_token')}`
    }
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        signIn()
      }
      return Promise.reject(error)
    }
  )
  return api
}
