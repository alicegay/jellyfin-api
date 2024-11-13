import axios from 'axios';
export const info = (client) => {
    return new Promise((resolve, reject) => {
        client.client.get('/System/Info').then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const infoPublic = (server) => {
    return new Promise((resolve, reject) => {
        axios.get('/System/Info/Public', { baseURL: server }).then((res) => resolve(res.data), (error) => reject(error));
    });
};
