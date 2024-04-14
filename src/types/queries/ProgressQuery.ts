type ProgressQuery = {
  CanSeek: boolean
  Item?: string
  ItemId: string
  SessionId?: string
  MediaSourceId?: string
  AudioStreamIndex?: number
  SubtitleStreamIndex?: number
  EventName?: 'timeupdate' | 'pause' | 'unpause'
  IsPaused: boolean
  IsMuted: boolean
  PositionTicks?: boolean
  PlaybackStartTimeTicks?: boolean
  VolumeLevel?: boolean
  Brightness?: number
  AspectRatio?: string
  PlayMethod: 'DirectPlay' | 'DirectStream' | 'Transcode'
  LiveStreamId?: string
  PlaySessionId?: string
  RepeatMode: 'RepeatNone' | 'RepeatAll' | 'RepeatOne'
  NowPlayingQueue?: {
    Id: string
    PlaylistItemId?: string
  }[]
  PlaylistItemId?: string
}

export type ProgressStoppedQuery = {
  Item?: string
  ItemId: string
  SessionId?: string
  MediaSourceId?: string
  PositionTicks?: string
  LiveStreamId?: string
  PlaySessionId?: string
  Failed: boolean
  NextMediaType?: string
  PlaylistItemId?: string
  NowPlayingQueue?: {
    Id: string
    PlaylistItemId?: string
  }[]
}

export default ProgressQuery
