import colorsAll, { IColors } from "./styles/colors";
import shadowsAll from "./styles/shadows";
import fontAll, { IFont } from "./styles/font";

export const colors: IColors = { ...colorsAll };
export const shadows = { ...shadowsAll };
export const font: IFont = { ...fontAll };

export default {
  colors: colorsAll,
  shadows,
  font
};
