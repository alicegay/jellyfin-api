import Client from '../types/Client';
import ItemsList from '../types/media/ItemsList';
import ItemsQuery from '../types/queries/ItemsQuery';
export declare const episodes: (client: Client, itemID: string, params?: ItemsQuery) => Promise<ItemsList>;
export declare const seasons: (client: Client, itemID: string, params?: ItemsQuery) => Promise<ItemsList>;
export declare const nextup: (client: Client, params?: ItemsQuery) => Promise<ItemsList>;
export declare const upcoming: (client: Client, params?: ItemsQuery) => Promise<ItemsList>;
