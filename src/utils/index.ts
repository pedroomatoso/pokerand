export function toTitleCase(string: string): string {
  const words = string.split(" ");

  return words.map(word => {
      return word[0].toUpperCase() + word.substring(1);
  }).join(" ");
}

export function randInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}