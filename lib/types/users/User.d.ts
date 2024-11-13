type User = {
    Name: string;
    ServerId: string;
    ServerName: string;
    Id: string;
    PrimaryImageTag: string;
    HasPassword: true;
    HasConfiguredPassword: true;
    HasConfiguredEasyPassword: true;
    EnableAutoLogin: true;
    LastLoginDate: string;
    LastActivityDate: string;
    Configuration: any;
    Policy: any;
    PrimaryImageAspectRatio: 0;
};
export default User;
