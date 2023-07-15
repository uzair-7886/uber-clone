import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,FlatList,Image,Button } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navigationSlice';


const chargeRate=25

const data=[
  {
    id:"Uber-X-123",
    title:"Ride Mini",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"Uber-XL-456",
    title:"Ride AC",
    multiplier:1.2,
    image:"https://links.papareact.com/5w8"
  },
  {
    id:"Uber-LUX-789",
    title:"Ride Luxury",
    multiplier:1.75,
    image:"https://links.papareact.com/7pf"
  }
]

const RideOptions = () => {
  const traveltimeinfo=useSelector(selectTravelTimeInformation)
  const navigation=useNavigation()
  const [selected,setSelected]=useState(null)
  return (
    <SafeAreaView style={tw`flex-grow bg-white`}>
      <View>
      
      <TouchableOpacity onPress={()=>navigation.goBack()} style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
        <Icon name="chevron-left" size={30} color="#000" />
      </TouchableOpacity>
      <Text style={tw`text-center text-xl py-5 font-semibold`}>Select Ride - {
        traveltimeinfo?.distance?.text
      }</Text>
      </View> 
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    renderItem={({item:{id,title,multiplier,image},item})=>(
      <TouchableOpacity
      onPress={()=>setSelected(item)}
      style={tw`flex-row justify-between items-center px-6 ${item.id===selected?.id?"bg-gray-200":""}`}>
        <Image
        style={{
          width:100,
          height:100,
          resizeMode:"contain"
        }}
        source={{uri:image}}
        />
        <View style={tw`-ml-6`}>
          <Text style={tw`text-xl font-semibold`}>{title}</Text>
          <Text>{
            traveltimeinfo?.duration.text
            }</Text>
        </View>
        <Text style={tw`text-lg`}>~ {
          new Intl.NumberFormat('en-gb',{
            style:'currency',
            currency:'PKR'
          }).format(
            (traveltimeinfo?.duration.value*chargeRate*multiplier)/100
          )
        }</Text>
      </TouchableOpacity>
    )}
    />
    <View style={tw`mt-auto border-t border-gray-200 `}>
      <TouchableOpacity
      // onPress={()=>navigation.navigate("RiderScreen")}
      disabled={!selected} style={tw`bg-black rounded-lg py-3 m-3 ${!selected&&"bg-gray-300"}`}>
        <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default RideOptions

const styles = StyleSheet.create({})