import React from 'react';
import { View, SafeAreaView, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import S from './styled.js';

const DATA = [
{
    id: 1,
    title: 'Músicas Curtidas',
    subtitle: 'Playlist - 231 músicas',    
},
{
    id: 2,
    title: 'Minha Playlist',
    subtitle: 'Playlist - Playlist do usuário',    
},
{
    id: 3,
    title: 'Nome do Artista',
    subtitle: 'Artista',    
},
{
    id: 4,
    title: 'Nome da Playlist',
    subtitle: 'Playlist - Playlist de outros',  
},
{
    id: 5,
    title: 'Músicas Curtidas',
    subtitle: 'Playlist - 231 músicas',    
},
{
    id: 6,
    title: 'Minha Playlist',
    subtitle: 'Playlist - Playlist do usuário',    
},
{
    id: 7,
    title: 'Nome do Artista',
    subtitle: 'Artista',    
},
{
    id: 8,
    title: 'Nome da Playlist',
    subtitle: 'Playlist - Playlist de outros',  
},
{
    id: 9,
    title: 'Músicas Curtidas',
    subtitle: 'Playlist - 231 músicas',    
},
{
    id: 10,
    title: 'Minha Playlist',
    subtitle: 'Playlist - Playlist do usuário',    
},
{
    id: 11,
    title: 'Nome do Artista',
    subtitle: 'Artista',    
},
{
    id: 12,
    title: 'Nome da Playlist',
    subtitle: 'Playlist - Playlist de outros',  
},
];

const Item = ({ title, subtitle }) => (
    <View style={S.itemListContainer} > 
                <LinearGradient style={S.itemImage}  colors={['#ffd900', '#F0CD42','#F2961E']}>
                    <Text style={S.itemImageContent} >A</Text>
                </LinearGradient>
                <View style={S.itemTitleOrientation}>
                    <Text style={S.itemTitle}>{title}</Text>
                    <Text style={S.itemSubtitle}>{subtitle}</Text>
                </View>
            </View>
);

const Item2 = ({ title, subtitle }) => (
    <View style={S.itemListContainer} > 
                <LinearGradient style={S.itemImage}  colors={['#9b96e0', '#050061']} >
                    <Text style={S.itemImageContent} >B</Text>
                </LinearGradient>
                <View style={S.itemTitleOrientation}>
                    <Text style={S.itemTitle}>{title}</Text>
                    <Text style={S.itemSubtitle}>{subtitle}</Text>
                </View>
            </View>
);

const Item3 = ({ title, subtitle }) => (
    <View style={S.itemListContainer} > 
                <LinearGradient style={S.itemImage2}  colors={['#a0e8b6', '#004f18']} >
                    <Text style={S.itemImageContent} >C</Text>
                </LinearGradient>
                <View style={S.itemTitleOrientation}>
                    <Text style={S.itemTitle}>{title}</Text>
                    <Text style={S.itemSubtitle}>{subtitle}</Text>
                </View>
            </View>
);

const Item4 = ({ title, subtitle }) => (
    <View style={S.itemListContainer} >
        <View>
            <LinearGradient style={S.itemImage3}  colors={['#ffd900', '#F0CD42','#F2961E']}>
                    <Text style={S.itemImageContent2} >A</Text>
            </LinearGradient>
            <LinearGradient style={S.itemImage3}  colors={['#a0e8b6', '#004f18']} >
            <Text style={S.itemImageContent2} >C</Text>
            </LinearGradient>
        </View>
        <View>
            <LinearGradient style={S.itemImage3}  colors={['#9b96e0', '#050061']} >
                <Text style={S.itemImageContent2} >B</Text>
            </LinearGradient> 
            <LinearGradient style={S.itemImage3}  colors={['#ff1900', '#ff6e5e']} >
                <Text style={S.itemImageContent2} >D</Text>
            </LinearGradient>
        </View>
        <View style={S.itemTitleOrientation}>
            <Text style={S.itemTitle}>{title}</Text>
            <Text style={S.itemSubtitle}>{subtitle}</Text>
        </View>
    </View>
);


const LibraryResultsSection = () => {
    const renderItem = ({ item }) => {
        if (item.title == 'Músicas Curtidas'){
            return <Item title={item.title} subtitle={item.subtitle} />
        } else if (item.title == 'Minha Playlist'){
            return <Item2 title={item.title} subtitle={item.subtitle} />
        } else if (item.title == 'Nome do Artista'){
            return <Item3 title={item.title} subtitle={item.subtitle} />
        } else return <Item4 title={item.title} subtitle={item.subtitle} />
    };

    return(
        <SafeAreaView>
            <View style={S.itemContainer} >
                <TouchableOpacity >
                    <Text style={S.itemFilter} >Playlists</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={S.itemFilter} >Artistas</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={S.itemFilter} >Álbuns</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={S.itemFilter} >Baixado</Text>
                </TouchableOpacity>
            </View>
            <View style={S.baselineContainer}/>
            <View style={S.orderContanier} >
            <TouchableOpacity >
                <Image style={S.arrowsIcon} source={require('./icons/arrowsicon.png')} />
            </TouchableOpacity>
                <Text style={S.titleResults} >Mais recente</Text>
                <View style={S.gridOrientation} >
                <TouchableOpacity >
                    <Image style={S.gridIcon} source={require('./icons/gridicon.png')} />
                </TouchableOpacity >
                </View>
            </View>            
                <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
        </SafeAreaView>
    );
};

export default LibraryResultsSection;