import axios, { AxiosError } from 'axios'
import useClient from '../hooks/useClient'

import InfoPublic from '../types/system/InfoPublic'

export const info = () => {
  return new Promise<InfoPublic | AxiosError>((resolve) => {
    useClient
      .getState()
      .client.get('/System/Info')
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => resolve(error))
  })
}

export const infoPublic = (server: string) => {
  return new Promise<InfoPublic | AxiosError>((resolve) => {
    axios
      .get<InfoPublic>('/System/Info/Public', { baseURL: server })
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => resolve(error))
  })
}
