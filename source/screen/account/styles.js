import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color, { colors } from '../../globlestyles/color'
import { fontProperties } from '../../globlestyles/Font';

const styles = StyleSheet.create({
    subcont: {
        flex: 1,
        //paddingVertical: hp('6%'),
    },
    subtitle: {
        
        fontSize: hp('2.2%'),
        fontFamily: fontProperties.semiBold,
        color: Color.white,
        marginLeft: hp('3%')
    },
    subtitle2: {
        
        fontSize: hp('2.5%'),
        fontFamily: fontProperties.semiBold,
        color: Color.white,
        marginLeft: hp('3%')
    },
    catText: {
        top: hp('1%'),
        fontFamily: fontProperties.regular,
        fontSize: hp('1.8%'),
        textAlign: 'center'
    },
    subWapper: {
        marginLeft: hp('2%'),
        paddingVertical: hp('1%')
    },
    bannertitle: {
        fontFamily: fontProperties.semiBold,
        fontSize: hp('2%'),
        color: Color.black
    },
    popup: {
        backgroundColor: Color.white,
        //padding:hp('2%'),
        borderRadius: hp('2%')
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    title: {
        fontSize: hp('2%'),
        fontFamily: fontProperties.semiBold,
        marginLeft:hp('2%')
    },
    title2: {
        fontSize: hp('1.8%'),
        fontFamily: fontProperties.regular,
        color: 'gray'
    },
    button: {
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: Color.black,
        width: hp('5%'),
        height: hp('4%'),
        borderRadius: hp('1%'),
        justifyContent: 'center', alignItems: 'center'
    },
    number: {
        width: hp('5%'),
        height: hp('4%'),
        textAlign: 'center',
        paddingHorizontal: 7,
        paddingTop: 3,
        color: colors.black,
        fontSize: hp('2%'),
    },
    price: {
        fontSize: hp('2%'),
        fontFamily: fontProperties.semiBold,
        color: 'gray',
        top: hp('1%')
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageWapper: {
        height: hp('35%')
    },
    box: {
        width: '90%',
        height: hp('6%'),
        borderWidth: hp('.15%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    box2: {
        width: '90%',
        height: hp('6%'),
        borderWidth: hp('.15%'),
        borderColor: '#F7B401',
        alignItems: 'center',
        justifyContent: 'center'
    },
    yetText: {
        fontSize: hp('1.5%'),
        fontFamily: fontProperties.regular,
        color: 'gray',
        top: hp('1%')
    },
    edit: {
        fontFamily: fontProperties.semiBold,
        fontSize: hp('2%'),
        left: hp('.5%'),
        textDecorationLine: 'underline'
    },
    name:{
        fontFamily:fontProperties.semiBold,
        fontSize:hp('2.5%'),
        color:colors.white
    },
    email:{
        fontFamily:fontProperties.regular,
        fontSize:hp('2%'),
        color:colors.white,
        left:hp('.1%')
    },
    profileWapper:{
        backgroundColor:colors.black,
        height:hp('35%'),
        paddingVertical:hp('5%')
    }
});

export default styles;
