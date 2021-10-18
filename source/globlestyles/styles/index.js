import { StyleSheet,Dimensions, } from 'react-native';


const globalStyles = StyleSheet.create({
    mainCont: {
        width: '100%',
        height: '100%',
    },
    mainCont2: {
        width: '100%',
        height: '100%',
        backgroundColor:'#fff'
    },
    flexColumn: {
        flex: 1,
       
    },
    flexColumn2: {
        flex: 1,
       justifyContent:'center'
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row'
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flexDirection: 'column'
    },
   
   
});

export default globalStyles;