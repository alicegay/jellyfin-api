import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import axios, { AxiosInstance } from 'axios'

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
  signout: () => void
  clear: () => void
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
        set(() => ({ client: client, server: data.server, token: data.token }))
      },
      signout: () => set(() => ({ client: null, token: null })),
      clear: () => set(() => ({ client: null, server: null, token: null })),
    }),
    {
      name: 'client',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useClient
