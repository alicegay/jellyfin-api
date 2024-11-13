export const artists = (client, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Artists', {
            params: { ...params, UserId: client.user },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const albumArtists = (client, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Artists/AlbumArtists', {
            params: { ...params, UserId: client.user },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
