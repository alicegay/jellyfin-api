import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import axios, { AxiosInstance } from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ClientStore {
  client: AxiosInstance | null
  server: string | null
  token: string | null
  setClient: (data: {
    server: string
    clientName: string
    deviceName: string
    deviceID: string
    version: string
    token: string
  }) => void
}

const useClient = create<ClientStore>()(
  persist(
    (set) => ({
      client: null,
      server: null,
      token: null,
      setClient: (data) => {
        const auth =
          'MediaBrowser Client="' +
          data.clientName +
          '", Device="' +
          data.deviceName +
          '", DeviceId="' +
          data.deviceID +
          '", Version="' +
          data.version +
          '", Token="' +
          data.token +
          '"'
        const client = axios.create({
          baseURL: data.server,
          headers: { Authorization: auth },
        })
        set(() => ({ client: client, server: data.server }))
      },
    }),
    {
      name: 'client',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default useClient
