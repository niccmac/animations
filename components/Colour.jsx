import { useRef } from "react";
import { Animated, Text, TouchableWithoutFeedback } from "react-native";

export const ColourSquare = () => {
  const animatedColour = useRef(new Animated.Value(0)).current;
  const boxInterpolation = animatedColour.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(154,205,50)", "rgb(255,0,0)"],
  });

  const startColourAnimation = () => {
    Animated.timing(animatedColour, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animatedColour, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    });
  };
  return (
    <TouchableWithoutFeedback onPressIn={startColourAnimation}>
      <Animated.View
        style={{
          backgroundColor: boxInterpolation,
          flexDirection: "row",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>{"COLOUR INTERPOLATION"}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
