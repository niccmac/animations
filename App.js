import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import {
  FadeSquare,
  TranslatePosition,
  Scale,
  HeightWidth,
  AbsolutePosition,
  ColourSquare,
  RotateSquares,
  SpringSquare,
  LoopSquare,
} from "./components";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Animations</Text>
        <StatusBar style="auto" />
        <FadeSquare />
        <TranslatePosition />
        <Scale />
        <HeightWidth />
        <AbsolutePosition />
        <ColourSquare />
        <RotateSquares />
        <SpringSquare />
        <LoopSquare />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
});
