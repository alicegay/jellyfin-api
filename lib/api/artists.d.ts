import Client from '../types/Client';
import ItemsList from '../types/media/ItemsList';
import ItemsQuery from '../types/queries/ItemsQuery';
export declare const artists: (client: Client, params?: ItemsQuery) => Promise<ItemsList>;
export declare const albumArtists: (client: Client, params?: ItemsQuery) => Promise<ItemsList>;
