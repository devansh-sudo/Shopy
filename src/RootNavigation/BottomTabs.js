import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
// import Wallet from '../Wallet/Wallet';
import Categories from '../Category/Categories';
// import {connect} from 'react-redux';
import {Badge} from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator();

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart,
//   };
// };

class BottomTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        barStyle={{backgroundColor: '#fff'}}
        activeColor="#7b1fa2"
        inactiveColor="#999"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color,  }) => {
            if (route.name === 'Home') {
              return (
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  size={23}
                  color={color}
                />
              );
            } else if (route.name === 'Categories') {
              return (
                <Icon
                  name={focused ? 'ballot' : 'ballot-outline'}
                  size={23}
                  color={color}
                />
              );
            } else if (route.name === 'Cart') {
              return (
                <>
                  <Icon
                    name={focused ? 'cart' : 'cart-outline'}
                    size={23}
                    color={color}
                  />
                </>
              );
            } 
            // else if (route.name === 'Wallet') {
            //   return (
            //     <Icon
            //       name={focused ? 'wallet' : 'wallet-outline'}
            //       size={23}
            //       color={color}
            //     />
            //   );
            // }
             else if (route.name === 'Account') {
              return (
                <Icon
                  name={focused ? 'account' : 'account-outline'}
                  size={23}
                  color={color}
                />
              );
            }
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Cart" component={Cart} />
        {/* <Tab.Screen name="Wallet" component={Wallet} /> */}
        <Tab.Screen name="Account" component={Profile} />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs ;
