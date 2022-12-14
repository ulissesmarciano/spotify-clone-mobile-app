import React from "react";
import { SafeAreaView, View, TextInput, Image } from "react-native";
import S from "./styled.js";


export default function SearchInputSection () {
    return (        
        <SafeAreaView style={S.backInputStyle}>
            <View style={S.sectionStyle}>
            <TextInput 
                style={S.textInputStyle} 
                placeholder="O que você quer ouvir?"
                placeholderTextColor="white" 
            /> 
            <Image 
                source={require('./icons/photo.png')} 
                style={S.imageInputStyle} 
            /> 
            </View>
        </SafeAreaView>           
    );
};
