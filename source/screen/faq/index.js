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
import { List } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();
const Faq = (props) => {
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
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            id: '2',
            image: Images.img4,
            title: 'Leamon',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

        }, {
            id: '3',
            image: Images.img4,
            title: 'Leamon',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

        },
        {
            id: '4',
            image: Images.img4,
            title: 'Leamon',
            answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

        }
    ];

    return (
        <View style={globalStyles.mainCont2}>
            <ScrollView style={globalStyles.flexColumn} showsVerticalScrollIndicator={false}>
                <View style={styles.mainCont}>
                    <List.AccordionGroup>
                        {images.map((item, index) => (
                            <List.Accordion
                                key={item.id}
                                title={<Text style={styles.faqQue} >{item.title}</Text>}
                                id={item.id}
                            >
                                <View >
                                    <Text style={styles.faqAns} >{item.answer}</Text>
                                </View>
                            </List.Accordion>
                        ))}
                    </List.AccordionGroup>
                </View>
            </ScrollView>

        </View>
    )
};
export default Faq;