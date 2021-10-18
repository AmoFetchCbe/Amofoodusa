import React, { useEffect, useState } from 'react';
// Library
import { View, Text, ImageBackground, Image, StatusBar, Dimensions, LogBox, FlatList, TextInput, PermissionsAndroid } from 'react-native';
///styles
import globalStyles from '../../globlestyles/styles';
import styles from './styles';
import colors from '../../globlestyles/color';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons, IconsType } from '../../globlestyles/Icon';
import { Sizes } from '../../globlestyles/Size';
import { Icon } from 'react-native-elements';
;
import Images from '../../globlestyles/Imagepath';
import Carousel from 'react-native-banner-carousel';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import firestore from '@react-native-firebase/firestore';
import Loader from '../../components/loader';


const Tab = createMaterialTopTabNavigator();
const Home = (props) => {
    // const Width = Dimensions.get('window').width;
    // const tabBarWidth = Width - 32;
    const BannerWidth = Dimensions.get('window').width;
    const BannerHeight = hp('30%');
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [banners, setBanner] = useState([]);
    const [categories, setCategories] = useState([]);
    const [mostdish, setMostDish] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        'Wait, we are fetching you location...'
    );
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        setIsLoading(true)
        getbanner()
        getCats()
        getMostdish()
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
                subscribeLocationLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        getOneTimeLocation();
                        //GetCurrentLocation()
                        subscribeLocationLocation();
                    } else {
                        setLocationStatus('Permission Denied');
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
        return () => {
            Geolocation.clearWatch(watchID);
        };

    }, [])
    //console.log('Banner>>>>>',banners)

    const getbanner = async () => {
        setIsLoading(true)
        const banner = [];
        firestore()
            .collection('banners')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => sasasa ", doc.data());
                    banner.push(doc.data())
                });
                setBanner(banner)
            });
        setIsLoading(false)
    }
    const getCats = async () => {
        setIsLoading(true)
        const cats = [];
        firestore()
            .collection('categories')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => sasasa ", doc.data());
                    cats.push(doc.data());
                });
                setCategories(cats)
                console.log('>>>>>', cats)
            });
        setIsLoading(false)
    }
    const getMostdish = async () => {
        setIsLoading(true)
        const dish = [];
        firestore()
            .collection('mostpopulardish')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => sasasa ", doc.data());
                    dish.push(doc.data());
                });
                setMostDish(dish)
                //console.log('>>>>>',cats)
            });
        setIsLoading(false)
    }
    //   console.log('>>>>>',displayCurrentAddress)
    const [
        currentLongitude,
        setCurrentLongitude
    ] = useState('...');
    const [
        currentLatitude,
        setCurrentLatitude
    ] = useState('...');
    const [
        locationStatus,
        setLocationStatus
    ] = useState('');

    const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                setLocationStatus('You are Here');
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);
                setCurrentLongitude(currentLongitude);
                setCurrentLatitude(currentLatitude);
            },
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            },
        );
    };

    const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
            (position) => {
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);
                Geocoder.init('AIzaSyBLFi1riFNCErkZNkHvYin_l_PFUvvfHXU')
                Geocoder.from(position.coords.latitude, position.coords.longitude)
                    .then(json => {
                        // console.log(json);
                        var addressComponent = json.results[0].formatted_address;
                        setLocationStatus(addressComponent);
                    })
                    .catch(error => console.warn(error));
                setCurrentLongitude(currentLongitude);
                setCurrentLatitude(currentLatitude);
            },
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 1000
            },
        );
    };



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
        {
            key: '5',
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
    const renderPage = (image, index, props) => {
        return (
            <View key={index}>

                <ImageBackground
                    style={{ width: BannerWidth, height: BannerHeight, justifyContent: 'center', alignItems: 'center' }}
                    source={{ uri: image.banner }}
                // imageStyle={{ opacity: 0.6, backgroundColor: 'rgba(0,0,0,0.9)' }}
                >
                    {/* <Text style={styles.bannertitle}>{banners.name}</Text> */}
                </ImageBackground>

            </View>
        );
    }
    return (
        <View style={globalStyles.mainCont}>
            <Loader isLoading={isLoading} />
            <View style={styles.subcont}>
                <StatusBar backgroundColor={colors.black} translucent={true} />
                <View style={styles.subWapper2}>
                    <Text style={styles.subtitle}>Curret Loacation</Text>
                    <View style={{ paddingHorizontal: hp('1%') }}>
                        <Text style={styles.subtitle} numberOfLines={1}> {locationStatus}</Text>
                    </View>
                    <View style={{ paddingVertical: hp('1%') }}>
                        <View style={styles.place}>
                            <View style={globalStyles.row}>
                                <View style={{ flex: 1 }}>
                                    <TextInput
                                        placeholder='Search '
                                        style={{ backgroundColor: colors.white }}
                                    />
                                </View>
                                <View style={{ flex: 0.1, justifyContent: 'center' }}>
                                    <TouchableOpacity>
                                        <Icon type={IconsType.fontAwesome}
                                            name={Icons.search}
                                            color={colors.black}
                                            size={hp('3%')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                {/* <Tab.Navigator tabBarOptions={{
                activeColor: colors.black,
                activeTintColor: colors.black,
                inactiveTintColor: colors.white,
                //  tabStyle: {
                //      width: '50%'
                //  },
                indicatorStyle: {
                    height: null,
                    top: 0,
                    backgroundColor: colors.white,
                    borderRadius: hp('20%')
                },
                tabStyle: {
                    justifyContent: "center",
                    width: tabBarWidth / 2,
                    borderTopRightRadius: hp('25%'), borderBottomRightRadius: hp('25%'),

                },
                style: {
                    // paddingVertical:hp('2%'),
                    marginLeft: hp('2%'),
                    marginRight: hp('2%'),
                    borderWidth: hp('.15%'),
                    borderRadius: hp('3%'),
                    height: hp('6%'),
                    borderColor: colors.black,
                    backgroundColor: colors.black,
                },
                labelStyle: {
                    marginTop: -4
                },
                labelStyle: { fontSize: hp('1.8%'), fontFamily: fontProperties.bold, textTransform: 'capitalize' },
            }}>
                <Tab.Screen name="Delivery" component={Delivery} />
                <Tab.Screen name="SelfPickup" component={Selfpick} />
            </Tab.Navigator> */}

                <ScrollView>
                    <View style={styles.subWapper2}>
                        <Text style={styles.subtitle}>Popular Catageries</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {categories.map((element) => {
                            return (
                                <View key={element.key} style={{ paddingHorizontal: hp('1.5%'), paddingVertical: hp('1%') }}>
                                    <Image
                                        source={{ uri: element.image }}
                                        style={{ height: hp('8%'), width: hp('8%'), borderRadius: hp('8%') }}
                                    />
                                    <Text style={styles.catText}>{element.name}</Text>
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
                        {banners.map((image, index) => renderPage(image, index))}
                    </Carousel>
                    <View style={styles.subWapper2}>
                        <Text style={[styles.subtitle, { paddingTop: hp('1%') }]}>Most Popular Dish</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {mostdish.map((element) => {
                            return (
                                <View key={element.id} style={{ paddingHorizontal: hp('1.5%'), paddingVertical: hp('1%') }}>
                                    <TouchableOpacity onPress={() => { props.navigation.navigate('details') }}>
                                        <ImageBackground
                                            style={{ width: hp('46%'), height: BannerHeight, justifyContent: 'center', alignItems: 'center' }}
                                            source={{ uri: element.image }}
                                            imageStyle={{ opacity: 0.6, backgroundColor: 'rgba(0,0,0,0.9)', borderRadius: hp('2%') }}
                                        >
                                            <Text style={styles.bannertitle}>{element.name}</Text>
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
                                                    <View style={styles.cricle}>
                                                        <TouchableOpacity>
                                                            <Icon type={IconsType.fontAwesome}
                                                                name={Icons.hearto}
                                                                color={colors.white}
                                                                size={Sizes.headerMeneIcon} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{ paddingHorizontal: hp('1%'), paddingVertical: hp('.5%') }}>
                                                    <Text style={styles.title}>Marry's Break Fast</Text>
                                                    <View style={globalStyles.row}>
                                                        <View style={{ marginLeft: hp('.2%'), top: hp('.5%') }}>
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
                </ScrollView>
            </View>
        </View>

    )
};
export default Home;