import React,{ useEffect, useState, useCallback, }  from 'react';
import { View, Text, Image, Platform, Keyboard, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Header, ThemeConsumer } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Sizes } from '../globlestyles/Size';
import { Icons, IconsType } from '../globlestyles/Icon';
import Color, { colors } from '../globlestyles/color';


const HeaderComponent = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const ModalClose = () => {
        setModalVisible(!modalVisible)
    }

    const leftHandler = (navigation) => {
        if (props.left === 'back') {
           
            return (
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.goBack()
                    }} >
                    <Icon type={IconsType.ionIcon}
                        name={Icons.back}
                        color={Color.black}
                        size={Sizes.inputIcons2}
                        style={{paddingTop:hp('.5%')}} />
                </TouchableOpacity>
            );
        } else if (props.left === 'menu') {

            return (
                <TouchableOpacity
                    onPress={() => {
                        //props.navigation.goBack()
                    }}>
                    <Icon type={IconsType.ionIcon}
                        name={Icons.menu}
                        color={Color.black}
                        size={Sizes.headerMeneIcon} />
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    };

    const myRightComponent = () => {
        if (props.right === 'cart') {
            return (
                <TouchableOpacity
                    onPress={() => {
                      // setModalVisible(true)
                    }}>
                    <Icon type={IconsType.ionIcon}
                        name={Icons.cart}
                        color={Color.black}
                        size={Sizes.headerMeneIcon}/>
                </TouchableOpacity>
            );
        } else if (props.right === 'menu') {

            return (
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.goBack()
                    }}>
                    <Icon type={IconsType.fontAwesome}
                        name={Icons.filter}
                        color={Color.black}
                        size={Sizes.headerMeneIcon} />
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    }

    return (
        <View>
            <Header
             
                containerStyle={styles.header}
                statusBarProps={{ backgroundColor: colors.primaryColor }}
                leftComponent={leftHandler()}
                rightComponent={myRightComponent()}
                centerComponent={{ text: props.title, style: styles.title }}
               
            />
            
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        // height: hp('15%'),
        elevation: 5,
        backgroundColor:colors.primaryColor
    },
    // middle
    title: {
        color: Color.black,
        fontSize: hp('2%'),
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingTop: hp('.5%'),
        letterSpacing:0.1

    },

});

export default HeaderComponent;
