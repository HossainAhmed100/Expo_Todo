import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Authentaction/Login';
import Register from '../screens/Authentaction/Register';

const AuthRoute = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <AuthRoute.Navigator screenOptions={{ animation: "slide_from_right" }}>
      <AuthRoute.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthRoute.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </AuthRoute.Navigator>
  )
}

export default AuthNavigation