import axios, { AxiosError } from 'axios'
import useClient from '../hooks/useClient'
import Authentication from '../types/users/Authentication'

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
          token: response.data.AccessToken,
        })
        resolve(response.data)
      })
  })
}

export const ResetClient = (
  clientName: string,
  deviceName: string,
  deviceID: string,
  version: string,
) => {
  if (!useClient.getState().client) {
    useClient.getState().setClient({
      server: useClient.getState().server,
      clientName: clientName,
      deviceName: deviceName,
      deviceID: deviceID,
      version: version,
      token: useClient.getState().token,
    })
  }
}
