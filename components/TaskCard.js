import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const TaskCard = ({title}) => {
  return (
    <View style={{borderRadius: 8, borderWidth: 0.5, borderColor: COLORS.slate200, padding: 10, gap: 8}}>
        <Text style={{fontWeight: 500, fontSize: 16, color: COLORS.slate500}}>{title}</Text>
        <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
            <View style={styles.dayCard}>
            <Text style={{fontWeight: 500, color: COLORS.whiteBold, fontSize: 10}}>Fri</Text>
            </View>
        <View style={{flexDirection: "row", gap: 10}}>
            <View style={styles.taskBold}></View>
            <View style={styles.taskBold}></View>
            <View style={styles.taskLight}></View>
            <View style={styles.taskLight}></View>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    dayCard:{
      borderRadius: 4,
      backgroundColor: COLORS.blue500,
      paddingVertical: 5,
      paddingHorizontal: 8,
      textAlign: "center"
    },
    taskBold:{
      width: 25,
      height: 12,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:4,
      borderTopRightRadius:4,
      backgroundColor: COLORS.blue500,
    },
    taskLight:{
      width: 25,
      height: 12,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:4,
      borderTopRightRadius:4,
      backgroundColor: COLORS.blue200,
    },
  })

export default TaskCard