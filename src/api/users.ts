import axios, { AxiosError } from 'axios'
import useClient from '../hooks/useClient'
import Authentication from '../types/users/Authentication'
import ItemsList from '../types/media/ItemsList'

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
        useClient.getState().setClient({
          server: server,
          clientName: clientName,
          deviceName: deviceName,
          deviceID: deviceID,
          version: version,
          user: response.data.User.Id,
          token: response.data.AccessToken,
        })
        resolve(response.data)
      })
  })
}

export const _ResetClient = (
  clientName: string,
  deviceName: string,
  deviceID: string,
  version: string,
) => {
  if (!useClient.getState().client && useClient.getState().token) {
    useClient.getState().setClient({
      server: useClient.getState().server,
      clientName: clientName,
      deviceName: deviceName,
      deviceID: deviceID,
      version: version,
      user: useClient.getState().user,
      token: useClient.getState().token,
    })
  }
}

export const Views = () => {
  return new Promise<ItemsList>((resolve, reject) => {
    useClient
      .getState()
      .client.get<ItemsList>('/Users/' + useClient.getState().user + '/Views')
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}

export const Items = (config?: {}) => {
  return new Promise<ItemsList>((resolve, reject) => {
    useClient
      .getState()
      .client.get<ItemsList>('/Users/' + useClient.getState().user + '/Items', {
        data: config,
      })
      .then((res) => resolve(res.data))
      .catch((error: AxiosError) => reject(error))
  })
}
