import { useRef } from "react";
import { Animated, Text, TouchableWithoutFeedback } from "react-native";

export const RotateSquares = () => {
  const rotate = useRef(new Animated.Value(0)).current;
  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });
  const startRotateAnimation = () => {
    Animated.timing(rotate, {
      toValue: 360,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(rotate, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
  };
  return (
    <>
      <TouchableWithoutFeedback onPressIn={startRotateAnimation}>
        <Animated.View
          style={{
            backgroundColor: "fuchsia",
            flexDirection: "row",
            height: 100,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            transform: [{ rotate: rotateInterpolate }],
          }}
        >
          <Text style={{ color: "black" }}>{"ROTATE"}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPressIn={startRotateAnimation}>
        <Animated.View
          style={{
            backgroundColor: "lightsalmon",
            flexDirection: "row",
            height: 100,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            transform: [{ rotateX: rotateInterpolate }],
          }}
        >
          <Text style={{ color: "black" }}>{"ROTATE X"}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPressIn={startRotateAnimation}>
        <Animated.View
          style={{
            backgroundColor: "saddlebrown",
            flexDirection: "row",
            height: 100,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            transform: [{ rotateY: rotateInterpolate }],
          }}
        >
          <Text style={{ color: "black" }}>{"ROTATE Y"}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};
