import { AxiosError } from 'axios'
import Client from '../types/Client'
import ItemsList from '../types/media/ItemsList'
import ItemsQuery from '../types/queries/ItemsQuery'
import PlaybackInfo from '../types/media/PlaybackInfo'
import PlaybackInfoQuery from '../types/queries/PlaybackInfoQuery'

export const items = (
  client: Client,
  itemID: string,
  payload: PlaybackInfoQuery,
  params?: ItemsQuery,
) => {
  return new Promise<PlaybackInfo>((resolve, reject) => {
    client.client
      .post<PlaybackInfo>(
        '/Items/' + itemID + '/PlaybackInfo',
        { ...payload, UserId: client.user },
        {
          params,
        },
      )
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}
