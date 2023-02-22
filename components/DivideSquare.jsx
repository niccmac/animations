import { useRef } from "react";
import { Animated, Text, Easing } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
export const DivideSquare = () => {
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
  //Start

  //Values
  // const offset = new Animated.Value(2);
  // const otherNumber = new Animated.Value(1);
  // //"Add" valuse to position
  // const positionWithOffset = Animated.add(scale, offset);
  // const positionOffsetWithRandomNumber = Animated.add(
  //   positionWithOffset,
  //   otherNumber
  // );
  const newAnimation = Animated.divide(scale, 5);
  return (
    <TouchableWithoutFeedback onPress={startScaleAnimation}>
      <Animated.View
        style={{
          backgroundColor: "wheat",
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
        <Text style={{ color: "black" }}>{"DIVIDE"}</Text>
      </Animated.View>
      <Animated.View
        style={{
          backgroundColor: "wheat",
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
          {"Wow, this is 5% lower"}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
