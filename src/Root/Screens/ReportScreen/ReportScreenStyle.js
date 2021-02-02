import {StyleSheet} from 'react-native';
import {color} from 'src/Theme';
import {PixcelWidth} from 'src/Utils'

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        //padding: PixcelWidth(15),
        backgroundColor: '#F6F6F6',
        // justifyContent: 'center',
        alignContent: 'center',
        marginBottom:20,
    },
    headerCont:{
        flexDirection:'row',
        padding:PixcelWidth(15),
        alignItems:'center',
        backgroundColor: color.headerBGcolor,
        borderBottomLeftRadius:PixcelWidth(25),
        borderBottomRightRadius:PixcelWidth(25),
    },
    backArrowImg:{
        marginTop:15,
        height:PixcelWidth(15),
        width:PixcelWidth(25),
        tintColor:'#FFF'
    },
    headerTitleTxt: {
        flex:1,
        marginTop:15,
        fontSize: PixcelWidth(22),
        // fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF'
    },
    fabBtn:{
      height:PixcelWidth(50),
      width:PixcelWidth(50),
        right:15,
        bottom:20,
        position:'absolute',
        borderRadius:PixcelWidth(25),
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    plusBtn:{
        height:PixcelWidth(25),
        width:PixcelWidth(25),
        tintColor: color.headerBGcolor,
    },


});
export default styles;
