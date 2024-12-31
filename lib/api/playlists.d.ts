import Client from '../types/Client';
import ItemsList from '../types/media/ItemsList';
import ItemsQuery from '../types/queries/ItemsQuery';
import PlaylistUser from '../types/playlists/PlaylistUser';
export declare const playlists: (client: Client, itemID: string, params?: ItemsQuery) => Promise<ItemsList>;
export declare const user: (client: Client, playlistID: string) => Promise<PlaylistUser>;
export declare const add: (client: Client, playlistID: string, itemIDs: string[]) => Promise<void>;
export declare const remove: (client: Client, playlistID: string, itemIDs: string[]) => Promise<void>;
export declare const create: (client: Client, name: string, itemIDs: string[], isPublic: boolean) => Promise<void>;
