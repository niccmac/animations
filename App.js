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
import { FadeSquare, TranslatePosition, Scale } from "./helpers";

export default function App() {
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

  const heightWidthPercent = useRef(new Animated.Value(0)).current;
  const heightWidthPercentInterpolate = heightWidthPercent.interpolate({
    inputRange: [0, 1],
    outputRange: ["20%", "50%"],
  });
  const startHeightWidthPercentAnimation = () => {
    Animated.timing(heightWidthPercent, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(heightWidthPercent, {
        toValue: 0,
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
        <FadeSquare />
        <TranslatePosition />
        <Scale />

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
        {/* <TouchableWithoutFeedback onPressIn={startHeightWidthPercentAnimation}>
          <Animated.View
            style={{
              backgroundColor: "teal",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: heightWidthPercentInterpolate,
              // width: heightWidthPercentInterpolate,
            }}
          >
            <Text style={{ color: "white" }}>{"HEIGHT & WIDTH %"}</Text>
          </Animated.View>
        </TouchableWithoutFeedback> */}
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
