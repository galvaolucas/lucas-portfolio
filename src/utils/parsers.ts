export const parseDate = (date: string): string => {
  const splitCharacter = date.indexOf('T');
  return date.substring(0, splitCharacter);
}