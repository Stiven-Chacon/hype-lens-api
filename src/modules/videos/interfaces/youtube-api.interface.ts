export interface YoutubeApiResponse {
  kind: string;
  items: YoutubeVideoItem[];
}

export interface YoutubeVideoItem {
  id: string;
  snippet: YoutubeSnippet;
  statistics: YoutubeStatistics;
}

export interface YoutubeSnippet {
  title: string;
  channelTitle: string;
  publishedAt: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
}

export interface YoutubeStatistics {
  viewCount: string;
  likeCount: string;
  commentCount?: string;
}