import React,{Component} from 'react';
import styles from './LoginScreenStyle';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import { TextInput } from 'react-native-paper';
import {Container,Content,Footer,Button,Icon} from 'native-base';
import {fingerprint} from 'src/assets';

class LoginScreen extends Component{
    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
        }
    }
    render() {
        const {email,password} = this.state;
        return (
            <Container>
            <Content style={styles.mainCont}>
                <Text style={styles.titleTxt}>Welcome To OMLP2P</Text>
                <Text style={styles.loginTxt}>Login</Text>
                <TextInput
                    label="Email id"
                    theme={{colors: {primary: '#FFF',text: "#f5f5f5",placeholder: "#f5f5f5"}}}
                    style={[styles.inputCont,{marginTop: '15%'}]}
                    onChangeText={value => this.setState({email: value})}
                    value={email}
                />
                <TextInput
                    label="password"
                    theme={{colors: {primary: '#FFF',text: "#f5f5f5",placeholder: "#f5f5f5"}}}
                    style={styles.inputCont}
                    onChangeText={value => this.setState({password:value})}
                    value={password}
                />
                <TouchableOpacity>
                    <Text style={styles.fotgotpwdTxt}>Forgot Password</Text>
                </TouchableOpacity>
                <Image source={fingerprint}
                        style={styles.fingerImg}
                />
                <TouchableOpacity style={styles.loginBtn}
                                  onPress={()=>{
                                      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                      if (!email || reg.test(email) === false) {
                                          alert("Please valid Enter Email ")
                                          return
                                      }
                                      if (this.state.password == "") {
                                          alert("Please Enter Password ")
                                          return
                                      }
                                      this.props.navigation.navigate("ReportScreen")
                                  }}
                >
                    <Text style={styles.loginBtnTxt}>Login</Text>
                </TouchableOpacity>
            </Content>

                <View style={styles.footerCont}>
                    <Text style={styles.footerTitleTxt}>Not Member Yet?</Text>
                    <View style={styles.footerBtnCont}>
                        <TouchableOpacity style={styles.applynowBtn}>
                            <Text style={styles.applynowBtnTxt}>Apply Now</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.applynowBtn}>
                            <Text style={styles.applynowBtnTxt}>Invest Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}
export default LoginScreen;

