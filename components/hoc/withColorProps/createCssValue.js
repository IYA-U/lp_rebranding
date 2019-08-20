/**
 * テーマカラーと色名を受け、適切なCSSの色指定を返す関数
 */

export default ({ themeColors, colorName }) => {
  const covertDataToCss = (hsl) => `hsla(${hsl.hue},${hsl.saturation}%,${hsl.lightness}%,${
    hsl.alpha ? hsl.alpha : '1'
  })`;
  // console.log({ themeColors });
  // return {
  //   hue: 0,
  //   saturation: 0,
  //   lightness: 97,
  // };

  let hsl = {};
  switch (colorName) {
    // 特殊色キーワード指定
    case 'blackCover':
      hsl = {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 0.7,
      };
      break;

    case 'textBlack':
      hsl = {
        hue: 0,
        saturation: 0,
        lightness: 20,
      };
      break;

    case 'lightGray':
      hsl = {
        hue: 0,
        saturation: 0,
        lightness: 97,
      };
      break;

    case 'darkWeak':
      hsl = {
        hue: themeColors.dark.hue,
        saturation: themeColors.dark.saturation * 0.7,
        lightness: themeColors.dark.lightness * 0.7,
      };
      break;

    case 'darkdark':
      hsl = {
        hue: themeColors.dark.hue,
        saturation: themeColors.dark.saturation,
        lightness: themeColors.dark.lightness / 2,
      };
      break;

    // 基本四色をそのまま使う場合
    default:
      hsl = themeColors[colorName];
      break;
  }
  return covertDataToCss(hsl);
};
