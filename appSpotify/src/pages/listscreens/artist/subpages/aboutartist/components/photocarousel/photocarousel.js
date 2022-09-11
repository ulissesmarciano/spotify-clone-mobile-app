import React from 'react';
import { View, FlatList, Dimensions, Text } from 'react-native';

const {width} = Dimensions.get('window');


const data = [
    '#fcbf05',
    '#fc2e05',
    '#05f0fc',
    '#fc05f0',
    '#05fc2e',
]

export default function PhotoCarouselSection(){

    return(
            <FlatList 
            data={data}
            keyExtractor={(item) => String(item)}
            showsHorizontalScrollIndicator={false}
            snapToOffsets={[...Array(data.length)].map(
                (x, i) => i * (width * 0.8 -40) + (i - 1) * 40,
            )}
            horizontal
            snapToAlignment={'start'}
            scrollEventThrottle={16}
            decelerationRate="fast"
            style={{marginTop: 20}}
            renderItem={({item}) => (
            <View 
                style={{
                backgroundColor: item,
                height: width *0.8 -20,
                width: width * 0.8 -20,
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                <Text style={{color: '#fff', fontSize: 40, fontWeight:'bold', opacity: 0.7}}>Photo</Text>
            </View>
            )}   
            />
    );
};