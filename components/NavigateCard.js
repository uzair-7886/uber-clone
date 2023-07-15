import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, setDestination } from '../slices/navigationSlice'
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useNavigation } from '@react-navigation/native'

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
// console.log(details.geometry.location)
// dispatch(setDestination(null))
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
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})