export function capitalizeWord(str: string) {
  const capitalize = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return capitalize;
}

export function formatDateString(str: string) {
  const output = str
    .replace(/^(\w+)/, (w) => w.charAt(0).toUpperCase() + w.slice(1))
    .replace(/(am|pm)$/i, (s) => s.toUpperCase());

  return output;
}
