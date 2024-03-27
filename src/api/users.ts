import axios, { AxiosError } from 'axios'
import Client from '../types/Client'
import Authentication from '../types/users/Authentication'
import ItemsList from '../types/media/ItemsList'
import ItemsQuery from '../types/users/ItemsQuery'
import Item from '../types/media/Item'

export const AuthenticateByName = (
  server: string,
  username: string,
  password: string,
  clientName: string,
  deviceName: string,
  deviceID: string,
  version: string,
) => {
  const auth =
    'MediaBrowser Client="' +
    clientName +
    '", Device="' +
    deviceName +
    '", DeviceId="' +
    deviceID +
    '", Version="' +
    version +
    '"'
  return new Promise<Authentication | AxiosError>((resolve) => {
    axios
      .post<Authentication>(
        '/Users/AuthenticateByName',
        {
          Username: username,
          Pw: password,
        },
        {
          baseURL: server,
          headers: { Authorization: auth },
        },
      )
      .then((response) => {
        resolve(response.data)
      })
  })
}

export const Views = (client: Client) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Users/' + client.user + '/Views')
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}

export const Items = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Users/' + client.user + '/Items', {
        params: params,
      })
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}

export const Artists = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Artists', {
        params: {...params, UserId: client.user},
      })
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}

export const AlbumArtists = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Artists/AlbumArtists', {
        params: {...params, UserId: client.user},
      })
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}

export const Playlists = (client: Client, itemID: string, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Playlists/' + itemID + '/Items', {
        params: {...params, UserId: client.user},
      })
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}

export const SingleItem = (client: Client, itemID: string) => {
  return new Promise<Item>((resolve, reject) => {
    client.client.get<Item>('/Users/' + client.user + '/Items/' + itemID)
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}
