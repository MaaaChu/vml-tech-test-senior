export type VideoData = {
	id: number,
	title: string,
	author: string,
	src: string
}

export type VideoPlayerState = {
  videoId: number;
  videoData: VideoData;
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
  isLoading: boolean;
};

export type PlayBtnDisplayed = "displayed" | "not-displayed";