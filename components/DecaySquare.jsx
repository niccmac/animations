import { useRef } from "react";
import { Animated, PanResponder, Text, View } from "react-native";

export const DecaySquare = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  // const value = { x: 0, y: 0 };

  // pan.addListener((v) => {
  //   (value.x = v.x), (value.y = v.y);
  // });
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      // onPanResponderGrant: (e, gestureState) => {
      //   pan.setOffset({ x: value.x, y: value.y });
      // },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: (e, { vx, vy }) => {
        // Animated.decay(pan, {
        //   velocity: { x: vx, y: vy },
        //   deceleration: 0.997,
        //   useNativeDriver: true,
        //   isInteraction: true,
        // }).start();
        pan.extractOffset();
      },
    })
  ).current;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 300,
        backgroundColor: "tomato",
      }}
    >
      <Animated.View
        style={{
          transform: pan.getTranslateTransform(),
        }}
        {...panResponder.panHandlers}
      >
        <View
          style={{
            backgroundColor: "springgreen",
            flexDirection: "row",
            height: 100,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black" }}>{"Move me"}</Text>
        </View>
      </Animated.View>
    </View>
  );
};
