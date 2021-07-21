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

export default class Otp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            mobile: '',

        };
    }
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
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Icon style={{ marginLeft: 8, marginTop: 10 }}
                            name="chevron-left"
                            size={35}
                            type="MaterialCommunityIcons" />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'column', marginTop: 40 }}>

                        <View
                            style={{
                                alignItems: 'center',
                                bottom: 20

                            }}>
                            <Text style={{ color: '#000', fontSize: 24, fontWeight: 'bold' }}>
                                Verify Details
                             </Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>
                                We have sent 6 Digit verification code to
                             </Text>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text style={{ marginTop: 10, right: 10 }}>+91 </Text>
                                <Text style={[{ right: 10, marginTop: 10 }]}>
                                    8888888888
                      </Text>
                            </View>


                        </View>
                    </View>

                    <View
                        style={{
                            top: 30,
                            height: 50,
                            marginTop: 35,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{

                                alignSelf: 'center',
                                borderBottomWidth: 1,
                                borderBottomColor: '#ea0016',
                            }}>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => {
                                    this.setState({ code: text });
                                }}
                                keyboardType="numeric"
                                maxLength={6}
                                textAlign="center"
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('BottomTabs')}>
                        <LinearGradient
                            colors={['#ec407a', '#ab47bc']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{
                                marginTop: 70,
                                height: 40,
                                width: '85%',
                                alignSelf: 'center',
                                borderRadius: 5,
                            }}
                        >
                            <Text style={styles.filledbuttontext}>Verify OTP</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: 'grey' }}>Did'nt get OTP ?   </Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#ec407a' }}>Resend</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 12,
        width: deviceWidth / 2,
        height: 40,

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
        paddingLeft: 50,

        fontSize: 14,
        color: '#000',
    },
    filledbuttontext: {

        textAlign: 'center',
        alignSelf: 'center',
        top: 8,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    },
});

