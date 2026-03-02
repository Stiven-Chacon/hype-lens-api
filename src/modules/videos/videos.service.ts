import { Injectable } from '@nestjs/common';
import { YoutubeApiResponse, YoutubeVideoItem } from './interfaces/youtube-api.interface';
import { TransformedVideo } from './interfaces/transformed-video.interface';
import { calculateHypeLevel } from './helpers/hype-calculator.helper';
import { formatRelativeDate } from './helpers/date-formatter.helper';

const youtubeResponse: YoutubeApiResponse = require('./data/mock-youtube-api.json');

@Injectable()
export class VideosService {
  findAll(): TransformedVideo[] {
    return youtubeResponse.items.map((item) => this.transformItem(item));
  }

  private transformItem(item: YoutubeVideoItem): TransformedVideo {
    return {
      id:              item.id,
      title:           item.snippet.title,
      channelTitle:    item.snippet.channelTitle,
      thumbnailUrl:    item.snippet.thumbnails.high.url,
      views:           parseInt(item.statistics.viewCount, 10),
      likes:           parseInt(item.statistics.likeCount, 10),
      commentsEnabled: item.statistics.commentCount !== undefined
                         && item.statistics.commentCount !== null,
      hypeLevel:       calculateHypeLevel(item),
      publishedAt:     formatRelativeDate(item.snippet.publishedAt),
    };
  }
}