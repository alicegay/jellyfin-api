import Client from '../types/Client';
import ItemsQuery from '../types/queries/ItemsQuery';
import Session from '../types/sessions/Session';
import ProgressQuery, { ProgressStoppedQuery } from '../types/queries/ProgressQuery';
export declare const sessions: (client: Client, params?: ItemsQuery) => Promise<Session[]>;
export declare const playing: (client: Client, payload: ProgressQuery) => Promise<void>;
export declare const playingProgress: (client: Client, payload: ProgressQuery) => Promise<void>;
export declare const playingStopped: (client: Client, payload: ProgressStoppedQuery) => Promise<void>;
export declare const playState: (client: Client, sessionID: string, command: "Stop" | "Pause" | "Unpause" | "NextTrack" | "PreviousTrack" | "Seek" | "Rewind" | "FastForward" | "PlayPause") => Promise<void>;
