import React, { useEffect, useState } from 'react';
// Library
import { View, Text, ImageBackground, Image, StatusBar, Dimensions, LogBox, FlatList, Alert } from 'react-native';
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
import firestore from '@react-native-firebase/firestore';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = hp('25%');

const Account = (props) => {
    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // });
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        getProfile()
    }, [])

    const getProfile = async ()  => {
        firestore()
        .collection('users')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => sasasa ", doc.data());
                // let banner = doc.data()
                // setBanner(banner)
                // console.log('>>>>>',banner)
            });
        });
    }
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
            title: 'Manage Address',

        },
        {
            id: '2',
            image: Images.img4,
            title: 'Favourites',

        }, {
            id: '3',
            image: Images.img4,
            title: 'Settings',


        },
        {
            id: '4',
            image: Images.img4,
            title: 'Help',
        }, {
            id: '5',
            image: Images.img4,
            title: 'FAQs',


        },

    ];

    const images2 = [
        {
            id: '1',
            image: Images.img4,
            title: 'Manage Address',

        },
        {
            id: '2',
            image: Images.img4,
            title: 'Favourites',

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
            <StatusBar backgroundColor={colors.black} translucent={true} />
            <ScrollView>
                <View style={styles.subcont}>
                    <View style={styles.profileWapper}>
                        <Text style={styles.subtitle}> My Account </Text>
                        <View style={[globalStyles.row, { paddingTop: hp('2%'), paddingHorizontal: hp('2%') }]}>
                            <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={Images.profile}
                                    style={{ width: hp('10%'), height: hp('10%'), borderRadius: hp('10%') }}
                                />
                            </View>
                            <View style={{ flex: 1.2, justifyContent: 'center', marginLeft: hp('1%') }}>
                                <Text style={styles.name}> DON MAC </Text>
                                <Text style={styles.email}> DAN45@gmail.com   </Text>

                            </View>
                            <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => { props.navigation.navigate('EditProfile') }}>
                                    <Icon type={IconsType.fontAwesome5}
                                        name={Icons.edit}
                                        color={colors.white}
                                        size={hp('5%')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingTop: hp('8%') }}>
                            <Text style={styles.subtitle2}> Hi DON MAC ! </Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: hp('2%'), paddingHorizontal: hp('2%') }}>
                        <View style={{ borderWidth: hp('.20%'), borderRadius: hp('2%'), borderColor: colors.gray }}>
                            {/* {images.map((item, index) => {
                                return (
                                    <View key={item.id} style={{paddingTop:hp('2%')}}>
                                        <TouchableOpacity onPress={() => { props.navigation.navigate('details') }}>
                                            <View style={[globalStyles.row, { borderBottomWidth: hp('.15%') }]}>
                                                <View style={{ flex: 0.2 }}>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.bannertitle}>{item.title}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })
                            } */}
                            <TouchableOpacity onPress={() => { props.navigation.navigate('AddressManage') }}>
                                <View style={[globalStyles.row, { paddingVertical: hp('2%'), borderBottomWidth: hp('.15%'), borderColor: colors.gray }]}>
                                    <View style={{ flex: 0.2 }}>
                                        <Icon type={IconsType.entypo}
                                            name={Icons.location}
                                            color={colors.black}
                                            size={hp('3%')} />

                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <Text style={styles.bannertitle}>Manage Address</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Wishlist') }}>
                                <View style={[globalStyles.row, { paddingVertical: hp('2%'), borderBottomWidth: hp('.15%'), borderColor: colors.gray }]}>
                                    <View style={{ flex: 0.2 }}>
                                        <Icon type={IconsType.fontAwesome}
                                            name={Icons.heart}
                                            color={colors.black}
                                            size={hp('2.5%')} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.bannertitle}>Favourites</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Setting') }}>
                                <View style={[globalStyles.row, { paddingVertical: hp('2%'), borderBottomWidth: hp('.15%'), borderColor: colors.gray }]}>
                                    <View style={{ flex: 0.2 }}>
                                        <Icon type={IconsType.ionIcon}
                                            name={Icons.setting}
                                            color={colors.black}
                                            size={hp('2.5%')} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.bannertitle}>Setting</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Faq') }}>
                                <View style={[globalStyles.row, { paddingVertical: hp('2%'), borderBottomWidth: hp('.15%'), borderColor: colors.gray }]}>
                                    <View style={{ flex: 0.2 }}>
                                        <Icon type={IconsType.fontAwesome}
                                            name={Icons.question}
                                            color={colors.black}
                                            size={hp('2.5%')} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.bannertitle}>FAQs</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                Alert.alert(
                                    'Logout',
                                    'Do You Want to Logout?',
                                    [
                                        {
                                            text: 'Cancel',
                                            onPress: () => {
                                                return null;
                                            },
                                        },
                                        {
                                            text: 'Yes',
                                            onPress: () => {
                                                // logouthandle()
                                            },
                                        },
                                    ],
                                    { cancelable: false },
                                );
                            }}>
                                <View style={[globalStyles.row, { paddingVertical: hp('2%') }]}>
                                    <View style={{ flex: 0.2 }}>
                                        <Icon type={IconsType.ionIcon}
                                            name={Icons.logout}
                                            color={colors.black}
                                            size={hp('2.5%')} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.bannertitle}>Logout</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>

    )
};
export default Account;