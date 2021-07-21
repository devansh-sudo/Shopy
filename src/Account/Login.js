import { Container, Input } from 'native-base';
import React from 'react';
import {
    View,
    TextInput,
    Text,
    ImageBackground,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
 


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Assets } from '../assets/index';
import LinearGradient from 'react-native-linear-gradient'
const deviceWidth = Dimensions.get('window').width;

export default class Login extends React.Component {
    render() {
        return (
            <Container
                style={{
                    backgroundColor: 'white',
                    width: '100%',

                    resizeMode: 'contain',
                }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={{ backgroundColor: '#fff' }}>
                    {/* <Icon style={{ marginLeft: 8, marginTop: 10 }}
                        name="chevron-left"
                        size={30}
                        type="MaterialCommunityIcons" /> */}

                    <View style={{ flexDirection: 'column', marginTop: 60 }}>
                        <View
                            style={{

                            }}>
                            <Image
                                style={{ height: 120, width: 120, alignSelf: 'center' }}
                                source={Assets.logoo}
                            />
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                bottom: 20

                            }}>
                            <Text style={{ color: '#000', fontSize: 24, fontWeight: 'bold' }}>
                                Shopy
                             </Text>
                            <Text style={{ color: '#000', fontSize: 12 }}>
                                Reselling App Earn More Money
                             </Text>


                        </View>
                    </View>
                   

                    <View
                        style={{
                            height: 50,
                            marginTop: 55,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                             <Text style={{paddingLeft:60,color:'grey',fontSize:12}}>Mobile</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="cellphone-android"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Text
                                style={{
                                    color: 'grey',
                                    backgroundColor: 'white',
                                    paddingHorizontal: 10,
                                    fontSize: 15,
                                    marginTop: 9,
                                    width: '20%',
                                }}>
                                +91{'  '}
                            </Text>

                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Mobile Number'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(txt) =>
                                    this.setState({ mobile: txt })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 25,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />

                        </View>
                    </View>

                    <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Otp')}>
                    <LinearGradient
                        colors={['#ec407a', '#ab47bc']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{
                            marginTop:20,
                            height: 40,
                            width: '85%',
                            alignSelf: 'center',

                            borderRadius: 5,
                        }}

                    >
                        <Text style={styles.filledbuttontext}>Continue</Text>



                    </LinearGradient>
                    </TouchableOpacity>

                    <View style={{alignSelf:'center',flexDirection:'row',marginTop:30}}>
                    <View style={{borderWidth:0.5,width:9,alignSelf:'center',marginHorizontal:6,color:'grey'}}></View>
                    <Text style={{color:'grey'}}>OR</Text>
                    <View style={{borderWidth:0.5,width:9, alignSelf:'center',marginHorizontal:6,color:'grey'}}></View>
                    </View>

                    <TouchableOpacity style={{marginTop:30}}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <View style={styles.emptybutton}>
                  <View style={{flexDirection:'row',paddingLeft:10}}>
                 <Image style={{height:20,width:20,}} source={Assets.facebook}/>
                <Text style={styles.emptybuttontext}>Connect with Facebook</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10}}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <View style={styles.emptybutton}>
                  <View style={{flexDirection:'row',paddingLeft:10}}>
                 <Image style={{height:20,width:20,}} source={Assets.google}/>
                <Text style={styles.emptybuttontext}>Connect with Google</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text style={{ color: '#000', fontSize: 12 ,alignSelf:'center',marginTop:25}}>
                                by continue,you agree to our
                             </Text>
                             <TouchableOpacity>
                             <Text style={{ color: '#ea0016', fontSize: 12 ,alignSelf:'center',textDecorationLine:'underline'}}>
                               Terms & Condition
                             </Text>
                             </TouchableOpacity>

                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 12,
        width: deviceWidth / 1.2,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    
    emptybutton: {
        alignSelf: 'center',
        borderColor: '#e5e5e5',
        borderRadius: 5,
        height: 40,
        width: '85%',
        borderWidth: 0.8,
        justifyContent: 'center',
      },
      emptybuttontext: {
        textAlign: 'center',
        paddingLeft:50,
         
        fontSize: 14,
        color: '#000',
      },
    filledbuttontext: {
        
     textAlign:'center',
     alignSelf:'center',
     top:8,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    },
});

