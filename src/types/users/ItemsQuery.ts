type ItemsQuery = {
  ParentId?: string,
  SortBy?: string
  SortOrder?: 'Ascending' | 'Descending'
  IncludeItemTypes?: string
  ExcludeItemTypes?: string
  Recursive?: boolean
  Fields?: string
  ImageTypeLimit?: number
  EnableImageTypes?: string
  StartIndex?: number
  Limit?: number
  IsFavorite?: boolean
}

export default ItemsQuery
