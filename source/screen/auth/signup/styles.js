import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color, { colors } from '../../../globlestyles/color'
import { fontProperties } from '../../../globlestyles/Font';

const styles = StyleSheet.create({
    subcont: {
        flex: 1,
        justifyContent:'center',
        
        //paddingHorizontal:hp('2%'),
        //paddingVertical:hp('1%')
      
    },
    welcome:{
        fontSize:hp('3%'),
        fontFamily:fontProperties.semiBold,
        color:Color.secoundColor
    },
    acoount:{
        fontSize:hp('2%'),
        fontFamily:fontProperties.italic,
        //color:Color.gray,
        marginLeft:hp('.5%')
    },
    textInputView:{
        paddingVertical:hp('1.5%'),
    },
    textinput: {
        fontFamily: fontProperties.regular,
        fontSize: hp('1.8%'),
        backgroundColor: colors.white
    },
    button:{
        width:'100%',
        height:hp('6%'),
        backgroundColor:Color.secoundColor,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:hp('1%')
    },
    loginText:{
        fontSize: hp('2.2%'),
        color:Color.white,
        fontFamily:fontProperties.semiBold
    },
    loginTitle:{
        fontSize: hp('2.3%'),
        color:Color.white,
        fontFamily:fontProperties.semiBold
    },
    loginText2:{
        fontSize: hp('2%'),
        color:Color.black,
        fontFamily:fontProperties.semiBold
    },
    forgot:{
        fontSize: hp('2%'),
        color:colors.black
    },
    img:{
        width:'100%',
        height:hp('50%'),
        opacity: 0.8
    },
    img2:{
        width:'100%',
        height:hp('50%'),
        backgroundColor:Color.black
    }
});

export default styles;
