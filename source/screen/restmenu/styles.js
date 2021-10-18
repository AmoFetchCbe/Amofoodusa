import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color, { colors } from '../../globlestyles/color'
import { fontProperties } from '../../globlestyles/Font';

const styles = StyleSheet.create({
    subcont: {
        flex: 1,
        paddingVertical:hp('.5%')
    },
    subtitle:{
        fontSize:hp('2.2%'),
        fontFamily:fontProperties.semiBold,
        color:Color.secoundColor
    },
    catText:{
        top:hp('1%'),
        fontFamily:fontProperties.regular,
        fontSize:hp('1.8%'),
        textAlign:'center'
    },
    subWapper:{
        marginLeft:hp('2%'),
        paddingVertical:hp('1%')
    },
    bannertitle:{
        fontFamily:fontProperties.semiBold,
        fontSize:hp('3%'),
        color:Color.white
    },
    popup:{
        backgroundColor:Color.white,
        //padding:hp('2%'),
        borderRadius:hp('2%')
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    title:{
        fontSize:hp('2%'),
        fontFamily:fontProperties.semiBold
    },
    title2:{
        fontSize:hp('1.8%'),
        fontFamily:fontProperties.regular,
        color:'gray'
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
    price:{
        fontSize:hp('2%'),
        fontFamily:fontProperties.semiBold,
        color:'gray',
        top:hp('1%')
    },
    image:{
        width:'100%',
        height:'100%'
    },
    imageWapper:{
        height:hp('35%')
    },
});

export default styles;
