import { View, Text,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOpt from '../components/NavOpt';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'; 
import { useDispatch } from 'react-redux';
import { setOrigin,setDestination } from '../slices/navigationSlice';

const HomeScreen = () => {
const dispatch=useDispatch()

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
          // backgroundColor:'gray',
          borderRadius:10,
          // color:'white'
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
    </SafeAreaView>
  )
}

export default HomeScreen