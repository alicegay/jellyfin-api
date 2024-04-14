import DeviceProfile from './DeviceProfile'

type PlaybackInfoQuery = {
  UserId?: string
  MaxStreamingBitrate?: number
  StartTimeTicks?: number
  AudioStreamIndex?: number
  SubtitleStreamIndex?: number
  MaxAudioChannels?: number
  MediaSourceId?: string
  LiveStreamId?: string
  DeviceProfile?: DeviceProfile[]
  EnableDirectPlay?: boolean
  EnableDirectStream?: boolean
  EnableTranscoding?: boolean
  AllowVideoStreamCopy?: boolean
  AllowAudioStreamCopy?: boolean
  AutoOpenLiveStream?: boolean
}

export default PlaybackInfoQuery
