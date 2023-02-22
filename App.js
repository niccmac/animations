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
  AddSquare,
  DivideSquare,
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
    height: "100%",
  },
  spaced: {
    margin: 50,
  },
});
const LandingScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Animations</Text>
        {/* <StatusBar style="auto" /> */}
        <View style={styles.spaced}>
          <FadeSquare />
        </View>
        <View style={styles.spaced}>
          <TranslatePosition />
        </View>
        <View style={styles.spaced}>
          <Scale />
        </View>
        <View style={styles.spaced}>
          <HeightWidth />
        </View>
        <View style={styles.spaced}>
          <AbsolutePosition />
        </View>
        <View style={styles.spaced}>
          <ColourSquare />
        </View>
        <View style={styles.spaced}>
          <RotateSquares />
        </View>
        <View style={styles.spaced}>
          <SpringSquare />
        </View>
        <View style={styles.spaced}>
          <LoopSquare />
        </View>
        <View style={styles.spaced}>
          <AddSquare />
        </View>
        <View style={styles.spaced}>
          <DivideSquare />
        </View>
      </View>
    </ScrollView>
  );
};
const MoveScreen = () => {
  return <DecaySquare />;
};
