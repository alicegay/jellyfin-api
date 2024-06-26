import axios, { AxiosError } from 'axios'

import Client from '../types/Client'
import InfoPublic from '../types/system/InfoPublic'

export const info = (client: Client) => {
  return new Promise<InfoPublic>((resolve, reject) => {
    client.client.get('/System/Info').then(
      (res) => resolve(res.data),
      (error: AxiosError) => reject(error),
    )
  })
}

export const infoPublic = (server: string) => {
  return new Promise<InfoPublic>((resolve, reject) => {
    axios.get<InfoPublic>('/System/Info/Public', { baseURL: server }).then(
      (res) => resolve(res.data),
      (error: AxiosError) => reject(error),
    )
  })
}
