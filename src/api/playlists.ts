import { AxiosError } from 'axios'
import Client from '../types/Client'
import ItemsList from '../types/media/ItemsList'
import ItemsQuery from '../types/users/ItemsQuery'

export const playlists = (client: Client, itemID: string, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Playlists/' + itemID + '/Items', {
        params: {...params, UserId: client.user},
      })
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}
