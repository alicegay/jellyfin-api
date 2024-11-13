export const playlists = (client, itemID, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Playlists/' + itemID + '/Items', {
            params: { ...params, UserId: client.user },
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const user = (client, playlistID) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Playlists/' + playlistID + '/Users/' + client.user)
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const add = (client, playlistID, itemIDs) => {
    return new Promise((resolve, reject) => {
        client.client
            .post('/Playlists/' + playlistID + '/Items', null, {
            params: { ids: itemIDs.join(','), userId: client.user },
        })
            .then((res) => resolve(res), (error) => reject(error));
    });
};
export const remove = (client, playlistID, itemIDs) => {
    return new Promise((resolve, reject) => {
        client.client
            .delete('/Playlists/' + playlistID + '/Items', {
            params: { entryIds: itemIDs.join(',') },
        })
            .then((res) => resolve(res), (error) => reject(error));
    });
};
export const create = (client, name, itemIDs, isPublic) => {
    return new Promise((resolve, reject) => {
        client.client
            .post('/Playlists', {
            params: {
                Name: name,
                Ids: itemIDs.join(','),
                UserId: client.user,
                IsPublic: isPublic,
            },
        })
            .then((res) => resolve(res), (error) => reject(error));
    });
};
