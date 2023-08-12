export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const numberOfWords = content.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}

export function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
}