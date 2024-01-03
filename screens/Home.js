import {View,Text,StyleSheet,} from "react-native";
import React from "react";
import { COLORS } from '../constants';

const Home = ({navigation}) => {

  return (
    <View style={styles.homeScreen}>
      <Text>Home</Text>
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
