import { formatRelativeDate } from './date-formatter.helper';

function dateAgo(
  value: number,
  unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years',
): string {
  const ms = {
    seconds: value * 1000,
    minutes: value * 60 * 1000,
    hours:   value * 60 * 60 * 1000,
    days:    value * 24 * 60 * 60 * 1000,
    months:  value * 30 * 24 * 60 * 60 * 1000,
    years:   value * 365 * 24 * 60 * 60 * 1000,
  };
  return new Date(Date.now() - ms[unit]).toISOString();
}

describe('formatRelativeDate', () => {
  it('debe retornar "Hace unos momentos"', () => expect(formatRelativeDate(dateAgo(30, 'seconds'))).toBe('Hace unos momentos'));
  it('debe retornar "Hace 1 minuto"',      () => expect(formatRelativeDate(dateAgo(1,  'minutes'))).toBe('Hace 1 minuto'));
  it('debe retornar "Hace 15 minutos"',    () => expect(formatRelativeDate(dateAgo(15, 'minutes'))).toBe('Hace 15 minutos'));
  it('debe retornar "Hace 1 hora"',        () => expect(formatRelativeDate(dateAgo(1,  'hours'))).toBe('Hace 1 hora'));
  it('debe retornar "Hace 1 día"',         () => expect(formatRelativeDate(dateAgo(1,  'days'))).toBe('Hace 1 día'));
  it('debe retornar "Hace 5 días"',        () => expect(formatRelativeDate(dateAgo(5,  'days'))).toBe('Hace 5 días'));
  it('debe retornar "Hace 1 mes"',         () => expect(formatRelativeDate(dateAgo(1,  'months'))).toBe('Hace 1 mes'));
  it('debe retornar "Hace 2 meses"',       () => expect(formatRelativeDate(dateAgo(2,  'months'))).toBe('Hace 2 meses'));
  it('debe retornar "Hace 1 año"',         () => expect(formatRelativeDate(dateAgo(1,  'years'))).toBe('Hace 1 año'));
  it('debe retornar "Hace 3 años"',        () => expect(formatRelativeDate(dateAgo(3,  'years'))).toBe('Hace 3 años'));
});