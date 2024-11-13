export const introTimestamps = (client, itemID) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Episode/' + itemID + '/IntroSkipperSegments')
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
