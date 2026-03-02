/**
* Transforms an ISO date into user-friendly Spanish text.
* Restriction: Native JavaScript only, no external libraries.
* 
* Examples:
* "2 months ago"
* "5 days ago"
* "1 year ago"
* "A few moments ago"
*/
export function formatRelativeDate(isoDate: string): string {
  const now          = new Date();
  const publishedDate = new Date(isoDate);
  const diffMs       = now.getTime() - publishedDate.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours   / 24);
  const months  = Math.floor(days    / 30);
  const years   = Math.floor(days    / 365);

  if (years   >= 1) return years   === 1 ? 'Hace 1 año'    : `Hace ${years} años`;
  if (months  >= 1) return months  === 1 ? 'Hace 1 mes'    : `Hace ${months} meses`;
  if (days    >= 1) return days    === 1 ? 'Hace 1 día'    : `Hace ${days} días`;
  if (hours   >= 1) return hours   === 1 ? 'Hace 1 hora'   : `Hace ${hours} horas`;
  if (minutes >= 1) return minutes === 1 ? 'Hace 1 minuto' : `Hace ${minutes} minutos`;

  return 'Hace unos momentos';
}