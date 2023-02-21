import { useRef } from "react";
import { Animated, Easing, Text, TouchableWithoutFeedback } from "react-native";
export const Scale = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const startScaleAnimation = () => {
    Animated.timing(scale, {
      toValue: 2, //Use negitive numbers to lift animation, positive to drop.
      duration: 3000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scale, {
        toValue: 1,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    });
  };
  return (
    <TouchableWithoutFeedback onPressIn={startScaleAnimation}>
      <Animated.View
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          transform: [
            {
              scale: scale, //Use translateX to move left > right
            },
          ],
        }}
      >
        <Text style={{ color: "black" }}>{"SCALE"}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
