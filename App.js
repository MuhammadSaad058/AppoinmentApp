// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "./SignUp";
import SignInScreen from "./SignIn";
import Home from "./Home";
import { AuthProvider } from "./AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DoctorsScreen from "./DoctorsScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "react-native-vector-icons/Ionicons";
import DoctorProfileScreen from "./DoctorsProfileScreen";
import ProfileScreen  from "./ProfileScreen";
import NotificationsScreen from "./NotificationScreen";
import MoreScreen from "./MoreScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const screenIcons = {
  HomeTab: "home-outline",
  DoctorsTab:  "person-outline",
  MessagesTab: "notifications-outline",
  MoreTab: "menu",
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = screenIcons[route.name];
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [{ display: "flex" }, null],
      })}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="DoctorsTab" component={DoctorsScreen} />
      <Tab.Screen name="MessagesTab" component={NotificationsScreen} />
      <Tab.Screen name="MoreTab" component={MoreScreen} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sign Up">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Sign Up"
            component={SignupScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Sign In"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={BottomTabs}
          />
             <Stack.Screen
            options={{ headerShown: false }}
            name='DoctorProfileScreen'
            component={DoctorProfileScreen}
          />
            <Stack.Screen
            options={{ headerShown: false }}
            name='ProfileScreen'
            component={ProfileScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
