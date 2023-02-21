import { useRef } from "react";
import { Animated, Text, TouchableWithoutFeedback, Easing } from "react-native";

export const TranslatePosition = () => {
  const translatePosition = useRef(new Animated.Value(0)).current;
  const startTranslatePositionAnimation = () => {
    Animated.timing(translatePosition, {
      toValue: 150, //Use negitive numbers to lift animation, positive to drop.
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(translatePosition, {
        toValue: 0,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <>
      <TouchableWithoutFeedback onPressIn={startTranslatePositionAnimation}>
        <Animated.View
          style={{
            backgroundColor: "pink",
            flexDirection: "row",
            height: 100,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            transform: [
              {
                translateY: translatePosition, //Use translateX to move left > right
              },
            ],
          }}
        >
          <Text style={{ color: "white" }}>TRANSLATE POSITION ˅ ^</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPressIn={startTranslatePositionAnimation}>
        <Animated.View
          style={{
            backgroundColor: "yellow",
            flexDirection: "row",
            height: 100,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            transform: [
              {
                translateX: translatePosition, //Use translateX to move left > right
              },
            ],
          }}
        >
          <Text style={{ color: "black" }}>{"TRANSLATE POSITION > < "}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};
