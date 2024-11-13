export const sessions = (client, params) => {
    return new Promise((resolve, reject) => {
        client.client
            .get('/Sessions', {
            params: params,
        })
            .then((res) => resolve(res.data), (error) => reject(error));
    });
};
export const playing = (client, payload) => {
    return new Promise((resolve, reject) => {
        client.client.post('/Sessions/Playing', payload).then((res) => resolve(), (error) => reject(error));
    });
};
export const playingProgress = (client, payload) => {
    return new Promise((resolve, reject) => {
        client.client.post('/Sessions/Playing/Progress', payload).then((res) => resolve(), (error) => reject(error));
    });
};
export const playingStopped = (client, payload) => {
    return new Promise((resolve, reject) => {
        client.client.post('/Sessions/Playing/Stopped', payload).then((res) => resolve(), (error) => reject(error));
    });
};
export const playState = (client, sessionID, command) => {
    return new Promise((resolve, reject) => {
        client.client
            .post('/Sessions/' + sessionID + '/Playing/' + command)
            .then((res) => resolve(), (error) => reject(error));
    });
};
