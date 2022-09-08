import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';

import S from './styled.js';

import AddIcon from './icons/adicicon.png';
import Download from './icons/download.png';
import Downloaded from './icons/downloadfoc.png';
import OptionsIcon from './icons/optionsicon.png';
import Play from './icons/playicon.png';
import Pause from './icons/pauseicon.png';
import ShareIcon from './icons/shareicon.png';

const mockedImage = 'https://avatars.githubusercontent.com/u/104742158?v=4';

const Item = ({title}) => {

  const [alternateDownloadButton, setAlternateDownloadButton] = useState(true);
    const changeDownloadButton = () => {
        setAlternateDownloadButton(previouState => !previouState);
    };

    const [alternatePlayButton, setAlternatePlayButton] = useState(true);
    const changePlayButton = () => {
        setAlternatePlayButton(previouState => !previouState)
    };

  return(
    <View style={S.container}>
      <View style={S.titleContainer}>
          <Image style={S.itemImage} source={{uri: mockedImage}}/>
          <Text style={S.title}>{title}</Text>
      </View>
          <Text style={S.subtitle}>Reunimos três mulas e duas antas num podcast e colocamos todas elas pra conversar. O resultado foi e...</Text>
          <Text style={S.subtitle}>Qui - 1h 50min</Text>
          <View style={S.controllContainer}>
      <View style={S.leftIconsContainer}>
          <TouchableOpacity>
              <Image style={S.leftIcons} source={AddIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={changeDownloadButton}>
              {alternateDownloadButton && <Image style={S.leftIcons} source={Download} />}
              {!alternateDownloadButton && <Image style={S.leftIcons} source={Downloaded} />}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={S.leftIcons} source={ShareIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
              <Image style={S.leftIcons} source={OptionsIcon} />
          </TouchableOpacity>
      </View>
      <View>
          <TouchableOpacity onPress={changePlayButton}>
              {alternatePlayButton && <Image style={S.playIcon} source={Play} />}
              {!alternatePlayButton && <Image style={S.playIcon} source={Pause} />}
          </TouchableOpacity>
      </View>
      </View>
        <View style={S.divisionLine} />
    </View>
  );
};

export default function LastEpisodeSection (){   

    return(
      <View>
        <Item title="UMG165 - Opiniões IMPOPULARES sobre FILMES"/>
        <Item title="UMG164 - Opiniões IMPOPULARES sobre FILMES"/>
        <Item title="UMG163 - Opiniões IMPOPULARES sobre FILMES"/>
        <Item title="UMG162 - Opiniões IMPOPULARES sobre FILMES"/>
        <Item title="UMG161 - Opiniões IMPOPULARES sobre FILMES"/>
        <Item title="UMG160 - Opiniões IMPOPULARES sobre FILMES"/>
        <Item title="UMG159 - Opiniões IMPOPULARES sobre FILMES"/>
        <Item title="UMG158 - Opiniões IMPOPULARES sobre FILMES"/>
        <Item title="UMG157 - Opiniões IMPOPULARES sobre FILMES"/>
        <Item title="UMG156 - Opiniões IMPOPULARES sobre FILMES"/>        
      </View>  
    );
};