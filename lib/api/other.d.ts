import Client from '../types/Client';
import { IntroSegments, MediaSegments } from '../types/other/IntroTimestamps';
export declare const introTimestamps: (client: Client, itemID: string) => Promise<IntroSegments>;
export declare const mediaSegments: (client: Client, itemID: string) => Promise<MediaSegments>;
