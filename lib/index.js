import axios from "axios";

//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
};

//#endregion
//#region src/api/artists.ts
var artists_exports = {};
__export(artists_exports, {
	albumArtists: () => albumArtists,
	artists: () => artists
});
const artists = (client, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Artists", { params: {
			...params,
			UserId: client.user
		} }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const albumArtists = (client, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Artists/AlbumArtists", { params: {
			...params,
			UserId: client.user
		} }).then((res) => resolve(res.data), (error) => reject(error));
	});
};

//#endregion
//#region src/api/audio.ts
var audio_exports = {};
__export(audio_exports, { lyrics: () => lyrics });
const lyrics = (client, itemID) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Audio/" + itemID + "/Lyrics").then((res) => resolve(res.data), (error) => reject(error));
	});
};

//#endregion
//#region src/api/items.ts
var items_exports = {};
__export(items_exports, {
	items: () => items$1,
	latest: () => latest,
	playbackInfo: () => playbackInfo
});
const items$1 = (client, itemID, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Items/" + itemID, { params: {
			...params,
			UserId: client.user
		} }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const playbackInfo = (client, itemID, payload, params) => {
	return new Promise((resolve, reject) => {
		client.client.post("/Items/" + itemID + "/PlaybackInfo", {
			...payload,
			UserId: client.user
		}, { params }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const latest = (client, parentID, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Items/Latest", { params: {
			...params,
			UserId: client.user,
			ParentId: parentID
		} }).then((res) => resolve(res.data), (error) => reject(error));
	});
};

//#endregion
//#region src/api/playlists.ts
var playlists_exports = {};
__export(playlists_exports, {
	add: () => add,
	create: () => create,
	playlists: () => playlists,
	remove: () => remove,
	user: () => user
});
const playlists = (client, itemID, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Playlists/" + itemID + "/Items", { params: {
			...params,
			UserId: client.user
		} }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const user = (client, playlistID) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Playlists/" + playlistID + "/Users/" + client.user).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const add = (client, playlistID, itemIDs) => {
	return new Promise((resolve, reject) => {
		client.client.post("/Playlists/" + playlistID + "/Items", null, { params: {
			ids: itemIDs.join(","),
			userId: client.user
		} }).then((res) => resolve(), (error) => reject(error));
	});
};
const remove = (client, playlistID, itemIDs) => {
	return new Promise((resolve, reject) => {
		client.client.delete("/Playlists/" + playlistID + "/Items", { params: { entryIds: itemIDs.join(",") } }).then((res) => resolve(), (error) => reject(error));
	});
};
const create = (client, name, itemIDs, isPublic) => {
	return new Promise((resolve, reject) => {
		client.client.post("/Playlists", { params: {
			Name: name,
			Ids: itemIDs.join(","),
			UserId: client.user,
			IsPublic: isPublic
		} }).then((res) => resolve(), (error) => reject(error));
	});
};

//#endregion
//#region src/api/sessions.ts
var sessions_exports = {};
__export(sessions_exports, {
	playState: () => playState,
	playing: () => playing,
	playingProgress: () => playingProgress,
	playingStopped: () => playingStopped,
	sessions: () => sessions
});
const sessions = (client, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Sessions", { params }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const playing = (client, payload) => {
	return new Promise((resolve, reject) => {
		client.client.post("/Sessions/Playing", payload).then((res) => resolve(), (error) => reject(error));
	});
};
const playingProgress = (client, payload) => {
	return new Promise((resolve, reject) => {
		client.client.post("/Sessions/Playing/Progress", payload).then((res) => resolve(), (error) => reject(error));
	});
};
const playingStopped = (client, payload) => {
	return new Promise((resolve, reject) => {
		client.client.post("/Sessions/Playing/Stopped", payload).then((res) => resolve(), (error) => reject(error));
	});
};
const playState = (client, sessionID, command) => {
	return new Promise((resolve, reject) => {
		client.client.post("/Sessions/" + sessionID + "/Playing/" + command).then((res) => resolve(), (error) => reject(error));
	});
};

//#endregion
//#region src/api/shows.ts
var shows_exports = {};
__export(shows_exports, {
	episodes: () => episodes,
	nextup: () => nextup,
	seasons: () => seasons,
	upcoming: () => upcoming
});
const episodes = (client, itemID, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Shows/" + itemID + "/Episodes", { params: {
			...params,
			UserId: client.user
		} }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const seasons = (client, itemID, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Shows/" + itemID + "/Seasons", { params: {
			...params,
			UserId: client.user
		} }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const nextup = (client, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Shows/Nextup", { params: {
			...params,
			UserId: client.user
		} }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const upcoming = (client, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Shows/Upcoming", { params: {
			...params,
			UserId: client.user
		} }).then((res) => resolve(res.data), (error) => reject(error));
	});
};

//#endregion
//#region src/api/system.ts
var system_exports = {};
__export(system_exports, {
	info: () => info,
	infoPublic: () => infoPublic
});
const info = (client) => {
	return new Promise((resolve, reject) => {
		client.client.get("/System/Info").then((res) => resolve(res.data), (error) => reject(error));
	});
};
const infoPublic = (server) => {
	return new Promise((resolve, reject) => {
		axios.get("/System/Info/Public", { baseURL: server }).then((res) => resolve(res.data), (error) => reject(error));
	});
};

//#endregion
//#region src/api/users.ts
var users_exports = {};
__export(users_exports, {
	authenticateByName: () => authenticateByName,
	favoriteItems: () => favoriteItems,
	favoriteItemsDel: () => favoriteItemsDel,
	items: () => items,
	itemsResume: () => itemsResume,
	localTrailers: () => localTrailers,
	playedItems: () => playedItems,
	playedItemsDel: () => playedItemsDel,
	singleItem: () => singleItem,
	specialFeatures: () => specialFeatures,
	views: () => views
});
const authenticateByName = (server, username, password, clientName, deviceName, deviceID, version) => {
	const auth = "MediaBrowser Client=\"" + clientName + "\", Device=\"" + deviceName + "\", DeviceId=\"" + deviceID + "\", Version=\"" + version + "\"";
	return new Promise((resolve, reject) => {
		axios.post("/Users/AuthenticateByName", {
			Username: username,
			Pw: password
		}, {
			baseURL: server,
			headers: { Authorization: auth }
		}).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const views = (client) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Users/" + client.user + "/Views").then((res) => resolve(res.data), (error) => reject(error));
	});
};
const items = (client, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Users/" + client.user + "/Items", { params }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const itemsResume = (client, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Users/" + client.user + "/Items/Resume", { params }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const singleItem = (client, itemID) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Users/" + client.user + "/Items/" + itemID).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const specialFeatures = (client, itemID, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Users/" + client.user + "/Items/" + itemID + "/SpecialFeatures", { params }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const localTrailers = (client, itemID, params) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Users/" + client.user + "/Items/" + itemID + "/LocalTrailers", { params }).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const playedItems = (client, itemID) => {
	return new Promise((resolve, reject) => {
		client.client.post("/Users/" + client.user + "/PlayedItems/" + itemID).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const playedItemsDel = (client, itemID) => {
	return new Promise((resolve, reject) => {
		client.client.delete("/Users/" + client.user + "/PlayedItems/" + itemID).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const favoriteItems = (client, itemID) => {
	return new Promise((resolve, reject) => {
		client.client.post("/UserFavoriteItems/" + itemID).then((res) => resolve(res.data), (error) => reject(error));
	});
};
const favoriteItemsDel = (client, itemID) => {
	return new Promise((resolve, reject) => {
		client.client.delete("/UserFavoriteItems/" + itemID).then((res) => resolve(res.data), (error) => reject(error));
	});
};

//#endregion
//#region src/api/other.ts
var other_exports = {};
__export(other_exports, { introTimestamps: () => introTimestamps });
const introTimestamps = (client, itemID) => {
	return new Promise((resolve, reject) => {
		client.client.get("/Episode/" + itemID + "/IntroSkipperSegments").then((res) => resolve(res.data), (error) => reject(error));
	});
};

//#endregion
export { artists_exports as artists, audio_exports as audio, items_exports as items, other_exports as other, playlists_exports as playlists, sessions_exports as sessions, shows_exports as shows, system_exports as system, users_exports as users };