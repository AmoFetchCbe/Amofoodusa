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

const Restmenu = (props) => {
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

    const renderPage = (image, index, props) => {
        return (
            <View key={index}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Details') }}>
                    <ImageBackground
                        style={{ width: BannerWidth, height: BannerHeight, justifyContent: 'center', alignItems: 'center' }}
                        source={image.image}
                        imageStyle={{ opacity: 0.6, backgroundColor: 'rgba(0,0,0,0.9)' }}
                    >
                        <Text style={styles.bannertitle}>{image.title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }

    const renderPage2 = (image, index, props) => {
        return (
            <View key={index}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Details') }}>

                </TouchableOpacity>
            </View>
        );
    }


    return (
        <View style={globalStyles.mainCont2}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ScrollView>
                <View style={styles.subcont}>
                <View style={styles.imageWapper}>
                        <Image
                            source={Images.img4}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ paddingHorizontal: hp('2%') }}>
                    
                        <FlatList
                            data={images}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ paddingVertical: hp('1.2%') }}>
                                        <TouchableOpacity onPress={() => { props.navigation.navigate('details') }}>
                                            <View style={styles.popup}>
                                                <View style={[globalStyles.row, { borderBottomWidth: hp('.50%'), borderBottomColor: colors.gray }]}>
                                                    <View style={{ flex: 1 }}>
                                                        <View style={{ paddingHorizontal: hp('1%'), paddingVertical: hp('2%') }}>
                                                            <Text style={styles.title}>Marry's Break Fast</Text>
                                                            <Text style={styles.title2}>Break Fast Egg with pron Break Fast Egg with pron Break Fast Egg with </Text>
                                                            <View>
                                                                <Text style={styles.price}>$ 9.99</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{ flex: 0.5, justifyContent: 'center' }}>
                                                        <Image
                                                            source={Images.img4}
                                                            style={{ width: '100%', height: hp('10%'), }}
                                                            resizeMode='contain'
                                                        />
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
export default Restmenu;