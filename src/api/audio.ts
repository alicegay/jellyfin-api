import { AxiosError } from 'axios'
import Client from '../types/Client'
import Lyrics from '../types/media/Lyrics'

export const lyrics = (client: Client, itemID: string) => {
  return new Promise<Lyrics>((resolve, reject) => {
    client.client.get<Lyrics>('/Audio/' + itemID + '/Lyrics').then(
      (res) => resolve(res.data),
      (error: AxiosError) => reject(error),
    )
  })
}
