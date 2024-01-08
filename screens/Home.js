import {View,Text,StyleSheet, TouchableOpacity,} from "react-native";
import React from "react";
import { COLORS, SIZES } from '../constants';
import TaskCard from "../components/TaskCard";

const Home = ({navigation}) => {

  return (
    <View style={styles.homeScreen}>
      <View style={styles.contentContainer}>
        <TaskCard title={"Wire up the new user flow"}/>
        <TaskCard title={"Create buttons states"}/>
        <TaskCard title={"Create to do list"}/>
        <TaskCard title={"Add T&Cs to CPG"}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen:{
    minHeight: "100%",
    backgroundColor: COLORS.white500,
  },
  contentContainer:{
    padding: SIZES.large,
    gap: 10
  }
})

export default Home;
