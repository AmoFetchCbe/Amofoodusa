import React from 'react';
// Library
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
//Screens
import Login from '../screen/auth/login';
import Signup from '../screen/auth/signup';
import Home from '../screen/home';
// import Register from '../auth/register';
// import Welcome from '../auth/welcome';
import Header from '../components/header';
import details from '../screen/details';
import cart from '../screen/cart';
import Restmenu from '../screen/restmenu';
import Forget from '../screen/auth/forgot';
import BottomTab from './bottomtab';
import Order from '../screen/order';
import Editprofile from '../screen/editprofile';
import Account from '../screen/account';
import wishList from '../screen/wishlist';
import Setting from '../screen/setting';
import AddressManage from '../screen/AddressManage';
import Faq from '../screen/faq';
import SplashScreen from '../screen/splash';

///components


const Stack = createStackNavigator();
const StackScreens = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Splash" headerMode="screen" mode={Platform.OS === 'android' ? 'modal' : null}  >

            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                    headerMode: false
                }}
            />


            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerMode: false
                }}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{
                    headerMode: false
                }}
            />
            <Stack.Screen
                name="Home"
                component={BottomTab}
                options={{
                    headerMode: false
                }}
            />

            <Stack.Screen
                name="details"
                component={details}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="Details"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="cart"
                component={cart}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="View Cart"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Rest"
                component={Restmenu}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="Menu"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Forgot"
                component={Forget}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="Menu"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Order"
                component={Order}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="Menu"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />

            <Stack.Screen
                name="MyAccount"
                component={Account}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="Menu"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="EditProfile"
                component={Editprofile}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="Edit Profile"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Wishlist"
                component={wishList}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="Favourites"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />

            <Stack.Screen
                name="Setting"
                component={Setting}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="Setting"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="AddressManage"
                component={AddressManage}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="Manage Addresses"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Faq"
                component={Faq}
                options={{
                    header: (props) => (
                        <Header
                            left="back"
                            //right="cart"
                            title="FAQs"
                            navigation={props.navigation}
                        />
                    ),
                }}
            />
        </Stack.Navigator>

    );
};
export default StackScreens;