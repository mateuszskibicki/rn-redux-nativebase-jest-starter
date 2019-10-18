import { Dimensions } from "react-native";

const width: number = Dimensions.get("window").width;
const height: number = Dimensions.get("window").height;

const dimensions: any = {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375
};

export default dimensions;
