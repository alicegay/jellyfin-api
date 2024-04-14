import axios, { AxiosError } from 'axios'
import Client from '../types/Client'
import Authentication from '../types/users/Authentication'
import ItemsList from '../types/media/ItemsList'
import ItemsQuery from '../types/queries/ItemsQuery'
import Item from '../types/media/Item'

export const authenticateByName = (
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
  return new Promise<Authentication>((resolve, reject) => {
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
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const views = (client: Client) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client.get<ItemsList>('/Users/' + client.user + '/Views').then(
      (res) => resolve(res.data),
      (error: AxiosError) => reject(error),
    )
  })
}

export const items = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client
      .get<ItemsList>('/Users/' + client.user + '/Items', {
        params: params,
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const itemsResume = (client: Client, params?: ItemsQuery) => {
  return new Promise<ItemsList>((resolve, reject) => {
    client.client
      .get<ItemsList>('/Users/' + client.user + '/Items/Resume', {
        params: params,
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const singleItem = (client: Client, itemID: string) => {
  return new Promise<Item>((resolve, reject) => {
    client.client.get<Item>('/Users/' + client.user + '/Items/' + itemID).then(
      (res) => resolve(res.data),
      (error: AxiosError) => reject(error),
    )
  })
}

export const specialFeatures = (
  client: Client,
  itemID: string,
  params?: ItemsQuery,
) => {
  return new Promise<Item[]>((resolve, reject) => {
    client.client
      .get<Item[]>(
        '/Users/' + client.user + '/Items/' + itemID + '/SpecialFeatures',
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
