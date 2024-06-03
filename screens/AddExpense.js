import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AddExpense = () => {
  return (
    <View style={styles.ExpenseForm}>
      <TextInput></TextInput>
    </View>
  )
}

export default AddExpense

const styles = StyleSheet.create({
    ExpenseForm:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignContent:"center"
    }
})