import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import FacebookIcon from './icons/facebookicon.png';
import InstagramIcon from './icons/instagramicon.png';
import TwitterIcon from './icons/twittericon.png';

import S from './styled.js';

const SocialMediaSection = () => {
    return(
        <View style={S.container}>
            <TouchableOpacity style={S.buttonOrientation}>
                <Image style={S.iconStyle} source={InstagramIcon} />
                <Text style={S.titleStyle}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={S.buttonOrientation}>
                <Image style={S.iconStyle} source={TwitterIcon} />
                <Text style={S.titleStyle}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={S.buttonOrientation}>
                <Image style={S.iconStyle} source={FacebookIcon} />
                <Text style={S.titleStyle}>Facebook</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SocialMediaSection;