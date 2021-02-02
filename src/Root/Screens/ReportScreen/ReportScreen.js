import React,{Component} from 'react';
import styles from './ReportScreenStyle';
import {Text,View,TouchableOpacity,Image,FlatList} from 'react-native';
import {Container,Content,Footer,Button,Icon} from 'native-base';
import {backarrow,filter} from 'src/assets';
import LoanData from "./LoanData";
const DATA = [{id:1},{id:2}];
class LoginScreen extends Component{
    render() {
        return (
            <Container>
                <View style={styles.headerCont}>
                    <Image
                        source={backarrow}
                        style={styles.backArrowImg}
                    />
                    <Text style={styles.headerTitleTxt}>Loan Investment Report</Text>
                </View>
                <Content style={styles.mainCont}>
                    <FlatList
                        data={DATA}
                        style={{margin: 15}}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <LoanData />
                        )}
                        keyExtractor={item => item.id}
                    />

                </Content>
                <TouchableOpacity style={styles.fabBtn}>
                    <Image
                        source={filter}
                        style={styles.plusBtn}
                    />
                </TouchableOpacity>
            </Container>
        );
    }
}
export default LoginScreen;

