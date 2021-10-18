import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color, { colors } from '../../globlestyles/color'
import { fontProperties } from '../../globlestyles/Font';

const styles = StyleSheet.create({
    subcont: {
        flex: 1,
        //paddingVertical:hp('1%')
    },
    subtitle:{
        fontSize:hp('2.2%'),
        fontFamily:fontProperties.semiBold,
        color:Color.secoundColor
    },
    image:{
        width:'100%',
        height:'100%'
    },
    imageWapper:{
        height:hp('35%')
    },
    detailWapper:{
        paddingVertical:hp('1%'),
        paddingHorizontal:hp('2%')
    },
    subtitle2:{
        fontSize:hp('2.2%'),
        fontFamily:fontProperties.bold,
        textDecorationLine: 'underline'
    },
    normal:{
        fontSize:hp('1.8%'),
        fontFamily:fontProperties.regular
    },
    button:{
        width:'100%',
        height:hp('6%'),
        backgroundColor:Color.secoundColor,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:hp('1%')
    },
    button2:{
       // width:'100%',
        height:hp('6%'),
       // backgroundColor:Color.secoundColor,
      // borderWidth:hp('.15%'),
        alignItems:'center',
        justifyContent:'center',
       // borderRadius:hp('1%')
    },
    loginText:{
        fontSize: hp('2.2%'),
        color:Color.white,
        fontFamily:fontProperties.semiBold
    },
    loginText2:{
        fontSize: hp('2.2%'),
        color:Color.black,
        fontFamily:fontProperties.semiBold
    },
    textInputView:{
       paddingHorizontal:hp('2%'),
       paddingTop:hp('15%')
    },
    price:{
        fontFamily:fontProperties.semiBold,
        fontSize:hp('2.5%'),
        color:'gray'
    },
    Selectarea:{
        backgroundColor:Color.black,
        padding:hp('.5%'),
        
        borderRadius:hp('1.2%')
    },
    unSelectarea:{
        //backgroundColor:'red',
        padding:hp('.5%'),
        borderRadius:hp('1%')
    },
    SelectText:{
        fontFamily:fontProperties.semiBold,
        fontSize:hp('2%'),
        color:Color.white
    },
    unSelectText:{
        fontFamily:fontProperties.regular,
        fontSize:hp('2%'),
        color:Color.black
    },
    propertyWapper:{
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    
});

export default styles;
