import { useRef } from "react";
import { Animated, Text, Easing } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
export const ModuloSquare = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const startScaleAnimation = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 12, //Use negitive numbers to lift animation, positive to drop.
        duration: 3000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(scale, {
          toValue: 0,
          duration: 3000,
          easing: Easing.bounce,
          useNativeDriver: true,
        }).start();
      }),
    ]).start();
  };

  const newAnimation = Animated.modulo(scale, 3);
  const interpolation = newAnimation.interpolate({
    inputRange: [0, 3],
    outputRange: ["0deg", "270deg"],
  });
  const rotateInterpolate = scale.interpolate({
    inputRange: [0, 3],
    outputRange: ["0deg", "270deg"],
  });
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
              rotate: interpolation, //Use translateX to move left > right
            },
          ],
        }}
      >
        <Text style={{ color: "black" }}>{"MODULO"}</Text>
      </Animated.View>
      <Animated.View
        style={{
          backgroundColor: "papayawhip",
          flexDirection: "row",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",

          transform: [{ rotateY: rotateInterpolate }],
        }}
      >
        <Text style={{ color: "black", padding: 2 }}>
          {"Animation speed changed"}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
