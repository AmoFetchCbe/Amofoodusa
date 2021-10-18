import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color, { colors } from '../../globlestyles/color'
import { fontProperties } from '../../globlestyles/Font';

const styles = StyleSheet.create({
    subcont: {
        flex: 1,
        paddingVertical: hp('2%'),
        paddingHorizontal: hp('2%'),
    },
    subtitle: {
        fontSize: hp('2.5%'),
        fontFamily: fontProperties.semiBold,
        color: Color.secoundColor
    },
    subtitle2: {
        fontSize: hp('2%'),
        fontFamily: fontProperties.semiBold,
        color: Color.secoundColor
    },
    price: {
        fontSize: hp('2%'),
        fontFamily: fontProperties.regular,
        color: Color.black
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageWapper: {
        height: hp('35%')
    },
    detailWapper: {
        paddingVertical: hp('1%'),
        paddingHorizontal: hp('2%')
    },

    normal: {
        fontSize: hp('1.8%'),
        fontFamily: fontProperties.regular
    },
    button: {
        width: '100%',
        height: hp('6%'),
        backgroundColor: Color.secoundColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp('1%')
    },
    loginText: {
        fontSize: hp('2.2%'),
        color: Color.white,
        fontFamily: fontProperties.semiBold
    },
    textInputView: {
        paddingHorizontal: hp('2%')
    },
    button: {
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: Color.black,
        width: hp('5%'),
        height: hp('4%'),
        borderRadius:hp('1%'),
        justifyContent: 'center', alignItems: 'center'
    },
    number: {
        width: hp('5%'),
        height: hp('4%'),
        textAlign: 'center',
        paddingHorizontal: 7,
        paddingTop: 3,
        color:colors.black,
        fontSize:hp('2%'),
    },
    centerElement:{
        alignItems:'flex-end',
        justifyContent:'center',
        right:hp('2% ')
    },
    price:{
        color: '#333333', 
        marginBottom:hp('1%'),
        fontFamily:fontProperties.regular,
        fontSize:hp('2%')
    },
    checkout:{
        width:hp('15%'),
        height:hp('5%'),
        backgroundColor:Color.black,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:hp('2%')
    },
    checktext:{
        color:colors.white, 
        fontFamily:fontProperties.semiBold,
        fontSize:hp('2%')
    },
    Popup:{
        paddingHorizontal:hp('2%'),
        //borderBottomColor:colors.gray,
       
        
    },
    addTip:{
        fontSize:hp('1.8%'),
        fontFamily:fontProperties.semiBold
    },
    offerbox:{
        borderWidth:hp('.15%'),
        padding:hp('1%'),
        borderColor:colors.gray
    }
});

export default styles;
