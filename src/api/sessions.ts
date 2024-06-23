import { AxiosError } from 'axios'
import Client from '../types/Client'
import ItemsQuery from '../types/queries/ItemsQuery'
import Session from '../types/sessions/Session'
import ProgressQuery, {
  ProgressStoppedQuery,
} from '../types/queries/ProgressQuery'

export const sessions = (client: Client, params?: ItemsQuery) => {
  return new Promise<Session[]>((resolve, reject) => {
    client.client
      .get<Session[]>('/Sessions', {
        params: params,
      })
      .then(
        (res) => resolve(res.data),
        (error: AxiosError) => reject(error),
      )
  })
}

export const playing = (client: Client, payload: ProgressQuery) => {
  return new Promise<void>((resolve, reject) => {
    client.client.post<void>('/Sessions/Playing', payload).then(
      (res) => resolve(),
      (error: AxiosError) => reject(error),
    )
  })
}

export const playingProgress = (client: Client, payload: ProgressQuery) => {
  return new Promise<void>((resolve, reject) => {
    client.client.post<void>('/Sessions/Playing/Progress', payload).then(
      (res) => resolve(),
      (error: AxiosError) => reject(error),
    )
  })
}

export const playingStopped = (
  client: Client,
  payload: ProgressStoppedQuery,
) => {
  return new Promise<void>((resolve, reject) => {
    client.client.post<void>('/Sessions/Playing/Stopped', payload).then(
      (res) => resolve(),
      (error: AxiosError) => reject(error),
    )
  })
}

export const playState = (
  client: Client,
  sessionID: string,
  command:
    | 'Stop'
    | 'Pause'
    | 'Unpause'
    | 'NextTrack'
    | 'PreviousTrack'
    | 'Seek'
    | 'Rewind'
    | 'FastForward'
    | 'PlayPause',
) => {
  return new Promise<void>((resolve, reject) => {
    client.client
      .post<void>('/Sessions/' + sessionID + '/Playing/' + command)
      .then(
        (res) => resolve(),
        (error: AxiosError) => reject(error),
      )
  })
}
