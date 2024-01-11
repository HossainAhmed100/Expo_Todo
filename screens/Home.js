import {View,Text,StyleSheet, TouchableOpacity,} from "react-native";
import React from "react";
import { COLORS, SIZES } from '../constants';
import TaskCard from "../components/TaskCard";
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({navigation}) => {

  return (
    <View style={styles.homeScreen}>
      <View style={styles.contentContainer}>
        <View style={{flexDirection: "column", gap: 10, marginTop: 30}}>
          <View style={styles.duaCard}> 
          <Text style={{paddingVertical: 10, fontSize: 25, color: COLORS.textPrimary}}>اللَّهُمَّ اكْفِني بِحَلاَلِكَ عَنْ حَرَامِكَ ، وَأغْنِنِي بِفَضْلِكَ عَمَّنْ سِواكَ</Text>
          <Text style={{paddingVertical: 10}}>
            <Text style={{fontWeight: 600, color: COLORS.textPrimary}}>উচ্চারণ: </Text>
            <Text style={{color: COLORS.textSecondary}}>আল্লাহুম্মাকফিনী বি হালালিকা আন হারামিকা, 
             ওয়া আগনিনী বিফাজলিকা আম্মান সিওয়াকা।</Text>
          </Text>
          </View>
          <View style={styles.duaCard}> 
          <Text style={{paddingVertical: 10}}>
            <Text style={{fontWeight: 600, color: COLORS.textPrimary}}>অর্থ: </Text>
            <Text style={{color: COLORS.textSecondary}}>হে আল্লাহ! আমাকে এতটুকু পরিমাণ হালাল 
            রিজিক দান কর যা আমার জন্য যথেষ্ট হবে 
            এবং হারাম অর্থের কোনো প্রয়োজন হবে না। 
            তুমি ব্যতীত আর সবার থেকে আমাকে অমুখাপেক্ষী করে দাও।</Text>
          </Text>
          </View>
        </View>

        <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 60}}>
          <TouchableOpacity>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.countBtn}>
            <Text style={{fontWeight: 600, color: COLORS.textPrimary, fontSize: 50}}>0</Text>
          </LinearGradient>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen:{
    minHeight: "100%",
    backgroundColor: COLORS.bgPrimary
  },
  contentContainer:{
    gap: 10,
    padding: SIZES.large,
  },
  countBtn:{
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    alignItems: "center", 
    flexDirection: "column", 
    justifyContent: "center",
    backgroundColor: COLORS.blue500, 
  },
  duaCard:{
    borderWidth: 0.5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.bgPrimary
  },
})

export default Home;
