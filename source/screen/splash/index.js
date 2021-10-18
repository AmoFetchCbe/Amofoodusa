
import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StatusBar, Image } from 'react-native';
///styles
import globalStyles from '../../globlestyles/styles';
import Images from '../../globlestyles/Imagepath';
///components

const SplashScreen = (props) => {
    const [users, setUser] = useState([])
    useEffect(() => {
        const timer = setTimeout(async () => {
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
                });
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ImageBackground
            source={Images.splash}
            style={globalStyles.flexColumn}
        >
            <StatusBar translucent={true} backgroundColor={'transparent'} />
        </ImageBackground>
    )
};



export default SplashScreen