import Client from '../types/Client';
import InfoPublic from '../types/system/InfoPublic';
export declare const info: (client: Client) => Promise<InfoPublic>;
export declare const infoPublic: (server: string) => Promise<InfoPublic>;
