export type VideoPlayerState = {
  videoId: number;
  videoSrc: string;
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
  isLoading: boolean;
};

export type PlayBtnDisplayed = "displayed" | "not-displayed";