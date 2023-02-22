import { useRef } from "react";
import { Animated, Text, Easing } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
export const MultiplySquare = () => {
  const scale = useRef(new Animated.Value(0)).current;
  const startScaleAnimation = () => {
    Animated.timing(scale, {
      toValue: -300, //Use negitive numbers to lift animation, positive to drop.
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scale, {
        toValue: 0,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    });
  };

  const newAnimation = Animated.multiply(scale, 5);
  return (
    <TouchableWithoutFeedback onPress={startScaleAnimation}>
      <Animated.View
        style={{
          backgroundColor: "papayawhip",
          flexDirection: "row",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
          transform: [
            {
              translateY: scale, //Use translateX to move left > right
            },
          ],
        }}
      >
        <Text style={{ color: "black" }}>{"MULTIPLY"}</Text>
      </Animated.View>
      <Animated.View
        style={{
          backgroundColor: "papayawhip",
          flexDirection: "row",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",

          transform: [
            {
              translateY: newAnimation, //Use translateX to move left > right
            },
          ],
        }}
      >
        <Text style={{ color: "black", padding: 2 }}>
          {"Animation multipied by 5"}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
