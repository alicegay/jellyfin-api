type Lyrics = {
  Metadata: {
    Artist: string
    Album: string
    Title: string
    Author: string
    Length: number
    By: string
    Offset: number
    Creator: string
    Version: string
    IsSynced: boolean
  }
  Lyrics: Lyric[]
}

type Lyric = {
  Text: string
  Start: number
}

export default Lyrics
