import React from 'react';
// Library
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
///srtles
import { StyleSheet, View, Platform, Text } from 'react-native';
import Colors from '../globlestyles/color';
import { fontProperties } from '../globlestyles/Font';
import { Icon } from 'react-native-elements';
import { Sizes } from '../globlestyles/Size';
import { Icons, IconsType } from '../globlestyles/Icon';
import Home from '../screen/home';
import ViewCart from '../screen/cart'
import Order from '../screen/order';
import Account from '../screen/account';
///screen



const Tab = createMaterialBottomTabNavigator();

function MyTabs(props) {
    return (
       
                <Tab.Navigator
                    barStyle={{ backgroundColor: Colors.white }}
                    activeColor={Colors.black}
                    inactiveColor={Colors.black}
                >
                    <Tab.Screen name="Home" component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                                <Icon type={IconsType.ionIcon}
                                name={Icons.home}
                                size={Sizes.inputIcons} color={color} size={25} />
                            ),
                        }}

                    />
                    <Tab.Screen name="My order" component={Order}
                        options={{
                            tabBarLabel: 'My Order',
                            tabBarIcon: ({ color }) => (
                                <Icon type={IconsType.fontAwesome5}
                                name={Icons.order}
                                size={Sizes.inputIcons} color={color} size={25} />
                            ),
                        }}

                    />
                      <Tab.Screen name="cart" component={ViewCart}
                        options={{
                            tabBarLabel: 'Cart',
                            tabBarIcon: ({ color }) => (
                                <Icon type={IconsType.ionIcon}
                                name={Icons.cart}
                                size={Sizes.inputIcons} color={color} size={25} />
                            ),
                        }}

                    />
                     <Tab.Screen name="My Account" component={Account}
                        options={{
                            tabBarLabel: 'My Account',
                            tabBarIcon: ({ color }) => (
                                <Icon type={IconsType.fontAwesome5}
                                name={Icons.user}
                                size={Sizes.inputIcons} color={color} size={24} />
                            ),
                        }}

                    />
                </Tab.Navigator>
          
    );
}


export default MyTabs

const styles = StyleSheet.create({

    footerArea: {
        // flex: 1,
        // justifyContent: 'flex-end',
    },
    gradientFooter: {
       // flex: 1,

    },
});
