import { AxiosError } from 'axios'
import Client from '../types/Client'
import IntroTimestamps from '../types/other/IntroTimestamps'

export const introTimestamps = (client: Client, itemID: string) => {
  return new Promise<IntroTimestamps>((resolve, reject) => {
    client.client
      .get<IntroTimestamps>('/Episodes/' + itemID + '/IntroTimestamps/v1')
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}
