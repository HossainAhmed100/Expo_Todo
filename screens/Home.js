import {View,Text,StyleSheet, TouchableOpacity,} from "react-native";
import React from "react";
import { COLORS } from '../constants';

const Home = ({navigation}) => {

  return (
    <View style={styles.homeScreen}>
      <TouchableOpacity>
      <Text>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen:{
    flex: 1, 
    alignItems: "center", 
    justifyContent: 'center',
    backgroundColor: COLORS.white500,
  }
})

export default Home;
