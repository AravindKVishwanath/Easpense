import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import AddExpense from "./screens/AddExpense";
import AddNotes from "./screens/AddNotes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabss() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },
            
            tabBarIcon: ({ focused }) => 
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              )
            
          }}
        />
        <Tab.Screen
          name="AddExpense"
          component={AddExpense}
          options={{
            tabBarLabel: "AddExpense",
            tabBarLabelStyle: { color: "black" ,},
            
            tabBarIcon: ({ focused }) => 
              focused ? (
                <AntDesign name="pluscircle" size={24} color="black" />
              ) : (
                <AntDesign name="pluscircleo" size={24} color="black" />
              )
           
          }}
        />
        <Tab.Screen
          name="AddNotes"
          component={AddNotes}
          options={{
            tabBarLabel: "AddNotes",
            tabBarLabelStyle: { color: "black" },
            
            tabBarIcon: ({ focused }) => 
              focused ? (
                <FontAwesome name="sticky-note" size={24} color="black" />
              ) : (
                <FontAwesome name="sticky-note-o" size={24} color="black" />
              )
            
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
          component={BottomTabss}
          name="Main"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
