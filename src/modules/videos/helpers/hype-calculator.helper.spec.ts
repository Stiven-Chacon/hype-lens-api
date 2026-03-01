import { calculateHypeLevel } from './hype-calculator.helper';
import { YoutubeVideoItem } from '../interfaces/youtube-api.interface';

const baseItem: YoutubeVideoItem = {
  id: 'vid_001',
  snippet: {
    title: 'Mi video',
    channelTitle: 'MiCanal',
    publishedAt: '2026-01-01T00:00:00Z',
    thumbnails: { high: { url: 'https://example.com/thumb.jpg' } },
  },
  statistics: {
    viewCount:    '1000',
    likeCount:    '100',
    commentCount: '50',
  },
};

describe('calculateHypeLevel', () => {
  it('debe calcular el hype base correctamente', () => {
    // (100 + 50) / 1000 = 0.15
    expect(calculateHypeLevel(baseItem)).toBe(0.15);
  });

  it('debe multiplicar por 2 si el título contiene "Tutorial"', () => {
    const item = { ...baseItem, snippet: { ...baseItem.snippet, title: 'Tutorial de NestJS' } };
    // (100 + 50) / 1000 * 2 = 0.3
    expect(calculateHypeLevel(item)).toBe(0.3);
  });

  it('debe ser case-insensitive para "tutorial"', () => {
    const item = { ...baseItem, snippet: { ...baseItem.snippet, title: 'TUTORIAL avanzado' } };
    expect(calculateHypeLevel(item)).toBe(0.3);
  });

  it('debe devolver 0 si commentCount está ausente', () => {
    const { commentCount, ...statsWithout } = baseItem.statistics;
    const item = { ...baseItem, statistics: statsWithout as typeof baseItem.statistics };
    expect(calculateHypeLevel(item)).toBe(0);
  });

  it('debe devolver 0 si las vistas son 0 (evita división por cero)', () => {
    const item = { ...baseItem, statistics: { ...baseItem.statistics, viewCount: '0' } };
    expect(calculateHypeLevel(item)).toBe(0);
  });

  it('debe devolver 0 en tutorial SIN comentarios', () => {
    const { commentCount, ...statsWithout } = baseItem.statistics;
    const item = {
      ...baseItem,
      snippet:    { ...baseItem.snippet, title: 'Tutorial sin comentarios' },
      statistics: statsWithout as typeof baseItem.statistics,
    };
    expect(calculateHypeLevel(item)).toBe(0);
  });

  it('debe parsear correctamente los strings numéricos de YouTube', () => {
    const item = {
      ...baseItem,
      statistics: { viewCount: '247331', likeCount: '37099', commentCount: '1854' },
    };
    // (37099 + 1854) / 247331 = 0.1575
    expect(calculateHypeLevel(item)).toBe(0.1575);
  });
});