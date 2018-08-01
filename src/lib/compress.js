import LZString from 'lz-string';

const decimalToHex = d => {
  let hex = Number(d).toString(16);
  const padding = 2;

  while (hex.length < padding) {
    hex = `0${hex}`;
  }

  return hex;
};

const hexToDecimal = h => parseInt(h, 16);

export const compress = str =>
  LZString.compressToUint8Array(str).reduce(
    (acc, value) => `${acc}${decimalToHex(value)}`,
    '',
  );

export const decompress = str => {
  const compressed = str.match(/.{2}/g).map(hexToDecimal);
  return LZString.decompressFromUint8Array(compressed);
};
