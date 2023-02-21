import { useRef } from "react";
import { Animated, Easing, Text, TouchableWithoutFeedback } from "react-native";

export const SpringSquare = () => {
  const absolutePosition = useRef(new Animated.Value(0)).current;
  const startAbsolutePositionAnimation = () => {
    Animated.timing(absolutePosition, {
      toValue: 150,
      duration: 500,

      useNativeDriver: false,
    }).start(() => {
      Animated.timing(absolutePosition, {
        toValue: 0,
        duration: 3000,

        useNativeDriver: false,
      }).start();
    });
  };
  return (
    <TouchableWithoutFeedback onPressIn={startAbsolutePositionAnimation}>
      <Animated.View
        style={{
          backgroundColor: "olivedrab",
          flexDirection: "row",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          top: absolutePosition,
          left: absolutePosition,
        }}
      >
        <Text style={{ color: "white" }}>{"ABSOLUTE POSITION"}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
