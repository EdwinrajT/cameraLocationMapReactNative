import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign:'center' ,
          headerStyle:{backgroundColor:Colors.primary500},
          headerTintColor:Colors.gray700,
          contentStyle:{backgroundColor:Colors.gray700}
      }}>
          <Stack.Screen name="AllPlaces" component={AllPlaces} options={({navigation})=>({
            title:"Your Favorie Places",
            headerRight:(({tintColor})=><IconButton icon='add' size={24} color={tintColor} onPress={()=>navigation.navigate('AddPlace')}/>)
          })}/>
          <Stack.Screen name="AddPlace" component={AddPlace} options={{title:'Add a new place'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
