import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import React, { useRef, useEffect, FC } from "react";

export default function App() {
  //Blue box, fade in then back out
  const fade = useRef(new Animated.Value(1)).current;
  const startFadeAnimation = () => {
    Animated.timing(fade, {
      toValue: 0.1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fade, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    });
  };
  const translatePosition = useRef(new Animated.Value(0)).current;
  const startTranslatePositionAnimation = () => {
    Animated.timing(translatePosition, {
      toValue: 300, //Use negitive numbers to lift animation, positive to drop.
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(translatePosition, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    });
  };
  const scale = useRef(new Animated.Value(1)).current;
  const startScaleAnimation = () => {
    Animated.timing(scale, {
      toValue: 2, //Use negitive numbers to lift animation, positive to drop.
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scale, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    });
  };
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
  const absolutePosition = useRef(new Animated.Value(0)).current;
  const startAbsolutePositionAnimation = () => {
    Animated.timing(absolutePosition, {
      toValue: 150,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(absolutePosition, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    });
  };
  const animatedColour = useRef(new Animated.Value(0)).current;
  const boxInterpolation = animatedColour.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(154,205,50)", "rgb(255,0,0)"],
  });

  const startColourAnimation = () => {
    Animated.timing(animatedColour, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animatedColour, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    });
  };
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
    <ScrollView>
      <View style={styles.container}>
        <Text>Animations</Text>
        <StatusBar style="auto" />
        <TouchableWithoutFeedback onPressIn={startFadeAnimation}>
          <Animated.View
            style={{
              backgroundColor: "blue",
              flexDirection: "row",
              height: 100,
              width: 100,
              opacity: fade,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>FADE</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
        <TouchableWithoutFeedback onPressIn={startAbsolutePositionAnimation}>
          <Animated.View
            style={{
              backgroundColor: "purple",
              flexDirection: "row",
              height: 100,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              top: absolutePosition,
              left: absolutePosition,
            }}
          >
            <Text style={{ color: "white" }}>{"ABSOLUTE POSITION"}</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPressIn={startColourAnimation}>
          <Animated.View
            style={{
              backgroundColor: boxInterpolation,
              flexDirection: "row",
              height: 100,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>{"COLOUR INTERPOLATION"}</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
