export const lyrics = (client, itemID) => {
    return new Promise((resolve, reject) => {
        client.client.get('/Audio/' + itemID + '/Lyrics').then((res) => resolve(res.data), (error) => reject(error));
    });
};
