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
export type MediaSegments = {
    Items: {
        Id: string;
        ItemId: string;
        Type: 'Intro' | 'Outro' | 'Preview' | 'Recap' | 'Commercial';
        StartTicks: number;
        EndTicks: number;
    }[];
    TotalRecordCount: number;
    StartIndex: number;
};
export {};
