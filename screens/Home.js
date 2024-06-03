import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.Main}>
      <View style={styles.Dashboard}>
        <Text style={{margin:"5%",fontSize:24,fontWeight:600}}>Hello AKV</Text>
        <View style={styles.Updatebox}>
            
        </View>
      </View>
      <View style={styles.Category}>
        <Text style={{margin:"5%",fontSize:20,fontWeight:600}}>Category</Text>
        <View style={styles.Categorybox}>

        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    Main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    Dashboard:{
        margin:"5%",
        height:"45%",
        width:"90%",
    },Category:{
        margin:"5%",
        height:"45%",
        width:"90%",
    },
    Updatebox:{
        height:"65%",
        width:"97%",
        margin:"3%",
        backgroundColor:"#005F73",
        borderRadius:10
    },
    Categorybox:{
        height:"65%",
        width:"97%",
        margin:"3%",
        backgroundColor:"#E9D8A6",
        borderRadius:10
    }
})