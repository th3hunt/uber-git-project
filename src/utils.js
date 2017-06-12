export function reverse(sentence) {
  if (!sentence) {
    throw new Error('reverse expects a sentence as string');
  }
  return sentence.split(' ').reverse().join(' ');
}

export function capitalize(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}
