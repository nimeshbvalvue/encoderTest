import {StyleSheet} from 'react-native';
import {color} from 'src/Theme';
import {PixcelWidth} from 'src/Utils'

const styles = StyleSheet.create({
        mainCont: {
            flex: 1,
            padding: PixcelWidth(15),
            backgroundColor: color.mianBGcolor,
            // justifyContent: 'center',
            alignContent: 'center',
        },
        titleTxt: {
            marginTop: PixcelWidth(70),
            fontSize: PixcelWidth(28),
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#FFF'
        },
        loginTxt: {
            marginTop: PixcelWidth(20),
            fontSize: PixcelWidth(22),
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#FFF'
        },
        inputCont: {
            marginTop: PixcelWidth(20),
            backgroundColor: '#1A557F',
            borderColor: '#6A93AE',
            borderWidth: 1,
        },
        fotgotpwdTxt:{
            marginTop: PixcelWidth(10),
            fontSize: PixcelWidth(14),
            textAlign: 'right',
            color: '#FFF'
        },
    fingerImg:{
            marginTop:PixcelWidth(20),
        height:PixcelWidth(50),
        width:PixcelWidth(50),
        tintColor:'#5A8099',
        alignSelf:'center'
    },
    loginBtn:{
            marginTop:PixcelWidth(40),
            backgroundColor:color.btncolor,
        borderRadius:PixcelWidth(25),

    },
    loginBtnTxt:{
        fontSize: PixcelWidth(16),
        margin:PixcelWidth(13),
        textAlign: 'center',
        color: '#FFF'
    },
    footerCont:{
        backgroundColor:color.mianBGcolor,
        //height:PixcelWidth(200),
    },
    footerTitleTxt:{
        fontSize: PixcelWidth(24),
        fontWeight:'bold',
        marginTop:PixcelWidth(12),
        textAlign: 'center',
        color: '#FFF'
    },
    footerBtnCont:{
            flexDirection:'row',
            justifyContent:'space-between',
        paddingHorizontal:PixcelWidth(25),
        marginVertical:PixcelWidth(20),
    },
    applynowBtn:{
      backgroundColor:color.btncolor,
      borderRadius: PixcelWidth(25)
    },
    applynowBtnTxt:{
        fontSize: PixcelWidth(16),
        marginHorizontal:PixcelWidth(45),
        marginVertical:PixcelWidth(12),
        textAlign: 'center',
        color: '#FFF'
    },

});
export default styles;
