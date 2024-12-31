import axios from 'axios';
export const authenticateByName = (server, username, password, clientName, deviceName, deviceID, version) => {
    const auth = 'MediaBrowser Client="' +
        clientName +
        '", Device="' +
        deviceName +
        '", DeviceId="' +
        deviceID +
        '", Version="' +
        version +
        '"';
    return new Promise((resolve, reject) => {
        axios
            .post('/Users/AuthenticateByName', {
            Username: username,
            Pw: password,
        }, {
            baseURL: server,
            headers: { Authorization: auth },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const views = (client) => {
    return new Promise((resolve, reject) => {
        client.client.get('/Users/' + client.user + '/Views').then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const items = (client, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Users/' + client.user + '/Items', {
            params: params,
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const itemsResume = (client, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Users/' + client.user + '/Items/Resume', {
            params: params,
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const singleItem = (client, itemID) => {
    return new Promise((resolve, reject) => {
        client.client.get('/Users/' + client.user + '/Items/' + itemID).then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const specialFeatures = (client, itemID, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Users/' + client.user + '/Items/' + itemID + '/SpecialFeatures', {
            params: params,
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const localTrailers = (client, itemID, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Users/' + client.user + '/Items/' + itemID + '/LocalTrailers', {
            params: params,
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const playedItems = (client, itemID) => {
    return new Promise((resolve, reject) => {
        client.client
            .post('/Users/' + client.user + '/PlayedItems/' + itemID)
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const playedItemsDel = (client, itemID) => {
    return new Promise((resolve, reject) => {
        client.client
            .delete('/Users/' + client.user + '/PlayedItems/' + itemID)
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const favoriteItems = (client, itemID) => {
    return new Promise((resolve, reject) => {
        client.client.post('/UserFavoriteItems/' + itemID).then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const favoriteItemsDel = (client, itemID) => {
    return new Promise((resolve, reject) => {
        client.client.delete('/UserFavoriteItems/' + itemID).then((res) => resolve(res.data), (error) => reject(error));
    });
};
