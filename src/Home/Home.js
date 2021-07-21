import { Container, Input } from 'native-base';
import React from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Assets } from '../assets/index';
import { SliderBox } from 'react-native-image-slider-box';
import { ScrollView } from 'react-native-gesture-handler';
 const deviceWidth = Dimensions.get('window').width;

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        require('../assets/b1.jpg'),
        require('../assets/b2.png'),
        require('../assets/b3.png'),

      ]
    }

  }


  render() {
    return (
      <View style={{
        backgroundColor: '#f6f6f6',
        width: '100%',
        flex: 1,
        resizeMode: 'contain',
      }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            resizeMode: 'contain',
          }}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 10 }}>
              <Image
                style={{ height: 50, width: 50, alignSelf: 'center', alignSelf: 'center' }}
                source={Assets.logoo}
              />
              <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', bottom: 6, paddingLeft: 10 }}>
                Shopy
          </Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Icon style={{ marginHorizontal: 2 }}
                name="heart-outline"
                size={24}
                type="MaterialCommunityIcons" />
              <Icon style={{ marginHorizontal: 6, paddingRight: 6 }}
                name="bell-outline"
                size={24}
                type="MaterialCommunityIcons" />
            </View>
          </View>
          </View>
         
          <ScrollView  >
            <View style={{backgroundColor:'white'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.5, borderRadius: 6, width: '92%', alignSelf: 'center', height: 40, backgroundColor: '#f5f5f5', borderColor: '#e5e5e5' }}>
            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 10 }}>
              <Icon style={{ paddingRight: 6, color: 'grey' }}
                name="magnify"
                size={20}
                type="MaterialCommunityIcons" />
              <Text style={{ color: 'grey', fontSize: 14, fontWeight: '400', alignSelf: 'center', }}>
                Search For Products
          </Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Icon style={{ marginHorizontal: 6, paddingRight: 6, color: 'grey' }}
                name="camera-wireless-outline"
                size={20}
                type="MaterialCommunityIcons" />
            </View>
          </View>
          <SliderBox

            images={this.state.images}
            sliderBoxHeight={160}
            dotColor="#ea0016"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: 'white',
            }}
            ImageComponentStyle={{
              alignSelf: 'center',

              width: '97%',
              marginTop: 15,
            }}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 12, marginBottom: 6 }}>
            <Text style={{ color: 'grey', fontSize: 14, alignSelf: 'center', paddingLeft: 8 }}>
              Showing All Catlogs
          </Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center', paddingRight: 8 }}>
              <Icon style={{ marginHorizontal: 2, color: '#ea0016' }}
                name="filter-variant"
                size={20}
                type="MaterialCommunityIcons" />
              <Text style={{ fontSize: 12, alignSelf: 'center', color: '#ea0016' }}>
                Filter
          </Text>
          </View>
          </View>
          </View>
          
       
        <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 16 }}>
          <View style={{ borderWidth: 0.5, width: 60, alignSelf: 'center', marginHorizontal: 8, borderColor: '#ea0016' }}></View>
          <Text style={{ color: '#ea0016' }}>WHAT DO YOU WISH TO SELL</Text>
          <View style={{ borderWidth: 0.5, width: 60, alignSelf: 'center', marginHorizontal: 8, borderColor: '#ea0016' }}></View>
        </View>
<View style={{marginHorizontal:10, }}>
        <FlatList
                data={[
                  {
                    image: require('../assets/product.jpg'),
                    title: 'Sarees',
                    items: '105 New',
                  },
                  {
                    image: require('../assets/product.jpg'),
                    title: 'Shirts',
                    items: '105 New',
                  },
                  {
                    image: require('../assets/product.jpg'),
                    title: 'Jeans',
                    items: '105 New',
                  },
                  {
                    image: require('../assets/product.jpg'),
                    title: 'T-shirt',
                    items: '105 New',
                  },
                  {
                    image: require('../assets/product.jpg'),
                    title: 'Beauty',
                    items: '105 New',
                  },
                  {
                    image: require('../assets/product.jpg'),
                    title: 'Suits',
                    items: '105 New',
                  },
                  
                ]}
                vertical
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={this.renderItem}
                keyExtractor={(item, i) => i.toString()}
              />
              </View>
              </ScrollView>
              
      </View>
    );
  }

  renderItem = ({item, index}) => (
    <View style={styles.flatistview}>
      <Image source={item.image} style={styles.img} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
 
      </View>

      <Text numberOfLines={1} style={styles.subtittle}>
        {item.items}
      </Text>
 
    </View>
  );
}

const styles = StyleSheet.create({
  
  flatistview: {
    marginTop:10,
    backgroundColor:'white',
    elevation:1,
    flexDirection: 'column',
    marginVertical: 4,
    padding: 5,
    elevation: 0.5,
    borderWidth: 0.1,
    marginHorizontal: 6,
    height: 150,
    width:100
  },
  img: {
    resizeMode:'contain',
    alignSelf:'center',
    height: 100,
    marginTop:5,
    width: 120,
  },
  title: {
    paddingStart: 5,
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
  subtittle: {color: '#ea0016', paddingStart: 5,  fontSize:10},
});

