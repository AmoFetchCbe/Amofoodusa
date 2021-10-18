import React, { useEffect, useState } from 'react';
// Library
import { View, Text, ImageBackground, Image, StatusBar, Dimensions, LogBox, FlatList, TextInput } from 'react-native';
///styles
import globalStyles from '../../globlestyles/styles';
import styles from './styles';
import { Themes } from '../../globlestyles/Themes';
import colors from '../../globlestyles/color';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons, IconsType } from '../../globlestyles/Icon';
import { Sizes } from '../../globlestyles/Size';
import { Icon } from 'react-native-elements';
;
import Images from '../../globlestyles/Imagepath';
import Carousel from 'react-native-banner-carousel';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { fontProperties } from '../../globlestyles/Font';
import { Switch } from 'react-native-paper';


const Tab = createMaterialTopTabNavigator();
const Setting = (props) => {
    // const Width = Dimensions.get('window').width;
    // const tabBarWidth = Width - 32;

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const images = [
        {
            id: '1',
            image: Images.img4,
            title: 'Leamon',

        },
        {
            id: '2',
            image: Images.img4,
            title: 'Leamon',

        }, {
            id: '3',
            image: Images.img4,
            title: 'Leamon',

        },
        {
            id: '4',
            image: Images.img4,
            title: 'Leamon',

        }
    ];

    return (
        <View style={globalStyles.mainCont}>
            <View style={styles.subcont}>
                <View style={styles.box}>
                    <Text style={styles.title2}>SMS PREFERENCES</Text>
                </View>
                <View style={{ padding: hp('1%') }}>
                    <Text style={styles.normaltext}> Keep this on to receive offer recommendations & timely reminders based on your interests </Text>
                </View>
                <View style={[globalStyles.row, styles.box]}>
                    <View style={{ flex: 1 }} >
                        <Text style={styles.title}>Recommendations & Reminder</Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <Switch
                            value={isSwitchOn}
                            onValueChange={onToggleSwitch}
                            color={colors.black}
                        />
                    </View>
                </View>
                <View style={{ padding: hp('1%') }}>
                    <Text style={styles.normaltext}> Keep this on to receive offer recommendations & timely reminders based on your interests </Text>
                </View>

            </View>
        </View>
    )
};
export default Setting;