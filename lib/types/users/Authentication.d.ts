import User from './User';
type Authentication = {
    User: User;
    SessionInfo: any;
    AccessToken: string;
    ServerId: string;
};
export default Authentication;
