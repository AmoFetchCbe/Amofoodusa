import React, { useEffect, useState } from 'react';
// Library
import { View, Text, ImageBackground, Image, StatusBar, Dimensions, LogBox } from 'react-native';
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
import InputSpinner from "react-native-input-spinner";
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = hp('25%');

const details = (props) => {
    const [value, setValues] = useState({
        select:'',
        price:'1',
        buy:'125'
    });
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])
    const array = [
        {
            key: '1',
            title: 'Apple',
            image: Images.img,
            id:'1'

        },
        {
            key: '2',
            title: 'Cheery',
            image: Images.img,
            id:'2'
        },
        {
            key: '3',
            title: 'Leamon',
            subtitle: 'example subtitle 3',
            image: Images.img,
            id:'3'
        },
        {
            key: '4',
            title: 'Leamon',
            subtitle: 'example subtitle 3',
            image: Images.img,
            id:'4'
        },
        {
            key: '5',
            title: 'Leamon',
            subtitle: 'example subtitle 3',
            image: Images.img,
            id:'5'
        },
        {
            key: '6',
            title: 'Leamon',
            subtitle: 'example subtitle 3',
            image: Images.img,
            id:'6'
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



    const renderPage = (image, index) => {
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
    const select = (index, item) => {
        const foods = [...array];
        foods[index].checked = !foods[index].checked;
        setValues({...value,select:item.id})
        console.log(value.select)
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
                    <View style={styles.detailWapper}>
                        <View>
                            <Text style={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing</Text>
                        </View>
                        <View>
                            <Text style={styles.price}>
                                $ 125
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.subtitle2}>Side Dish</Text>
                        </View>
                        <View style={styles.propertyWapper}>
                            {array.map((item, index) => {
                                return (

                                    <View key={item.key} style={{ paddingHorizontal: hp('1.5%'),  }}>
                                        <TouchableOpacity key={item.key} onPress={() => { select(index, item) }}>
                                            <View style={item.key === value.select ? styles.Selectarea : styles.unSelectarea}>
                                                <Text  style={item.key === value.select ? styles.SelectText : styles.unSelectText}>{item.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                );
                            })
                            }
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', paddingHorizontal: hp('12%'), paddingTop: hp('5%') }}>
                        <InputSpinner
                            max={100}
                            min={1}
                            step={2}
                            skin={'clean'}
                            value={value.price}
                            onChange={(num) => { setValues({...value,price:num}) }} />
                    </View>

                    <View style={styles.textInputView}>
                        <View style={[globalStyles.row, { borderWidth: hp('.15%'), borderRadius: hp('2%') }]}>
                            <View style={{ flex: 0.5 }}>
                                <TouchableOpacity onPress={() => { props.navigation.navigate('cart') }} >
                                    <View style={styles.button2}>
                                        <Text style={styles.loginText2}>${value.buy*value.price}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity onPress={() => { props.navigation.navigate('cart') }} >
                                    <View style={styles.button}>
                                        <Text style={styles.loginText}>Add To Cart</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                </View>
            </ScrollView>
        </View>

    )
};
export default details;