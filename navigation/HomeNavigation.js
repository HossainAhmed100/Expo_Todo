import React from 'react'
import Home from '../screens/Home';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from './TabNavigator';
import Setting from '../screens/Setting';

const HomeNav = createNativeStackNavigator();


const HomeNavigation = () => {
    return (
      <HomeNav.Navigator  screenOptions={{ animation: "slide_from_right" }}>

        <HomeNav.Screen name="Home" component={TabNavigator} options={{ headerShown: false }}/>
        <HomeNav.Screen name="Home2" component={Home} options={{ headerShown: false }}/>
        <HomeNav.Screen name="Setting" component={Setting}/>

{/* 
        <HomeNav.Screen name="ViewDeviceOwnerInfo" component={ViewDeviceOwnerInfo}
          options={{ 
            headerBackVisible: false,
            headerBackTitleVisible: false,
            title: 'Device Owner Info',
            headerLeft: () => ( <ScreenHeaderBtn iconUrl={icons.arrowLeft} dimension="60%" />),
            headerTitleAlign: 'center',
            headerStyle: {headerStyle: { shadowColor: 'transparent', elevation: 0,}}
          }}
        /> */}
     
      </HomeNav.Navigator>
    )
  }

export default HomeNavigation