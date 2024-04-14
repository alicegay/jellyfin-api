import { AxiosError } from 'axios'
import Client from '../types/Client'
import ItemsList from '../types/media/ItemsList'
import ItemsQuery from '../types/queries/ItemsQuery'

export const artists = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client
      .get<ItemsList>('/Artists', {
        params: { ...params, UserId: client.user },
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const albumArtists = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client
      .get<ItemsList>('/Artists/AlbumArtists', {
        params: { ...params, UserId: client.user },
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}
