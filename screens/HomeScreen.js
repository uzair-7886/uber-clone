import { View, Text,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOpt from '../components/NavOpt';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      {/* <Text style={[tw`text-red-500 p-10 text-lg`,{
        // backgroundColor: 'blue'
        // color:'purple'
      }]}>HomeScreen</Text> */}
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
      <NavOpt/>
    </SafeAreaView>
  )
}

export default HomeScreen