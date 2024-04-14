import Item from '../media/Item'

type Session = {
  PlayState: PlayState
  AdditionalUsers: {
    UserId: string
    UserName: string
  }[]
  Capabilities: {}
  RemoteEndPoint: string
  PlayableMediaTypes: string[]
  Id: string
  UserId: string
  UserName: string
  Client: string
  LastActivityDate: string
  LastPlaybackCheckIn: string
  DeviceName: string
  DeviceType: string
  NowPlayingItem: Item
  FullNowPlayingItem: {}
  NowViewingItem: {}
  DeviceId: string
  ApplicationVersion: string
  TranscodingInfo: TranscodingInfo
  IsActive: boolean
  SupportsMediaControl: boolean
  SupportsRemoteControl: boolean
  NowPlayingQueue: {
    Id: string
    PlaylistItemId: string
  }[]
  NowPlayingQueueFullItems: Item[]
  HasCustomDeviceName: boolean
  PlaylistItemId: string
  ServerId: string
  UserPrimaryImageTag: string
  SupportedCommands: string[]
}

export type PlayState = {
  PositionTicks: number
  CanSeek: true
  IsPaused: boolean
  IsMuted: boolean
  VolumeLevel: number
  AudioStreamIndex: number
  SubtitleStreamIndex: number
  MediaSourceId: string
  PlayMethod: 'DirectPlay' | 'DirectStream' | 'Transcode'
  RepeatMode: 'RepeatAll' | 'RepeatNone' | 'RepeatOne'
}

export type TranscodingInfo = {
  AudioCodec: string
  VideoCodec: string
  Container: string
  IsVideoDirect: boolean
  IsAudioDirect: boolean
  Bitrate: number
  Framerate: number
  CompletionPercentage: number
  Width: number
  Height: number
  AudioChannels: number
  HardwareAccelerationType: string
  TranscodeReasons: TranscodeReason[]
}

export type TranscodeReason =
  | 'AnamorphicVideoNotSupported'
  | 'AudioBitDepthNotSupported'
  | 'AudioBitrateNotSupported'
  | 'AudioChannelsNotSupported'
  | 'AudioCodecNotSupported'
  | 'AudioIsExternal'
  | 'AudioProfileNotSupported'
  | 'AudioSampleRateNotSupported'
  | 'ContainerBitrateExceedsLimit'
  | 'ContainerNotSupported'
  | 'DirectPlayError'
  | 'InterlacedVideoNotSupported'
  | 'RefFramesNotSupported'
  | 'SecondaryAudioNotSupported'
  | 'SubtitleCodecNotSupported'
  | 'UnknownAudioStreamInfo'
  | 'UnknownVideoStreamInfo'
  | 'VideoBitDepthNotSupported'
  | 'VideoBitrateNotSupported'
  | 'VideoCodecNotSupported'
  | 'VideoFramerateNotSupported'
  | 'VideoLevelNotSupported'
  | 'VideoProfileNotSupported'
  | 'VideoRangeTypeNotSupported'
  | 'VideoResolutionNotSupported'

export default Session
