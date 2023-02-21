import { useRef, useState } from "react";
import { Animated, Easing, Text, TouchableWithoutFeedback } from "react-native";

export const LoopSquare = () => {
  const [loopToggle, setLoopToggle] = useState(false);
  const looping = useRef(new Animated.Value(0)).current;
  const startLoopingAnimation = () => {
    if (!loopToggle) {
      Animated.loop(
        Animated.timing(looping, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        })
      ).start();
      setLoopToggle(true);
    }
    Animated.loop().stop;
    setLoopToggle(false);
  };
  const interpolated = looping.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <TouchableWithoutFeedback onPressIn={startLoopingAnimation}>
      <Animated.View
        style={{
          backgroundColor: "lightseagreen",
          flexDirection: "row",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          transform: [
            {
              rotate: interpolated,
            },
          ],
        }}
      >
        <Text style={{ color: "white" }}>{"LOOP"}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
