export const episodes = (client, itemID, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Shows/' + itemID + '/Episodes', {
            params: { ...params, UserId: client.user },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const seasons = (client, itemID, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Shows/' + itemID + '/Seasons', {
            params: { ...params, UserId: client.user },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const nextup = (client, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Shows/Nextup', {
            params: { ...params, UserId: client.user },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const upcoming = (client, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Shows/Upcoming', {
            params: { ...params, UserId: client.user },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
