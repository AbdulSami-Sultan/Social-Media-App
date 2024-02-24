export const getFontFamily = (baseFont = 'Inter', weight) => {
  switch (weight) {
    case '100':
      return `${baseFont}-Thin`;
    case '200':
      return `${baseFont}-Light`;
    case '300':
      return `${baseFont}-Regular`;
    case '400':
      return `${baseFont}-Medium`;
    case '500':
      return `${baseFont}-SemiBold`;
    case '600':
      return `${baseFont}-Bold`;
    case '700':
      return `${baseFont}-ExtraBold`;
    case '800':
      return `${baseFont}-Thin`;
    case '900':
      return `${baseFont}-Thin`;
  }
};
