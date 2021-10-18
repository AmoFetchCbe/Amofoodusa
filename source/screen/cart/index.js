import React, { useEffect, useState } from 'react';
// Library
import { View, Text, ImageBackground, Image, StatusBar, Dimensions, LogBox, ImageStore } from 'react-native';
///styles
import globalStyles from '../../globlestyles/styles';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import { Themes } from '../../globlestyles/Themes';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons, IconsType } from '../../globlestyles/Icon';
import { Sizes } from '../../globlestyles/Size';
import { Icon } from 'react-native-elements';
import Images from '../../globlestyles/Imagepath';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Color, { colors } from '../../globlestyles/color'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontProperties } from '../../globlestyles/Font';

const cart = (props) => {
    const [cartItemsIsLoading, setValues] = useState(false);
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])
    const cartItems = [

        {
            itemId: '42608079',
            name: 'Little Tikes Cape Cottage Playhouse, Tan',
            thumbnailImage:
                'https://i5.walmartimages.com/asr/2654cd64-1471-44af-8b0c-1debaf598cb3_1.c30c481d1ac8fdd6aa041c0690d7214c.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
            color: 'Purple',
            qty: 1,
            salePrice: '129.99',
            checked: 0,
        },
        {
            itemId: '247714372',
            name:
                'HP 14" Laptop, Intel Core i3-1005G1, 4GB SDRAM, 128GB SSD, Pale Gold, 14-DQ1038wm',
            thumbnailImage:
                'https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
            qty: 1,
            color: 'Black',
            salePrice: '269',
            checked: 1,
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




    return (
        <View style={globalStyles.mainCont2}>
            <StatusBar backgroundColor={colors.white} />
            <ScrollView>
                <View style={styles.subcont}>
                    <View>
                        <Text style={styles.subtitle}>Your Items</Text>
                        <Text style={styles.subtitle2}>You have 2 item in your cart</Text>
                    </View>

                    {cartItems &&
                        cartItems.map((item, i) => (
                            <View
                                key={i}
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#fff',
                                    marginBottom: 2,
                                    padding: hp('2%'),
                                    //paddingVertical: hp('2%'),
                                    // height: 120,
                                    borderBottomColor: Color.gray,
                                    borderBottomWidth: hp('.15%')
                                }}>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexGrow: 1.2,
                                        flexShrink: 1.5,
                                        alignSelf: 'center',
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            /*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/
                                        }}
                                        style={{ paddingRight: hp('2%') }}>
                                        <Image
                                            source={Images.img4}
                                            style={{ height: hp('10%'), width: hp('10%'), borderRadius: hp('2%') }}
                                        />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            flexGrow: 1,
                                            flexShrink: 1,
                                            alignSelf: 'center',
                                        }}>
                                        <Text numberOfLines={2} style={{ fontSize: 15 }}>
                                            {item.name}
                                        </Text>

                                        <Text
                                            numberOfLines={1}
                                            style={styles.price}>
                                            $ {item.qty * item.salePrice}
                                        </Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity
                                                style={styles.button}>
                                                <MaterialIcons
                                                    name="remove"
                                                    size={22}
                                                    color="#cccccc"
                                                />
                                            </TouchableOpacity>
                                            <Text
                                                style={styles.number}>
                                                {item.qty}
                                            </Text>
                                            <TouchableOpacity

                                                style={styles.button}>
                                                <MaterialIcons name="add" size={22} color={colors.white} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.centerElement, { width: hp('10%') }]}>
                                    <TouchableOpacity
                                        style={[styles.centerElement, { width: hp('10%'), height: hp('10%') }]}
                                    >
                                        <Ionicons name="md-trash" size={25} color="#ee4d2d" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}

                </View>
                <View style={styles.Popup}>
                    <View style={styles.offerbox}>
                    <TouchableOpacity>
                        <View style={globalStyles.row}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.subtitle2}>TRYNEW</Text>
                                <Text style={styles.normal}>offer appiled on the bill</Text>
                            </View>
                            <View style={{ flex: 0.2 }}>
                                <Icon type={IconsType.MaterialIcons}
                                    name={Icons.localoffer}
                                    color={colors.black}
                                    size={hp('3%')} />
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{ paddingHorizontal: hp('2%'), borderTopWidth: hp('.15%'), borderTopColor: colors.gray }}>
                <Text style={styles.subtitle}>Billing Details</Text>
                <View style={globalStyles.row}>
                    <View style={globalStyles.flexColumn}>
                        <Text style={styles.subtitle2}>Item Total</Text>
                    </View>
                    <View style={[globalStyles.flexColum, { alignItems: 'flex-end', right: hp('5%') }]}>
                        <Text style={styles.price}>$ 10000</Text>
                    </View>
                </View>
                {/* <View style={globalStyles.row}>
                    <View style={globalStyles.flexColumn}>
                        <Text style={styles.subtitle2}>Delivery Tip</Text>
                    </View>
                    <View style={[globalStyles.flexColum, { alignItems: 'flex-end', right: hp('5%') }]}>
                    <TouchableOpacity>
                        <Text style={styles.addTip}>Add Tip </Text>
                    </TouchableOpacity>
                        <Text style={styles.price}>$ 10</Text>
                    </View>
                </View> */}
                <View style={globalStyles.row}>
                    <View style={globalStyles.flexColumn}>
                        <Text style={styles.subtitle2}>Delivery Fee</Text>
                    </View>
                    <View style={[globalStyles.flexColum, { alignItems: 'flex-end', right: hp('5%') }]}>
                        <Text style={styles.price}>$ 100</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: hp('.15%'), backgroundColor: Color.black }} />

                <View style={[globalStyles.row, { paddingTop: hp('1%') }]}>
                    <View style={globalStyles.flexColumn}>
                        <Text style={styles.subtitle2}>Total pay</Text>
                    </View>
                    <View style={[globalStyles.flexColum, { alignItems: 'flex-end', right: hp('5%') }]}>
                        <Text style={styles.price}>$ 100000</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', right: '4%', paddingTop: hp('3%') }}>
                    <TouchableOpacity style={styles.checkout}>
                        <Text style={styles.checktext}>Check out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
};
export default cart;