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
import { ScrollView } from 'react-native-gesture-handler';
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
                    <View style={{flexDirection:'row',marginLeft: 8, marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon style={{ }}
                            name="chevron-left"
                            size={28}
                            type="MaterialCommunityIcons" />
                    </TouchableOpacity>

                    <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold',paddingStart:14, }}>
                                Cart
                             </Text>
                             </View>   
                </View>
                <ScrollView>
                    <View style={{ }}>
                        <View style={{height:5,backgroundColor:'#e5e5e5',marginTop:10}}></View>
                        <Text style={{fontSize:16,paddingStart:10,fontWeight:'bold',marginTop:10}}>
                           Select Payment Method
                        </Text>

                    </View>
                </ScrollView>
                <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('BottomTabs')}>
                        <LinearGradient
                            colors={['#ec407a', '#ab47bc']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{
                                marginTop: 70,
                                height: 40,
                                width: '90%',
                                alignSelf: 'center',
                                borderRadius: 5,
                            }}
                        >
                            <Text style={styles.filledbuttontext}>Continue</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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

