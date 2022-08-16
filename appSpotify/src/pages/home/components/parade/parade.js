import React from "react";
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import S from './styled';

const DATA = [
  {
    id: 1,
    title: 'Brasil: seu relatório diário d...',
  },
  {
    id: 2,
    title: 'Mundo: seu relatório diário d...',
  },
  {
    id: 3,
    title: 'Semanal: seu relatório diário d...',
  },

  {
    id:4,
    title: 'Por Hora: seu relatório diário d...',
  },  
];

const Item = ({ title }) => (
    <View style={S.item}>
        <LinearGradient colors={['#F0CD42','#F2961E']}>
        <View style={S.imageItem}>
            <Image style={S.logoImage} source={require('./icons/logoSpotify.png')}/>
            <Text style = {S.titleInImage}>Top 50</Text>
            <Text style={S.lineInImage}>___________</Text>
            <Text style={S.subtitleInImage}>BRAZIL</Text>
        </View>
        </LinearGradient>
      <Text style={S.title}>{title}</Text>
    </View>
);

const Item2 = ({ title }) => (
    <View style={S.item}>
        <LinearGradient colors={['#527D72','#0D0565']}>
        <View style={S.imageItem}>
            <Image style={S.logoImage} source={require('./icons/logoSpotify.png')}/>
            <Text style = {S.titleInImage}>Top 50</Text>
            <Text style={S.lineInImage}>___________</Text>
            <Text style={S.subtitleInImage}>GLOBAL</Text>
        </View>
        </LinearGradient>
      <Text style={S.title}>{title}</Text>
    </View>
);

const Item3 = ({ title }) => (
    <View style={S.item}>
        <LinearGradient colors={['#DC2DD9','#A800A6']}>
        <View style={S.imageItem}>
            <Image style={S.logoImage} source={require('./icons/logoSpotify.png')}/>
            <Text style = {S.titleInImage}>Top 20</Text>
            <Text style={S.lineInImage}>___________</Text>
            <Text style={S.subtitleInImage}>WEKLY</Text>
        </View>
        </LinearGradient>
      <Text style={S.title}>{title}</Text>
    </View>
);

const Item4 = ({ title }) => (
    <View style={S.item}>
        <LinearGradient colors={['#98EE35','#386109']}>
        <View style={S.imageItem}>
            <Image style={S.logoImage} source={require('./icons/logoSpotify.png')}/>
            <Text style = {S.titleInImage}>Top 10</Text>
            <Text style={S.lineInImage}>___________</Text>
            <Text style={S.subtitleInImage}>FOR HOUR</Text>
        </View>
        </LinearGradient>
      <Text style={S.title}>{title}</Text>
    </View>
);

const ParadeSection = () => {
    const renderItem = ({ item }) => {
        if (item.title == 'Brasil: seu relatório diário d...'){
            return <Item title={item.title}/>
        } else if (item.title == 'Mundo: seu relatório diário d...'){
            return <Item2 title={item.title}/>
        } else if (item.title == 'Semanal: seu relatório diário d...'){
            return <Item3 title={item.title}/>
        } else return <Item4 title={item.title}/>
    };

    return(
        <View style={S.titleContainer}>
            <Text style={S.headTitle}>Paradas</Text>        
        <SafeAreaView style={S.container}>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      </View>
    )
};

export default ParadeSection;