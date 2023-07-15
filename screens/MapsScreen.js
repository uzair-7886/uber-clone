import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptions from '../components/RideOptions'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'


const MapsScreen = () => {

  const Stack=createNativeStackNavigator()
  const navigation=useNavigation()
  return (
    <View>

      <TouchableOpacity
      onPress={()=>navigation.navigate('Home')}
      style={tw`bg-gray-800 absolute top-8 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" size={25} color="white" />
      </TouchableOpacity>
      <View
        style={tw`h-1/2`}
      >
        <Map />
      </View>
      <View
        style={tw`h-1/2`}
      >
        <Stack.Navigator>
          <Stack.Screen
          name='NavigateCard'
          component={NavigateCard}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name='RideOptionsCard'
          component={RideOptions}
          options={{
            headerShown:false
          }}
          />
        </Stack.Navigator>

      </View>
    </View>
  )
}

export default MapsScreen

const styles = StyleSheet.create({})