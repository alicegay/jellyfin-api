import UserData from '../users/UserData'
import MediaStream from './MediaStream'

type Item = {
  Name: string
  OriginalTitle: string
  ServerId: string
  Id: string
  Etag: string
  SourceType: string
  PlaylistItemId: string
  DateCreated: string
  DateLastMediaAdded: string
  ExtraType: string
  AirsBeforeSeasonNumber: number
  AirsAfterSeasonNumber: number
  AirsBeforeEpisodeNumber: number
  CanDelete: true
  CanDownload: true
  HasSubtitles: true
  PreferredMetadataLanguage: string
  PreferredMetadataCountryCode: string
  SupportsSync: true
  Container: string
  SortName: string
  ForcedSortName: string
  Video3DFormat: string
  PremiereDate: string
  ExternalUrls: [
    {
      Name: string
      Url: string
    },
  ]
  MediaSources: MediaSource[]
  CriticRating: number
  ProductionLocations: string[]
  Path: string
  EnableMediaSourceDisplay: true
  OfficialRating: string
  CustomRating: string
  ChannelId: string
  ChannelName: string
  Overview: string
  Taglines: string[]
  Genres: string[]
  CommunityRating: number
  CumulativeRunTimeTicks: number
  RunTimeTicks: number
  PlayAccess: string
  AspectRatio: string
  ProductionYear: number
  IsPlaceHolder: true
  Number: string
  ChannelNumber: string
  IndexNumber: number
  IndexNumberEnd: number
  ParentIndexNumber: number
  RemoteTrailers: [
    {
      Url: string
      Name: string
    },
  ]
  ProviderIds: {
    property1: string
    property2: string
  }
  IsHD: true
  IsFolder: true
  ParentId: string
  Type: string
  People: any
  Studios: any
  GenreItems: any
  ParentLogoItemId: string
  ParentBackdropItemId: string
  ParentBackdropImageTags: string[]
  LocalTrailerCount: number
  UserData: UserData
  RecursiveItemCount: number
  ChildCount: number
  SeriesName: string
  SeriesId: string
  SeasonId: string
  SpecialFeatureCount: number
  DisplayPreferencesId: string
  Status: string
  AirTime: string
  AirDays: string[]
  Tags: string[]
  PrimaryImageAspectRatio: number
  Artists: string[]
  ArtistItems: any
  Album: string
  CollectionType?:
    | 'playlists'
    | 'music'
    | 'tvshows'
    | 'movies'
    | 'musicvideos'
    | 'livetv'
  DisplayOrder: string
  AlbumId: string
  AlbumPrimaryImageTag: string
  SeriesPrimaryImageTag: string
  AlbumArtist: string
  AlbumArtists: [
    {
      Name: string
      Id: string
    },
  ]
  SeasonName: string
  MediaStreams: MediaStream[]
  VideoType: string
  PartCount: number
  MediaSourceCount: number
  ImageTags: {
    property1: string
    property2: string
  }
  BackdropImageTags: string[]
  ScreenshotImageTags: string[]
  ParentLogoImageTag: string
  ParentArtItemId: string
  ParentArtImageTag: string
  SeriesThumbImageTag: string
  ImageBlurHashes: {
    Primary: {
      property1: string
      property2: string
    }
    Art: {
      property1: string
      property2: string
    }
    Backdrop: {
      property1: string
      property2: string
    }
    Banner: {
      property1: string
      property2: string
    }
    Logo: {
      property1: string
      property2: string
    }
    Thumb: {
      property1: string
      property2: string
    }
    Disc: {
      property1: string
      property2: string
    }
    Box: {
      property1: string
      property2: string
    }
    Screenshot: {
      property1: string
      property2: string
    }
    Menu: {
      property1: string
      property2: string
    }
    Chapter: {
      property1: string
      property2: string
    }
    BoxRear: {
      property1: string
      property2: string
    }
    Profile: {
      property1: string
      property2: string
    }
  }
  SeriesStudio: string
  ParentThumbItemId: string
  ParentThumbImageTag: string
  ParentPrimaryImageItemId: string
  ParentPrimaryImageTag: string
  Chapters: [
    {
      StartPositionTicks: number
      Name: string
      ImagePath: string
      ImageDateModified: string
      ImageTag: string
    },
  ]
  LocationType: string
  IsoType: string
  MediaType: string
  EndDate: string
  LockedFields: ['Cast']
  TrailerCount: number
  MovieCount: number
  SeriesCount: number
  ProgramCount: number
  EpisodeCount: number
  SongCount: number
  AlbumCount: number
  ArtistCount: number
  MusicVideoCount: number
  LockData: true
  Width: number
  Height: number
  CameraMake: string
  CameraModel: string
  Software: string
  ExposureTime: number
  FocalLength: number
  ImageOrientation: string
  Aperture: number
  ShutterSpeed: number
  Latitude: number
  Longitude: number
  Altitude: number
  IsoSpeedRating: number
  SeriesTimerId: string
  ProgramId: string
  ChannelPrimaryImageTag: string
  StartDate: string
  CompletionPercentage: number
  IsRepeat: true
  EpisodeTitle: string
  ChannelType: string
  Audio: string
  IsMovie: true
  IsSports: true
  IsSeries: true
  IsLive: true
  IsNews: true
  IsKids: true
  IsPremiere: true
  TimerId: string
  CurrentProgram: {}
}

export default Item
