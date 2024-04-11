import { AxiosError } from 'axios'
import Client from '../types/Client'
import ItemsList from '../types/media/ItemsList'
import ItemsQuery from '../types/users/ItemsQuery'

export const episodes = (client: Client, itemID: string, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Shows/' + itemID + '/Episodes', {
        params: {...params, UserId: client.user},
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const seasons = (client: Client, itemID: string, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Shows/' + itemID + '/Seasons', {
        params: {...params, UserId: client.user},
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const nextup = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Shows/Nextup', {
        params: {...params, UserId: client.user},
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const upcoming = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Shows/Upcoming', {
        params: {...params, UserId: client.user},
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}
