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
	isVideoReady: boolean;
};

export type VideoComment = {
	date: number;
	id: number;
	text: string;
	upvotes: number;
	user: string;
	video_id: number;
}

export type BtnDisplayed = "displayed" | "not-displayed";