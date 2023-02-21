import { useRef } from "react";
import { Animated, Easing, Text, TouchableWithoutFeedback } from "react-native";

export const SpringSquare = () => {
  const spring = useRef(new Animated.Value(1)).current;
  const startSpringAnimation = () => {
    Animated.spring(spring, {
      toValue: 2,
      friction: 2,
      tension: 160,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(spring, {
        toValue: 1,
        friction: 2,
        tension: 160,
        useNativeDriver: true,
      }).start();
    });
  };
  return (
    <TouchableWithoutFeedback onPressIn={startSpringAnimation}>
      <Animated.View
        style={{
          backgroundColor: "olivedrab",
          flexDirection: "row",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ scale: spring }],
        }}
      >
        <Text style={{ color: "white" }}>{"SPRING"}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
