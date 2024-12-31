import { AxiosError } from 'axios'
import Client from '../types/Client'
import ItemsQuery from '../types/queries/ItemsQuery'
import Item from '../types/media/Item'
import PlaybackInfo from '../types/media/PlaybackInfo'
import PlaybackInfoQuery from '../types/queries/PlaybackInfoQuery'

export const items = (
  client: Client,
  itemID: string,
  params?: ItemsQuery,
): Promise<Item> => {
  return new Promise<Item>((resolve, reject) => {
    client.client
      .get<Item>('/Items/' + itemID, {
        params: { ...params, UserId: client.user },
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const playbackInfo = (
  client: Client,
  itemID: string,
  payload: PlaybackInfoQuery,
  params?: ItemsQuery,
): Promise<PlaybackInfo> => {
  return new Promise<PlaybackInfo>((resolve, reject) => {
    client.client
      .post<PlaybackInfo>(
        '/Items/' + itemID + '/PlaybackInfo',
        { ...payload, UserId: client.user },
        {
          params: params,
        },
      )
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const latest = (
  client: Client,
  parentID: string,
  params?: ItemsQuery,
): Promise<Item[]> => {
  return new Promise<Item[]>((resolve, reject) => {
    client.client
      .get<Item[]>('/Items/Latest', {
        params: { ...params, UserId: client.user, ParentId: parentID },
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}
