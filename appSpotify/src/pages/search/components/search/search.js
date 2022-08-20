import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import S from "./styled.js"

const SearchSection = () => {
    return(
        <View style={S.headContainer}>
            <Text style={S.titleSection}>Buscar</Text>
            <TouchableOpacity style={S.inputStyle} >
                <Image style={S.bottomImage} source={require('./icons/search.png')} />
                <Text style={S.placeHolderText}>O que você quer ouvir?</Text>
            </TouchableOpacity>           
        </View>

    );
};


export default SearchSection;