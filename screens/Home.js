import {View,Text,StyleSheet, TouchableOpacity,} from "react-native";
import React from "react";
import { COLORS, SIZES } from '../constants';
import TaskCard from "../components/TaskCard";

const Home = ({navigation}) => {

  return (
    <View style={styles.homeScreen}>
      <View style={styles.contentContainer}>
        <View style={{flexDirection: "column", gap: 10, marginTop: 30}}>
          <View style={styles.duaCard}> 
          <Text style={{paddingVertical: 10}}>اللَّهُمَّ اكْفِني بِحَلاَلِكَ عَنْ حَرَامِكَ ، وَأغْنِنِي بِفَضْلِكَ عَمَّنْ سِواكَ</Text>
          <Text style={{paddingVertical: 10}}>
            <Text style={{fontWeight: 600}}>উচ্চারণ:</Text>
            <Text>আল্লাহুম্মাকফিনী বি হালালিকা আন হারামিকা, 
             ওয়া আগনিনী বিফাজলিকা আম্মান সিওয়াকা।</Text>
            <Text>Allahumma akfini bi halalika 
            ‘an haramika wa aghnini bi fadlika ‘amman siwaka</Text>
          </Text>
          </View>
          <View style={styles.duaCard}> 
          <Text style={{paddingVertical: 10}}>
            <Text style={{fontWeight: 600}}>অর্থ:</Text>
            <Text>হে আল্লাহ! আমাকে এতটুকু পরিমাণ হালাল 
            রিজিক দান কর যা আমার জন্য যথেষ্ট হবে 
            এবং হারাম অর্থের কোনো প্রয়োজন হবে না। 
            তুমি ব্যতীত আর সবার থেকে আমাকে অমুখাপেক্ষী করে দাও।</Text>
          </Text>
          </View>
        </View>

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
    gap: 10,
    padding: SIZES.large,
  },
  duaCard:{
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: COLORS.slate100,
    backgroundColor: COLORS.slate100,
  }
})

export default Home;
