import { View, Text,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOpt from '../components/NavOpt';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'; 
import { useDispatch } from 'react-redux';
import { setOrigin,setDestination } from '../slices/navigationSlice';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navigationSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
const dispatch=useDispatch()
const origin=useSelector(selectOrigin)


  return (
    <SafeAreaView style={tw`h-full bg-white`}>

      <View style={tw`p-5`}>
<Image
style={{
  width:100,
  height:100,
  resizeMode:'contain'
}}
source={{
  uri:'https://links.papareact.com/gzs'
}
}
/>
      </View>
      <GooglePlacesAutocomplete
      onPress={(data,details=null)=>{
dispatch(setOrigin({
  location:details.geometry.location,
  description:data.description
})
)
dispatch(setDestination(null))
      }}
      returnKeyType={'search'}
      fetchDetails={true}
      styles={{
        container:{
          flex:0,
          paddingHorizontal:10,
          paddingVertical:5,
          
        },
        textInput:{
          fontSize:18,
          borderRadius:10,
        }
      }}
debounce={200}
placeholder='Your Location?'
nearbyPlacesAPI='GooglePlacesSearch'
query={{
  key:GOOGLE_MAPS_APIKEY,
  language:'en'
}}
/>
      <NavOpt/>
      <NavFavorites/>
    </SafeAreaView>
  )
}

export default HomeScreen