import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
// import {ArrowRightOutlined } from '@ant-design/icons'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const data=[
    {
        id:1,
        title:'Get a ride',
        image:'https://links.papareact.com/3pn',
        screen:'MapScreen'
    },
    {
        id:2,
        title:'Order food',
        image:'https://links.papareact.com/28w',
        screen:'EatsScreen'
    }
]

const NavOpt = () => {

    const navigation=useNavigation()

return(
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    horizontal
    renderItem={({item})=>(
        <TouchableOpacity
        onPress={()=>navigation.navigate(item.screen)}
        style={[tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 ml-5 h-57 w-40 rounded shadow-sm`,
    {
        elevation:1
    }]}
        >
            <View>
                <Image
                style={{
                    width:120,
                    height:120,
                    resizeMode:'contain',
                    // backgroundColor:'gray'
                }}
                source={{
                    uri:item.image
                }}
                />
                <Text
                style={tw`mt-2 text-lg font-semibold ml-2`}
                >{item.title}</Text>
                <View
                style={tw`p-2 w-10 bg-black rounded-full `}
                >

                <AntDesign name="arrowright" size={24} color="white"/>
                </View>
            </View>
        </TouchableOpacity>
    )}
    />
)
}
export default NavOpt
