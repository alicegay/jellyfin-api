import { AxiosError } from 'axios'
import Client from '../types/Client'
import { IntroSegments, MediaSegments } from '../types/other/IntroTimestamps'

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

export const mediaSegments = (
  client: Client,
  itemID: string,
): Promise<MediaSegments> => {
  return new Promise<MediaSegments>((resolve, reject) => {
    client.client.get<MediaSegments>('/MediaSegments/' + itemID).then(
      (res) => resolve(res.data),
      (error: AxiosError) => reject(error),
    )
  })
}
