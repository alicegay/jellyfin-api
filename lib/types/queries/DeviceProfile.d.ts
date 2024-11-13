type DeviceProfile = {
    Name?: string;
    Id?: string;
    Identification?: {
        FriendlyName?: string;
        ModelNumber?: string;
        SerialNumber?: string;
        ModelName?: string;
        ModelDescription?: string;
        ModelUrl?: string;
        Manufacturer?: string;
        ManufacturerUrl?: string;
        Headers?: {
            Name?: string;
            Value?: string;
            Match?: string;
        }[];
    };
    FriendlyName?: string;
    Manufacturer?: string;
    ManufacturerUrl?: string;
    ModelName?: string;
    ModelDescription?: string;
    ModelNumber?: string;
    ModelUrl?: string;
    SerialNumber?: string;
    EnableAlbumArtInDidl?: boolean;
    EnableSingleAlbumArtLimit?: boolean;
    EnableSingleSubtitleLimit?: boolean;
    SupportedMediaTypes?: string;
    UserId?: string;
    AlbumArtPn?: string;
    MaxAlbumArtWidth?: number;
    MaxAlbumArtHeight?: number;
    MaxIconWidth?: number;
    MaxIconHeight?: number;
    MaxStreamingBitrate?: number;
    MaxStaticBitrate?: number;
    MusicStreamingTranscodingBitrate?: number;
    MaxStaticMusicBitrate?: number;
    SonyAggregationFlags?: string;
    ProtocolInfo?: string;
    TimelineOffsetSeconds?: number;
    RequiresPlainVideoItems?: boolean;
    RequiresPlainFolders?: boolean;
    EnableMSMediaReceiverRegistrar?: boolean;
    IgnoreTranscodeByteRangeRequests?: boolean;
    XmlRootAttributes?: {
        Name?: string;
        Value?: string;
    }[];
    DirectPlayProfiles?: DirectPlayProfile[];
    TranscodingProfiles?: TranscodingProfile[];
    ContainerProfiles?: ContainerProfile[];
    CodecProfiles?: CodecProfile[];
    ResponseProfiles?: ResponseProfile[];
    SubtitleProfiles?: SubtitleProfile[];
};
export type DirectPlayProfile = {
    Container?: string;
    AudioCodec?: string;
    VideoCodec?: string;
    Type?: 'Audio' | 'Photo' | 'Subtitle' | 'Video';
};
export type TranscodingProfile = {
    Container?: string;
    Type?: 'Audio' | 'Photo' | 'Subtitle' | 'Video';
    VideoCodec?: string;
    AudioCodec?: string;
    Protocol?: string;
    EstimateContentLength?: boolean;
    EnableMpegtsM2TsMode?: boolean;
    TranscodeSeekInfo?: 'Auto' | 'Bytes';
    CopyTimestamps?: boolean;
    Context?: 'Static' | 'Streaming';
    EnableSubtitlesInManifest?: boolean;
    MaxAudioChannels?: string;
    MinSegments?: number;
    SegmentLength?: number;
    BreakOnNonKeyFrames?: boolean;
    Conditions?: Condition[];
};
export type ContainerProfile = {
    Type?: 'Audio' | 'Photo' | 'Subtitle' | 'Video';
    Conditions?: Condition[];
    Container?: string;
};
export type CodecProfile = {
    Type?: 'Audio' | 'Video' | 'VideoAudio';
    Conditions?: Condition[];
    ApplyConditions?: Condition[];
    Codec?: string;
    Container?: string;
};
export type ResponseProfile = {
    Container?: string;
    AudioCodec?: string;
    VideoCodec?: string;
    Type?: 'Audio' | 'Photo' | 'Subtitle' | 'Video';
    OrgPn?: string;
    MimeType?: string;
    Conditions: Condition[];
};
export type SubtitleProfile = {
    Format?: string;
    Method?: 'Drop' | 'Embed' | 'Encode' | 'External' | 'Hls';
    DidlMode?: string;
    Language?: string;
    Container?: string;
};
export type Condition = {
    Condition?: 'Equals' | 'EqualsAny' | 'GreaterThanEqual' | 'LessThanEqual' | 'NotEquals';
    Property?: 'AudioBitDepth' | 'AudioBitrate' | 'AudioChannels' | 'AudioProfile' | 'AudioSampleRate' | 'Has64BitOffsets' | 'Height' | 'IsAnamorphic' | 'IsAvc' | 'IsInterlaced' | 'IsSecondaryAudio' | 'NumAudioStreams' | 'NumVideoStreams' | 'PacketLength' | 'RefFrames' | 'VideoBitDepth' | 'VideoBitrate' | 'VideoCodecTag' | 'VideoFramerate' | 'VideoLevel' | 'VideoProfile' | 'VideoRangeType' | 'VideoTimestamp' | 'Width';
    Value?: string;
    IsRequired?: boolean;
};
export default DeviceProfile;
