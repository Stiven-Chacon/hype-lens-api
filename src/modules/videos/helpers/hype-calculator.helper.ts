import { YoutubeVideoItem } from '../interfaces/youtube-api.interface';

/**
* Calculates the Hype Level of a video based on business rules.

* Rules:
* 1. If comments are disabled (property missing) → Hype = 0
* 2. Base formula: (likes + comments) / views
* 3. If the title contains "tutorial" (case-insensitive) → Final Hype × 2
* Note: YouTube returns all counters as strings → they are parsed to numbers.
*/

export function calculateHypeLevel(item: YoutubeVideoItem): number {
  const { statistics, snippet } = item;

  const commentsDisabled =
    statistics.commentCount === undefined || statistics.commentCount === null;

  if (commentsDisabled) return 0;

  const views    = parseInt(statistics.viewCount,    10);
  const likes    = parseInt(statistics.likeCount,    10);
  const comments = parseInt(statistics.commentCount ?? '0', 10);

  if (views === 0) return 0;

  const baseHype   = (likes + comments) / views;
  const isTutorial = snippet.title.toLowerCase().includes('tutorial');
  const multiplier = isTutorial ? 2 : 1;

  return parseFloat((baseHype * multiplier).toFixed(4));
}