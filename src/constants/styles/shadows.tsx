export interface ISingleShadow {
  shadowColor: String;
  shadowOffset: {
    width: Number;
    height: Number;
  };
  shadowOpacity: Number;
  shadowRadius: Number;
  elevation: Number;
}

const smallShadow: ISingleShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.15,
  shadowRadius: 3.5,
  elevation: 5
};

const shadow: ISingleShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation: 7
};

const bigShadow: ISingleShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 24
};

export default {
  smallShadow,
  shadow,
  bigShadow
};
