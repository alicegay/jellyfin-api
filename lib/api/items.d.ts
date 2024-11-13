import Client from '../types/Client';
import ItemsQuery from '../types/queries/ItemsQuery';
import Item from '../types/media/Item';
import PlaybackInfo from '../types/media/PlaybackInfo';
import PlaybackInfoQuery from '../types/queries/PlaybackInfoQuery';
export declare const items: (client: Client, itemID: string, params?: ItemsQuery) => Promise<Item>;
export declare const playbackInfo: (client: Client, itemID: string, payload: PlaybackInfoQuery, params?: ItemsQuery) => Promise<PlaybackInfo>;
export declare const latest: (client: Client, parentID: string, params?: ItemsQuery) => Promise<Item[]>;
