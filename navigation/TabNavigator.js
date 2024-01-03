import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home2 from "../screens/Home";
import Setting from "../screens/Setting";
import { icons, COLORS, SIZES } from '../constants';
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.blue500,
        tabBarInactiveTintColor: COLORS.slate300,
        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
          borderTopRightRadius: SIZES.medium,
          borderTopLeftRadius: SIZES.medium,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tab.Screen name="Home2" component={Home2}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ? <Image source={icons.home} style={{width: size, height: size}}/> : 
            <Image source={icons.home} style={{width: size, height: size, tintColor: color}}/>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen name="Settings" component={Setting}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ? <Image source={icons.profile} style={{width: size, height: size}}/> : 
            <Image source={icons.profile} style={{width: size, height: size, tintColor: color}}/>
          ),
        }}
      />

    </Tab.Navigator>
  );
};


export default TabNavigator;
