import Client from '../types/Client';
import { IntroSegments } from '../types/other/IntroTimestamps';
export declare const introTimestamps: (client: Client, itemID: string) => Promise<IntroSegments>;
