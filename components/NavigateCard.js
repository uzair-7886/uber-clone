import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, setDestination } from '../slices/navigationSlice'
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useNavigation } from '@react-navigation/native'
import NavFavorites from './NavFavorites'
import { Icon } from '@rneui/themed';


const NavigateCard = () => {


    const dispatch=useDispatch()
    const navigation=useNavigation()
    // const destination=useSelector(selectDestination)

  return (
    <SafeAreaView
    style={tw`bg-white flex-1`}
    >
      <Text
      style={tw`text-center py-5 text-lg`}
      >Good Morning, User</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
<View>
<GooglePlacesAutocomplete
      onPress={(data,details=null)=>{
dispatch(setDestination({
  location:details.geometry.location,
  description:data.description
})
)
navigation.navigate('RideOptionsCard') 
      }}
      returnKeyType={'search'}
      fetchDetails={true}
      styles={{
        container:{
          flex:0,
          paddingHorizontal:20,
          paddingVertical:5,
          
        },
        textInput:{
          fontSize:18,
          backgroundColor:'#ECEAE9',
          borderRadius:5,
          // color:'white'
        }
      }}
debounce={200}
placeholder='Destination?'
nearbyPlacesAPI='GooglePlacesSearch'
query={{
  key:GOOGLE_MAPS_APIKEY,
  language:'en'
}}
/>
</View>
<NavFavorites/> 
      </View>
      <View
      style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
<TouchableOpacity
onPress={()=>navigation.navigate('RideOptionsCard')}
style={tw`flex-row bg-black w-24 px-4 py-3 rounded-full items-center justify-between `}
>
    <Icon
    name='car'
    type='font-awesome'
    color='white'
    size={16}
    />
    <Text
    style={tw`text-white text-center ml-1`}
    >Rides</Text>
</TouchableOpacity>
<TouchableOpacity
style={tw`flex-row bg-gray-100 w-24 px-4 py-3 rounded-full items-center justify-between`}
>
    <Icon
    name='fast-food'
    type='ionicon'
    color='black'
    size={24}
    />
    <Text
    style={tw`text-black text-center ml-1`}
    >Eats</Text>
</TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})