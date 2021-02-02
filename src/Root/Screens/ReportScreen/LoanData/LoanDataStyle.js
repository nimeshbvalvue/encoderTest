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
    },
    flatlistCont:{
        marginTop:PixcelWidth(15),
        //padding:PixcelWidth(15),
        borderRadius:PixcelWidth(10),
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow:'hidden',
    },
    appNoTxt:{
        fontSize:PixcelWidth(16),
        color:'#9D9D9D',
    },
    amtTxt:{
        fontSize:PixcelWidth(20),
        fontWeight:'bold',
        marginTop: PixcelWidth(10),
        color:color.headerBGcolor,
    },
    brIdTxt:{
        fontSize:PixcelWidth(18),
        color:'red',
        marginTop:PixcelWidth(5),
    },
    balanceCont:{
        marginTop:PixcelWidth(10),
        flexDirection:'row',
        alignItems:'center',
        //justifyContent:'space-between'
    },
    balanceContTxt:{
        color:color.headerBGcolor,
        width:'60%',
        fontSize:PixcelWidth(16),
    },
    balanceContAmt:{
        //flex:1,
        flexDirection:'row',alignItems:'center',
        //marginLeft:20
    },
    rupeeImg:{
        marginHorizontal:PixcelWidth(5),
        height:PixcelWidth(13),
        width:PixcelWidth(13),
    },
    termCont:{
        marginTop:PixcelWidth(20),
        flexDirection:'row',
        justifyContent:'center',
    },
    tenurCont:{
        justifyContent:'center',
        alignItems:'center',
        width:'52%',
    },
    tenurNoText:{
        fontSize:PixcelWidth(18),
        fontWeight: 'bold',
        color:color.headerBGcolor,
    },
    tenurText:{
        fontSize:PixcelWidth(16),
        fontWeight: 'bold',
        color:'#9D9D9D',
    },
    line:{
        borderWidth:1,
        //marginHorizontal: '18%',
        height: PixcelWidth(45),
    },
    paymentCont:{
        backgroundColor:'#F3F3F2',

        marginTop:PixcelWidth(10),
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    payDate:{

    },
    payDateTxt:{
        fontSize:PixcelWidth(12),
        //fontWeight: 'bold',
        color:'#9D9D9D',
    },
    paymentDate:{
            fontSize:PixcelWidth(18),
        marginTop:PixcelWidth(5),
            //fontWeight: 'bold',
            color:color.headerBGcolor,
    },
    payStatus:{
        fontSize:PixcelWidth(18),
        marginTop:PixcelWidth(5),
        fontWeight: '400',
        alignSelf:'flex-end',
        color:'#F8BE62',
    }

});
export default styles;
