type ItemsQuery = {
  ParentId?: string
  SortBy?: string
  SortOrder?: 'Ascending' | 'Descending'
  IncludeItemTypes?: string
  ExcludeItemTypes?: string
  Recursive?: boolean
  Fields?: string
  Filter?: string
  ImageTypeLimit?: number
  EnableImageTypes?: string
  StartIndex?: number
  Limit?: number
  IsFavorite?: boolean
  Season?: number
  SeasonId?: string
  StartTimeTicks?: number
  AudioStreamIndex?: number
  SubtitleStreamIndex?: number
  deviceId?: string
}

export default ItemsQuery
