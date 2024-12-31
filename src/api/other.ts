import { AxiosError } from 'axios'
import Client from '../types/Client'
import { IntroSegments } from '../types/other/IntroTimestamps'

export const introTimestamps = (
  client: Client,
  itemID: string,
): Promise<IntroSegments> => {
  return new Promise<IntroSegments>((resolve, reject) => {
    client.client
      .get<IntroSegments>('/Episode/' + itemID + '/IntroSkipperSegments')
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}
