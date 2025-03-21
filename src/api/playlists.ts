import { AxiosError } from 'axios'
import Client from '../types/Client'
import ItemsList from '../types/media/ItemsList'
import ItemsQuery from '../types/queries/ItemsQuery'
import PlaylistUser from '../types/playlists/PlaylistUser'

export const playlists = (
  client: Client,
  itemID: string,
  params?: ItemsQuery,
): Promise<ItemsList> => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client
      .get<ItemsList>('/Playlists/' + itemID + '/Items', {
        params: { ...params, UserId: client.user },
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const user = (
  client: Client,
  playlistID: string,
): Promise<PlaylistUser> => {
  return new Promise<PlaylistUser>((resolve, reject) => {
    client.client
      .get<PlaylistUser>('/Playlists/' + playlistID + '/Users/' + client.user)
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const add = (
  client: Client,
  playlistID: string,
  itemIDs: string[],
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    client.client
      .post<void>('/Playlists/' + playlistID + '/Items', null, {
        params: { ids: itemIDs.join(','), userId: client.user },
      })
      .then(
        (res) => resolve(),
        (error: AxiosError) => reject(error),
      )
  })
}

export const remove = (
  client: Client,
  playlistID: string,
  itemIDs: string[],
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    client.client
      .delete<void>('/Playlists/' + playlistID + '/Items', {
        params: { entryIds: itemIDs.join(',') },
      })
      .then(
        (res) => resolve(),
        (error: AxiosError) => reject(error),
      )
  })
}

export const create = (
  client: Client,
  name: string,
  itemIDs: string[],
  isPublic: boolean,
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    client.client
      .post<void>('/Playlists', {
        params: {
          Name: name,
          Ids: itemIDs.join(','),
          UserId: client.user,
          IsPublic: isPublic,
        },
      })
      .then(
        (res) => resolve(),
        (error: AxiosError) => reject(error),
      )
  })
}
