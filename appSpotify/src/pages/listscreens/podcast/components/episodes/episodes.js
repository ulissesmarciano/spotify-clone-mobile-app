import React from 'react';
import {  View,  Text } from 'react-native';

import S from './styled.js';


const Item = ({ title, subtitle }) => (
  <View style={S.itemContainer}>
    <Text style={S.title}>{title}</Text>
    <Text style={S.title}>{subtitle}</Text>
  </View>
);

export default function EpisodesSection (){
  return (
    <View >
      
    </View>
  );
};