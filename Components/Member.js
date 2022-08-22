import React from 'react'
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login() {
    const [email, onemail] = React.useState('');
    const [password, onpassword] = React.useState('');
    return (
        <View style={styles.maindisplay}>
            <View style={styles.display1}>

                <View style={styles.avatar}>
                    <Image
                        style={{ width: 60, height: 60 }}
                        source={require('../assets/avatarlogo.png')}
                    />
                </View>
                <View style={styles.textcontent}>

                    <Text
                        style={[
                            {

                                fontSize: 18,
                                color: "#fff",
                                fontWeight: "700",

                                // paddingVertical: 12
                            },
                        ]}>
                        Hello, John
                    </Text>
                    <Text
                        style={[
                            {
                                fontSize: 16,
                                fontWeight: "500",
                                color: '#fff',
                                paddingTop: 20
                            },
                        ]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text>
                        <Text
                            style={[
                                {
                                    fontSize: 12,
                                    fontWeight: "500",
                                    color: '#fff',
                                    paddingTop: 20
                                },
                            ]}>
                            Cart   </Text>
                        <Text
                            style={[
                                {
                                    fontSize: 12,
                                    fontWeight: "500",
                                    color: '#fff',
                                    paddingTop: 20
                                },
                            ]}>
                            Bell
                        </Text></Text>
                </View>
            </View>

            <View style={styles.mainview}>
                <Text style={{
                    color: "#302B57", fontSize: 18, fontWeight: "700"
                }}>My Family</Text>
                <View style={{ backgroundColor: "rgba(238, 170, 175, 0.2)", flex: 4, margin: 20, borderRadius: 18 }}>
                    <View style={{ height: 200, borderColor: "#6C8BC7", borderStyle: "dashed", borderWidth: 2, borderRadius: 18, margin: 20 }}>

                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/avatarlogo.png')}
                        />
                    </View>
                    <View style={{flexDirection:"row", backgroundColor: "#fff", height: 200, borderRadius: 18, margin: 20, marginTop: -50 }}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:2}}>
                             <Text style={{ margin: 12 }}>Name</Text>
                            <Text style={{ margin: 12 }}>Gender</Text>
                            <Text style={{ margin: 12 }}>DOB</Text>
                            <Text style={{ margin: 12 }}>Relationship</Text>
                            </View>
                        <View style={{flex:2}}>
                        <Text style={{ margin: 12 }}>Jack</Text>
                            <Text style={{ margin: 12 }}>Male</Text>
                            <Text style={{ margin: 12 }}>25/04/2022</Text>
                            <Text style={{ margin: 12 }}>Son</Text>
                        </View>

                    </View>
                </View>
                <View style={{flex:1}}></View>

              
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        flex: 1,
        paddingHorizontal: 20,
    },
    display: {
        position: 'absolute',
    },
    display1: {
        flex: 1,
        paddingTop: 60,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    maindisplay: {
        flex: 1,
    },
    textcontent: {
        flex: 6,
        paddingTop: 16,
        paddingHorizontal: 30,
    },
    mainview: {
        flex: 4,
        backgroundColor: "#fff",
        padding: 20,
        paddingVertical: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    tinyLogo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginRight: 15,
        marginTop: 28,
        borderColor: "#6C8BC7",
        borderStyle: "solid",
        borderWidth: 4,
        borderRadius: 50,
    },
    input: {
        backgroundColor: '#84C2CF33',
        borderRadius: 6,
        height: 45,
        marginVertical: 12,
        paddingHorizontal: 10,

    },
    buttonStyles: {
        backgroundColor: "#302B57",
        borderRadius: 6,
        height: 45,
        alignItems: "center",
        paddingVertical: 14,
        marginVertical: 12
    },
    buttonStyles1: {
        borderColor: "rgba(48, 43, 87, 0.8)",
        borderWidth: 1,
        borderRadius: 6,
        height: 47,
        alignItems: "center",
        paddingVertical: 10,
        marginVertical: 12
    }
});