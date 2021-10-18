import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Color, { colors } from '../../globlestyles/color'
import { fontProperties } from '../../globlestyles/Font';

const styles = StyleSheet.create({
    subcont: {
        flex: 1,
        paddingVertical:hp('5%'),
        backgroundColor:Colors.white
    },
    subcont2: {
        flex: 1,
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
        paddingVertical:hp('2%')
    },
     subWapper2:{
      paddingHorizontal:hp('2%'),
      paddingVertical:hp('1%')
      
    },
    bannertitle:{
        fontFamily:fontProperties.semiBold,
        fontSize:hp('3%'),
        color:Color.white
    },
    popup:{
        // backgroundColor:Color.white,
        // padding:hp('2%'),
        // borderRadius:hp('2%')
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
    normal:{
        fontSize:hp('2%'),
        fontFamily:fontProperties.semiBold,
        color:'gray'
    },
    title2:{
        fontSize:hp('2%'),
        fontFamily:fontProperties.semiBold,
        color:'gray'
    },
    place:{
        borderWidth:hp('.15%'),
        //borderColor:colors.gray,
        borderRadius:hp('5%'),
        paddingHorizontal:hp('3%')
    },
    cricle:{
        position:'absolute',
        top:hp('1%'),
        left:'90%'
    }
});

export default styles;
