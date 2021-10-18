import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Color, { colors } from '../../globlestyles/color'
import { fontProperties } from '../../globlestyles/Font';

const styles = StyleSheet.create({
    subcont: {
        flex: 1,
        paddingVertical:hp('2%'),
        paddingHorizontal:hp('2%'),
        backgroundColor:Colors.white
    },
   
    subtitle:{
        fontSize:hp('2.2%'),
        fontFamily:fontProperties.semiBold,
        color:Color.gray
    },
    mainCont:{
        paddingHorizontal:hp('1.5%'),
        flex:1
      },
      faqQue: {
        color:'#333',
        fontWeight:'800',
        fontFamily:fontProperties.semiBold,
        fontSize: hp('2%'),
      },
     
      faqAns: {
        color: '#333',
        fontSize: hp('1.7'),
        fontFamily:fontProperties.regular,
        //textAlign: 'justify',
        lineHeight: hp('2.8'),
        marginHorizontal:20,
      },
      title:{
        fontFamily:fontProperties.bold,
        fontSize:hp('2.5%'),
        color:colors.black
    }
});

export default styles;
