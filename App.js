import React from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigator/AuthNavigator";
import navigationTheme from "./app/navigator/navigationTheme";
import AppNavigator from "./app/navigator/AppNavigator";

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button
//       title="Click"
//       onPress={() => navigation.navigate("TweetDetail", { id: 1 })}
//     />
//   );
// };

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Link />
//   </Screen>
// );

// const TweetDetail = ({ route }) => (
//   <Screen>
//     <Text>Tweet Details {route.params.id}</Text>
//   </Screen>
// );

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//     }}
//     initialRouteName="Tweets"
//   >
//     {/* these are my route.component specify which component to render for this */}
//     <Stack.Screen
//       name="Tweets"
//       options={{
//         headerStyle: { backgroundColor: "tomato" },
//         headerTintColor: "white",
//       }}
//       component={Tweets}
//     />
//     <Stack.Screen
//       name="TweetDetail"
//       options={({ route }) => ({ title: route.params.id })}
//       component={TweetDetail}
//     />
//   </Stack.Navigator>
// );

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Feed" component={Tweets} />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
