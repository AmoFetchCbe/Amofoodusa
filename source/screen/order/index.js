import React, { useEffect, useState } from 'react';
// Library
import { View, Text, ImageBackground, Image, StatusBar, Dimensions, LogBox, FlatList } from 'react-native';
///styles
import globalStyles from '../../globlestyles/styles';
import styles from './styles';
import { TextInput } from 'react-native-paper';
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
import DropShadow from 'react-native-drop-shadow';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = hp('25%');

const Order = (props) => {
    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // });
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])
    const array = [
        {
            key: '1',
            title: 'Apple',
            image: Images.img

        },
        {
            key: '2',
            title: 'Cheery',
            image: Images.img
        },
        {
            key: '3',
            title: 'Leamon',
            subtitle: 'example subtitle 3',
            image: Images.img
        },
        {
            key: '4',
            title: 'Leamon',
            subtitle: 'example subtitle 3',
            image: Images.img
        },
    ];

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

    const images2 = [
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
        <View style={globalStyles.mainCont2}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ScrollView>
                <View style={styles.subcont}>
                    <Text style={styles.subtitle}> Past order </Text>
                    <View style={{ paddingHorizontal: hp('2%') }}>
                        <FlatList
                            data={images}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ paddingVertical: hp('1.2%') }}>
                                        <TouchableOpacity onPress={() => { props.navigation.navigate('details') }}>
                                            <View style={styles.popup}>
                                                <View style={[globalStyles.row, { borderBottomWidth: hp('.1%'), borderBottomColor: colors.gray }]}>
                                                    <View style={{ flex: 1 }}>
                                                        <View style={{ paddingHorizontal: hp('1%'), paddingVertical: hp('2%') }}>
                                                            <Text style={styles.title}>RHR Hotels</Text>
                                                            <Text style={styles.title2}>Break </Text>
                                                            <View>
                                                                <Text style={styles.price}>$ 9.99</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{ flex: 0.5, justifyContent: 'center' }}>
                                                        <View style={globalStyles.row}>
                                                            <View>
                                                                <Text>Delivered</Text>
                                                            </View>
                                                            <View style={{marginLeft:hp('2%')}}>
                                                                <Icon type={IconsType.ionIcon}
                                                                    name={Icons.tick}
                                                                    color={colors.green}
                                                                    size={Sizes.inputIcons2} />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View>
                                                    <View style={{ paddingHorizontal: hp('1%'), paddingVertical: hp('1%') }}>
                                                        <Text style={styles.title}> chilly parotta * 2</Text>
                                                        <Text style={styles.title2}>Oct 1, 1.57 PM </Text>

                                                    </View>
                                                </View>
                                                <View style={{ borderBottomWidth: hp('.50%'), borderBottomColor: colors.gray }}>
                                                    <View style={{ paddingHorizontal: hp('1%'), paddingVertical: hp('1%') }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <View style={globalStyles.flexColumn}>
                                                                <View style={styles.box}>
                                                                    <Text>REORDER</Text>
                                                                </View>
                                                                <Text numberOfLines={2} style={styles.yetText}>You haven't rated this deliverd yet</Text>
                                                            </View>
                                                            <View style={globalStyles.flexColumn}>
                                                                <View style={styles.box2}>
                                                                    <Text>RATE ORDER</Text>
                                                                </View>
                                                                <Text numberOfLines={2} style={styles.yetText}>You haven't rated this food yet</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )

                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>

    )
};
export default Order;