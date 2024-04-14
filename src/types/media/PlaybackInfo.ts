import MediaSource from './MediaSource'

type PlaybackInfo = {
  MediaSources: MediaSource[]
  PlaySessionId: string
  ErrorCode?: string
}

export default PlaybackInfo
