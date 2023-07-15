import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'


const MapsScreen = () => {
  return (
    <View>
      <View
        style={tw`h-1/2`}
      >
        <Map />
      </View>
      <View
        style={tw`h-1/2`}
      >

      </View>
    </View>
  )
}

export default MapsScreen

const styles = StyleSheet.create({})