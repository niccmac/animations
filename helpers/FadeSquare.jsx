import { useRef } from "react";
import { Animated, Text, TouchableWithoutFeedback } from "react-native";

export const FadeSquare = () => {
  const fade = useRef(new Animated.Value(1)).current;
  const startFadeAnimation = () => {
    Animated.timing(fade, {
      toValue: 0.1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fade, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    });
  };
  return (
    <TouchableWithoutFeedback onPressIn={startFadeAnimation}>
      <Animated.View
        style={{
          backgroundColor: "blue",
          flexDirection: "row",
          height: 100,
          width: 100,
          opacity: fade,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>FADE</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
