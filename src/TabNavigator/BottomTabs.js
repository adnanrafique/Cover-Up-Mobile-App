import React from "react";
import { Platform } from "react-native";
// necessary libs
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// tab screens
import CategoriesScreen from "../screens/CategoriesScreen";
import CartScreen from "../screens/CartScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import WishlistScreen from "../screens/WishlistScreen";
import SplashScreen from "../screens/SplashScreen";
import {
  Account_active_icon,
  Account_inactive_icon,
  Cart_active_icon,
  Cart_inactive_icon,
  Categories_active_icon,
  Categories_inactive_icon,
  Home_active_icon,
  Home_inactive_icon,
  Whatsapp_icon,
  Wishlist_active_icon,
  Wishlist_inactive_icon,
} from "../assets/assetIndex";
import HomeScreen from "../screens/HomeScreen";
// defining constants
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// Tabs function
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        lazy: false,
        tabBarStyle: {
          height: Platform.OS === "android" ? 60 : 80,
        },
        tabBarLabelStyle: {
          paddingBottom: Platform.OS === "android" ? 5 : 0,
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Home_active_icon height={25} width={25} />
            ) : (
              <Home_inactive_icon height={25} width={25} />
            ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Categories"
        options={{
          tabBarLabel: "Categories",

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Categories_active_icon height={25} width={25} />
            ) : (
              <Categories_inactive_icon height={25} width={25} />
            ),
        }}
        component={CategoriesScreen}
      />

      <Tab.Screen
        name="Wishlist"
        options={{
          tabBarLabel: "Wishlist",

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Wishlist_active_icon height={20} width={20} />
            ) : (
              <Wishlist_inactive_icon height={20} width={20} />
            ),
        }}
        component={WishlistScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: "Cart",

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Cart_active_icon height={20} width={20} />
            ) : (
              <Cart_inactive_icon height={20} width={20} />
            ),
        }}
        component={CartScreen}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarLabel: "Account",

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Account_active_icon height={20} width={20} />
            ) : (
              <Account_inactive_icon height={20} width={20} />
            ),
        }}
        component={MyAccountScreen}
      />
    </Tab.Navigator>
  );
}
// parent render function
const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        {Platform.OS === "android" ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : null}

        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
