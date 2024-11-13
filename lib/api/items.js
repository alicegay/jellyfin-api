export const items = (client, itemID, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Items/' + itemID, {
            params: { ...params, UserId: client.user },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const playbackInfo = (client, itemID, payload, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .post('/Items/' + itemID + '/PlaybackInfo', { ...payload, UserId: client.user }, {
            params: params,
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const latest = (client, parentID, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Items/Latest', {
            params: { ...params, UserId: client.user, ParentId: parentID },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
