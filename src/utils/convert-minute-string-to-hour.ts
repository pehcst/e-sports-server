// this function transform minute in hours like
// 1100 -> 18:20

export function convertMinuteStringToHours(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`

}