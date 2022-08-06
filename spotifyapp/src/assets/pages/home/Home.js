import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, ImageBackground } from 'react-native';

const colorDefault = '#rgb(18, 18, 18)'; //criei uma constante para não precisar colar a cor sempre que pedir. Uso o nome da constante.
const statusBColor = 'black';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104742158?v=4';


const SectionTitle = ({title}) => {
    return(
        <Text style={style.allTitle} >{title}</Text>
    );
};

const SectionRecent = ({title}) => {
    return (
        <View style={style.sectionContainer} >
            <Image style={style.mockImage} source={{uri:imageProfileGithub}}/>
            <Text style={style.textTitle} >{title}</Text>            
        </View>
    );
};

const PodcastSection = ({title, children, subtitle }) => {
    return (
        <View style={style.podcastStyle}>
            <ImageBackground source={{uri: imageProfileGithub}} style={{width: 355, height: 170}}>
                <Text style={style.descriptionPodcast}>{subtitle}</Text>
                <Text style={style.titlePodcast} >{title}</Text>
                <Text style={style.descriptionPodcast}>{children}</Text>
            </ImageBackground>            
        </View>
    );
};

const Home = () => {
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={statusBColor} barStyle={"light-content"}/>
        <View style={style.styleHeader}>
            <SectionTitle title="Boa Noite" ></SectionTitle>
                <View style={style.iconsHeader}>
                    <Image style={style.iconSize} source={require('./icons/sino.png')}/>
                    <Image style={style.iconSize} source={require('./icons/historico.png')}/>
                    <Image style={style.iconSize} source={require('./icons/config.png')}/>   
                </View>             
        </View>
        <View  style={style.lineContent} >        
        <SectionRecent title="texto maior para...">
            <Text/>
          </SectionRecent>
          <SectionRecent title="texto">
            <Text/>
          </SectionRecent>
        </View>
        <View  style={style.lineContent} >
        <SectionRecent title="texto">
            <Text/>
          </SectionRecent>
          <SectionRecent title="texto">
            <Text/>
          </SectionRecent>
        </View>
        <View  style={style.lineContent} >
        <SectionRecent title="texto">
            <Text/>
          </SectionRecent>
          <SectionRecent title="texto">
            <Text/>
          </SectionRecent>
        </View>
        <View>
            <PodcastSection subtitle= "Podcast com vídeo" title="Ulisses Podcast">
                Ouça o melhor podcast sobre desenvolvimento de software
            </PodcastSection>
        </View>
            <SectionTitle title="Suas músicas estão com saudade"/>
    </SafeAreaView>
    );
};

export default Home;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorDefault,
        flex: 1, //Expandir para a tela inteira.
        //flex direction: 'row',
    },

    styleSafeArea:{
        backgroundColor: 'black',
    },
    
    styleHeader:{
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-around',
        marginLeft: 0,
    },
    
    iconsHeader:{
        flexDirection: 'row',
        minWidth: 150,
        marginLeft: 30,
        justifyContent: 'space-around',
        height: 30,
        marginTop: 30,
    },

    iconSize:{
        height: 30,
        width: 30,
    },

    allTitle:{
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 15,
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
    },

      
    lineContent:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 15,
        marginRight: 15,
    },

    sectionContainer: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 0,
        backgroundColor: '#rgb(42, 42, 42)',
        minWidth: 175,
        maxWidth: 175,
        borderRadius: 3,

    },

    textTitle:{
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center',
    },

    mockImage:{
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3, 
        height: 65,
        width: 65,
    },

    podcastStyle:{
        backgroundColor: 'blue',
        marginTop: 15,
        alignSelf: 'center',
        borderWidth: 1,
        minWidth: 355,
    },

    titlePodcast:{
        color:'blue',
        fontSize: 36,
        fontWeight: 'bold',
    },

    descriptionPodcast:{
        color: 'blue',
        maxWidth: 200,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
    },
});