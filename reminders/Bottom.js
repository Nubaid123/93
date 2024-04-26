import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons";


import Reminders from './screens/Reminder'
import Create from './screens/Create'
const Tab = createBottomTabNavigator();
export default class Bottom extends React.Component {
  render(){
    return(
      <NavigationContainer>
     <Tab.Navigator
      screenOptions ={({route}) =>({
        tabBarIcon: ({ focused,color, size}) =>{
         let iconName;

         if (route.name === "Reminders"){
           iconName = "heart";
         }
         else if(route.name === "Create"){
           iconName = "create";
         }
         return <Ionicons name={iconName} size={size} color={color}/>
         
       }

      })

      }
       

    

     >
     <Tab.Screen name="Reminders" component={Reminders}/>
     <Tab.Screen name="Create" component={Create}/>
     </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
