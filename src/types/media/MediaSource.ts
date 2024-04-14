import MediaStream from './MediaStream'

type MediaSource = {
  Protocol: string
  Id: string
  Path: string
  EncoderPath: string
  EncoderProtocol: string
  Type: string
  Container: string
  Size: number
  Name: string
  IsRemote: true
  ETag: string
  RunTimeTicks: number
  ReadAtNativeFramerate: true
  IgnoreDts: true
  IgnoreIndex: true
  GenPtsInput: true
  SupportsTranscoding: true
  SupportsDirectStream: true
  SupportsDirectPlay: true
  IsInfiniteStream: true
  RequiresOpening: true
  OpenToken: string
  RequiresClosing: true
  LiveStreamId: string
  BufferMs: number
  RequiresLooping: true
  SupportsProbing: true
  VideoType: string
  IsoType: string
  Video3DFormat: string
  MediaStreams: MediaStream[]
  MediaAttachments: {
    Codec: string
    CodecTag: string
    Comment: string
    Index: number
    FileName: string
    MimeType: string
    DeliveryUrl: string
  }[]
  Formats: string[]
  Bitrate: number
  Timestamp: string
  RequiredHttpHeaders: {
    property1: string
    property2: string
  }
  TranscodingUrl: string
  TranscodingSubProtocol: string
  TranscodingContainer: string
  AnalyzeDurationMs: number
  DefaultAudioStreamIndex: number
  DefaultSubtitleStreamIndex: number
}

export default MediaSource
