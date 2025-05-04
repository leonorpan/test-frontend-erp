export function formatCurrency(num: number): string {
  if (num < 1000) {
    return `${num}`;
  } else if (num < 1_000_000) {
    return `${Math.round(num / 1000)}k`;
  } else {
    return `${Math.round(num / 1_000_000)}M`;
  }
}
