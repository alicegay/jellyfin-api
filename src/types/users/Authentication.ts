import User from './User'

type Authentication = {
  User: User
  SessionInfo: any // todo))
  AccessToken: string
  ServerId: string
}

export default Authentication
