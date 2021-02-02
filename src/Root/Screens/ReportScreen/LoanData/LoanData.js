import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import styles from './LoanDataStyle';
import {rupee} from 'src/assets';
import {PixcelWidth} from 'src/Utils';
import {Button, Text} from 'native-base';

const LoanData = props => {


    return (
        <View style={styles.flatlistCont}>
            <View style={{padding:PixcelWidth(15),}}>
            <Text style={styles.appNoTxt}>Application No</Text>
            <Text style={styles.amtTxt}>0.00</Text>
            <Text style={styles.brIdTxt}>Borrower Id</Text>
            <View style={[styles.balanceCont,{marginTop: 15,}]}>
                <Text style={styles.balanceContTxt}>Contribution Amount</Text>
                <View style={styles.balanceContAmt}>
                    <Text>:</Text>
                    <Image source={rupee} style={styles.rupeeImg} />
                <Text style={styles.balanceContTxt}>0.00</Text>
                </View>
            </View>
            <View style={styles.balanceCont}>
                <Text style={styles.balanceContTxt}>Principal Balance Received</Text>
                <View style={styles.balanceContAmt}>
                    <Text>:</Text>
                    <Image source={rupee} style={styles.rupeeImg} />
                    <Text style={styles.balanceContTxt}>0.00</Text>
                </View>
            </View>
            <View style={styles.balanceCont}>
                <Text style={styles.balanceContTxt}>Principal Balance Left</Text>
                <View style={styles.balanceContAmt}>
                    <Text>:</Text>
                    <Image source={rupee} style={styles.rupeeImg} />
                    <Text style={styles.balanceContTxt}>0.00</Text>
                </View>
            </View>
            <View style={styles.termCont}>
                <View style={styles.tenurCont}>
                    <Text style={styles.tenurNoText}>3</Text>
                    <Text style={styles.tenurText}>Tenure</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.tenurCont}>
                    <Text style={styles.tenurNoText}>15% - 18%</Text>
                    <Text style={styles.tenurText}>ROI</Text>
                </View>
            </View>
            </View>
            <View style={styles.paymentCont}>
                <View>
                    <Text style={styles.payDateTxt}>Payment Date</Text>
                    <Text style={styles.paymentDate}>24-07-2020</Text>
                </View>
                <View>
                    <Text style={styles.payDateTxt}>Payment Status</Text>
                    <Text style={styles.payStatus}>Pending</Text>
                </View>
            </View>
        </View>
    );

};


export default LoanData;
