import { useRef } from "react";
import { Animated, PanResponder, Text, View } from "react-native";

export const DecaySquare = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
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
          <Text style={{ color: "white" }}>{"Decay"}</Text>
        </View>
      </Animated.View>
    </View>
  );
};
