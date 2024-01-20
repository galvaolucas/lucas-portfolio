export const parseDate = (date: string): string => {
  const splitCharacter = date.indexOf('T');
  const period = date.substring(0, splitCharacter);
  return period.split('-').reverse().join('/');
}