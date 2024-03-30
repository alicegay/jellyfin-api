import { AxiosError } from 'axios'
import Client from '../types/Client'
import ItemsList from '../types/media/ItemsList'
import ItemsQuery from '../types/users/ItemsQuery'

export const artists = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Artists', {
        params: {...params, UserId: client.user},
      })
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}

export const albumArtists = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Artists/AlbumArtists', {
        params: {...params, UserId: client.user},
      })
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}