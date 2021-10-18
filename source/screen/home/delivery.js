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

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = hp('25%');

const Delivery = (props) => {
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
               
                    <ImageBackground
                        style={{ width: BannerWidth, height: BannerHeight, justifyContent: 'center', alignItems: 'center' }}
                        source={image.image}
                        imageStyle={{ opacity: 0.6, backgroundColor: 'rgba(0,0,0,0.9)' }}
                    >
                        <Text style={styles.bannertitle}>{image.title}</Text>
                    </ImageBackground>
              
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
                <View style={styles.subcont2}>
                    <View style={styles.subWapper2}>
                        <Text style={styles.subtitle}>Popular Catageries</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {array.map((element) => {
                            return (
                                <View key={element.key} style={{ paddingHorizontal: hp('1.5%'), paddingVertical: hp('1%') }}>
                                    <Image
                                        source={element.image}
                                        style={{ height: hp('8%'), width: hp('8%'), borderRadius: hp('8%') }}
                                    />
                                    <Text style={styles.catText}>{element.title}</Text>
                                </View>
                            );
                        })
                        }
                    </ScrollView>
                    <View style={styles.subWapper}>
                        <Text style={styles.subtitle}>Best Deals</Text>
                    </View>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={BannerWidth}
                        pageIndicatorStyle={{ backgroundColor: colors.black, width: hp('2%'), height: hp('2%'), borderRadius: hp('2%') }}
                        activePageIndicatorStyle={{ backgroundColor: colors.white, width: hp('2%'), height: hp('2%') }}
                        pageIndicatorOffset={hp('3.27%')}

                    >
                        {images.map((image, index) => renderPage(image, index))}
                    </Carousel>
                    <View style={styles.subWapper}>
                        <TouchableOpacity>
                            <Text style={styles.subtitle}>Most Popular Dish</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {images.map((element) => {
                            return (
                                <View key={element.id} style={{ paddingHorizontal: hp('1.5%'), paddingVertical: hp('1%') }}>
                                    <TouchableOpacity onPress={() => { props.navigation.navigate('details') }}>
                                        <ImageBackground
                                            style={{ width: hp('46%'), height: BannerHeight, justifyContent: 'center', alignItems: 'center' }}
                                            source={element.image}
                                            imageStyle={{ opacity: 0.6, backgroundColor: 'rgba(0,0,0,0.9)', borderRadius: hp('2%') }}
                                        >
                                            <Text style={styles.bannertitle}>{element.title}</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                            );
                        })
                        }
                    </ScrollView>
                    <View style={styles.subWapper}>
                        <TouchableOpacity>
                            <Text style={styles.subtitle}>Near By Restaurants</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: hp('2%') }}>
                        <FlatList
                            data={images}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => {

                                return (
                                    <View style={{ paddingVertical: hp('.5%') }}>

                                        <TouchableOpacity onPress={() => { props.navigation.navigate('Rest') }}>
                                            <View style={styles.popup}>
                                                <View style={{ width: '100%', height: hp('20%') }}>
                                                    <Image
                                                        source={Images.img4}
                                                        style={{ width: '100%', height: '100%' }}
                                                        resizeMode='cover'
                                                    />
                                                </View>
                                                <View style={{ paddingHorizontal: hp('1%'), paddingVertical: hp('.5%') }}>
                                                    <Text style={styles.title}>Marry's Break Fast</Text>
                                                    <View style={globalStyles.row}>
                                                    <View style={{marginLeft:hp('.2%'),top:hp('.5%')}}> 
                                                        <Icon type={IconsType.materialCommunity}
                                                            name={Icons.time}
                                                            color={colors.black}
                                                            size={Sizes.inputIcons2} />
                                                    </View>
                                                        <Text style={[styles.normal, { top: hp('.5%') }]}> $ 4.00</Text>
                                                        <Text style={[styles.normal, { top: hp('.5%') }]}> Delivery Fee </Text>
                                                        <View style={{
                                                            marginLeft: hp('1%'),
                                                            backgroundColor: colors.gray,
                                                            padding: hp('.5%'),
                                                            borderRadius: hp('1%')
                                                        }}>
                                                            <Text style={styles.title}>15 - 30 min</Text>
                                                        </View>
                                                    </View>
                                                    <View style={globalStyles.row}>
                                                        <Text style={styles.title}>3.00</Text>
                                                        <View style={{ marginLeft: hp('.5%'), }}>
                                                            <Icon type={IconsType.fontAwesome}
                                                                name={Icons.star}
                                                                color={colors.black}
                                                                size={Sizes.inputIcons2} />
                                                        </View>
                                                        <View style={{ marginLeft: hp('.5%') }}>
                                                            <Text style={styles.title}>(2)</Text>
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
export default Delivery;