import { AxiosInstance } from 'axios';
type Client = {
    client: AxiosInstance | null;
    server: string | null;
    user: string | null;
};
export default Client;
