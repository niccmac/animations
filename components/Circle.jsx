import React from "react";
import { View, Animated, StyleSheet, Easing } from "react-native";
import AnimatedMath from "react-native-animated-math";

export const Circle = () => {
  const circular = new Animated.Value(0);

  Animated.timing(circular, {
    toValue: 1 * 10 * Math.PI,
    duration: 4000,
    easing: Easing.bounce,
    useNativeDriver: true,
  }).start();

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.dot,
            {
              transform: [
                {
                  translateX: Animated.multiply(
                    AnimatedMath.sin(circular),
                    -150
                  ),
                },
                {
                  translateY: Animated.multiply(
                    AnimatedMath.cos(circular),
                    150
                  ),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot2,
            {
              transform: [
                {
                  translateX: Animated.multiply(
                    AnimatedMath.sin(circular),
                    100
                  ),
                },
                {
                  translateY: Animated.multiply(
                    AnimatedMath.cos(circular),
                    -100
                  ),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot2,
            {
              backgroundColor: "yellow",
              transform: [
                {
                  translateX: Animated.multiply(
                    AnimatedMath.sin(circular),
                    -50
                  ),
                },
                {
                  translateY: Animated.multiply(AnimatedMath.cos(circular), 50),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot2,
            {
              backgroundColor: "white",
              transform: [
                {
                  translateX: Animated.multiply(AnimatedMath.sin(circular), 10),
                },
                {
                  translateY: Animated.multiply(
                    AnimatedMath.cos(circular),
                    -10
                  ),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot2,
            {
              backgroundColor: "olive",
              transform: [
                {
                  translateX: Animated.multiply(
                    AnimatedMath.sin(circular),
                    160
                  ),
                },
                {
                  translateY: Animated.multiply(
                    AnimatedMath.cos(circular),
                    -10
                  ),
                },
              ],
            },
          ]}
        />
      </View>
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "seagreen",
  },
  dot: {
    position: "absolute",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  dot2: {
    position: "absolute",
    backgroundColor: "pink",
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
