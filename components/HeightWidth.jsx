import { useRef } from "react";
import { Animated, Text, TouchableWithoutFeedback } from "react-native";

export const HeightWidth = () => {
  const heightWidth = useRef(new Animated.Value(100)).current;
  const startHeightWidthAnimation = () => {
    Animated.timing(heightWidth, {
      toValue: 20,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(heightWidth, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    });
  };
  return (
    <TouchableWithoutFeedback onPressIn={startHeightWidthAnimation}>
      <Animated.View
        style={{
          backgroundColor: "orange",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: heightWidth,
          width: heightWidth,
        }}
      >
        <Text style={{ color: "black" }}>{"HEIGHT & WIDTH"}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
