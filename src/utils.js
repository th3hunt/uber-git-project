export function reverse(sentence) {
  if (!sentence) {
    throw new Error('reverse expects a sentence as string');
  }
  return sentence.split(' ').reverse().join(' ');
}

export function capitalize(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

export function palindrome(str) {
  const re = /[\W_]/g; // or const re = /[^A-Za-z0-9]/g;
  const lowRegStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}

export function isEmpty(str) {
  return str === null || str === undefined
    ? true
    : /^[\s\xa0]*$/.test(str);
}
