import Client from '../types/Client';
import Lyrics from '../types/media/Lyrics';
export declare const lyrics: (client: Client, itemID: string) => Promise<Lyrics>;
