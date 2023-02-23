import { useRef, useState } from "react";
import { Animated, Easing, Text, TouchableWithoutFeedback } from "react-native";

export const ParallelSquare = () => {
  const colourAnimation = useRef(new Animated.Value(0)).current;
  const interpolatedColour = colourAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(220,20,60)", "rgb(184,134,11)"],
  });
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const startParallelAnimation = () => {
    Animated.parallel([
      Animated.timing(colourAnimation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(colourAnimation, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }).start();
      }),
      Animated.timing(scaleAnimation, {
        toValue: 2, //Use negitive numbers to lift animation, positive to drop.
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(scaleAnimation, {
          toValue: 1,
          duration: 3000,
          easing: Easing.bounce,
          useNativeDriver: true,
        }).start();
      }),
    ]);
  };
  // Animated.parallel([
  //   Animated.timing(colourAnimation, {
  //     toValue: 0,
  //     duration: 3000,
  //     useNativeDriver: true,
  //   }),
  //   // Animated.timing(scaleAnimation, {
  //   //   toValue: 1,
  //   //   duration: 200,
  //   //   useNativeDriver: true,
  //   // }),
  // ]).start();
  // .start(() => {
  //   Animated.timing(colourAnimation, {
  //     toValue: 0,
  //     duration: 3000,
  //     useNativeDriver: false,
  //   });
  // });
  // };

  return (
    <TouchableWithoutFeedback onPressIn={startParallelAnimation}>
      <Animated.View
        style={{
          backgroundColor: interpolatedColour,
          flexDirection: "row",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          transform: [
            {
              scale: scaleAnimation,
            },
          ],
        }}
      >
        <Text style={{ color: "white" }}>{"LOOP"}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
