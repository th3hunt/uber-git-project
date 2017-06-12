export function reverse(sentence) {
  if (!sentence) {
    throw new Error('reverse expects a sentence as string');
  }
  return sentence.split(' ').reverse().join(' ');
}
