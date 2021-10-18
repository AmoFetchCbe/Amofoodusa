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
const AddressManage = (props) => {
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
                <View style={{backgroundColor:colors.gray,height:hp('8%'),justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.title2}>SAVE ADDRESSES</Text>
                </View>
                <View style={{ paddingHorizontal: hp('2%') }}>
                    <FlatList
                        data={images}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ paddingVertical: hp('1.2%') }}>

                                    <View style={styles.popup}>
                                        <View style={[globalStyles.row, { borderBottomWidth: hp('.1%'), borderBottomColor: colors.gray, }]}>
                                            <View style={{ flex: 0.1,paddingTop:hp('2%') }}>
                                                <Icon type={IconsType.ionIcon}
                                                    name={Icons.home2}
                                                    size={Sizes.inputIcons} color={colors.black} size={Sizes.inputIcons2} />
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                                <View style={{ paddingHorizontal: hp('1%'), paddingVertical: hp('2%') }}>
                                                    <Text style={styles.title}>Home</Text>
                                                    <Text style={styles.normal}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    </Text>
                                                </View>
                                                <View style={[globalStyles.row, { bottom: hp('1%'), marginLeft: hp('1%') }]}>
                                                    <View>
                                                        <TouchableOpacity>
                                                            <Text style={styles.title}>Edit</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ marginLeft: hp('5%') }}>
                                                        <TouchableOpacity>
                                                            <Text style={styles.title}>Delete</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View>
                                        </View>
                                    </View>
                                </View>
                            )

                        }}
                    />
                    <TouchableOpacity style={styles.Add}>
                        <Text style={styles.title}>ADD ADDRESSES</Text>
                    </TouchableOpacity>
                </View>




            </View>
        </View>
    )
};
export default AddressManage;