import { Dimensions } from "react-native";

const width: number = Dimensions.get("window").width;
const height: number = Dimensions.get("window").height;

export interface IDimensions {
  window: {
    width: number;
    height: number;
  };
  isSmallDevice: boolean;
}

const dimensions: IDimensions = {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375
};

export default dimensions;
