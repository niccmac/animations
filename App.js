import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
  DecaySquare,
} from "./components";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Animations" component={LandingScreen} />
        <BottomTab.Screen name="Move" component={MoveScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
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
const LandingScreen = () => {
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
};
const MoveScreen = () => {
  return <DecaySquare />;
};
