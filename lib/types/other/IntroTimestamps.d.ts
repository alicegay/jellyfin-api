type IntroTimestamps = {
    EpisodeId: string;
    Valid: boolean;
    IntroStart: number;
    IntroEnd: number;
    ShowSkipPromptAt: number;
    HideSkipPromptAt: number;
};
export type IntroSegments = {
    Introduction: IntroTimestamps;
    Credits: IntroTimestamps;
};
export default IntroTimestamps;
