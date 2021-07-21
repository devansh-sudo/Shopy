import { Container } from 'native-base';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { Assets } from '../assets/index';
import LinearGradient from 'react-native-linear-gradient'

export default function Splashscreen() {
  return (
    <Container
      style={{
        backgroundColor: '#ec407a',
        width: '100%',

        resizeMode: 'contain',
      }}>
      <StatusBar backgroundColor="#ec407a" barStyle="dark-content" />
      <LinearGradient
          colors={['#ec407a', '#ab47bc'  ]}
          style={{   alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        flex:1}}
        >
      <View style={{flexDirection:'column', position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',}}>  
      <View
        style={{
         
        }}>
        <Image
          style={{ height: 250, width: 200, alignSelf: 'center' }}
          source={Assets.logo}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          bottom:50,
        }}>
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
          Welcome to Shopy
        </Text>
        <Text style={{ color: '#fff', fontSize: 12 }}>
          Reselling App earn more
        </Text>


      </View>
      </View>    
</LinearGradient>

    </Container>
  );
}
