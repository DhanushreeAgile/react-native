// import React from 'react'
// import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

// export default function Login() {
//     const [email, onemail] = React.useState('');
//     const [password, onpassword] = React.useState('');
//     return (
//         <View style={styles.maindisplay}>
//             <View style={styles.display1}>

//                 <View style={styles.container}>

//                 </View>
//                 <View style={styles.textcontent}>
//                     <Text
//                         style={[
//                             {
//                                 fontSize: 25,
//                                 color: "#fff",
//                                 fontWeight: "500",

//                                 // paddingVertical: 12
//                             },
//                         ]}>
//                         Sign In
//                     </Text>
//                     <Text
//                         style={[
//                             {
//                                 fontSize: 25,
//                                 fontWeight: "500",
//                                 color: 'gray',
//                                 paddingTop: 20
//                             },
//                         ]}>
//                         Welcome Back
//                     </Text>
//                 </View>
//             </View>

//             <View style={styles.mainview}>

//                 <Image
//                     style={styles.tinyLogo}
//                     source={require('../assets/mainlogo.png')}
//                 />

//                 <SafeAreaView>
//                     <TextInput

//                         style={styles.input}
//                         onChangeText={onemail}
//                         value={email}
//                         placeholder="Email"
//                         keyboardType="email-address"
//                     />
//                     <TextInput
//                         style={styles.input}
//                         onChangeText={onpassword}
//                         value={password}
//                         placeholder="Password"
//                         keyboardType="visible-password"
//                     />
//                 </SafeAreaView>

//                 <TouchableOpacity
//                     style={styles.buttonStyles}
//                     onPress={() => Alert.alert('Cannot press this one')}
//                 >
//                     <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>Sign In</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={styles.buttonStyles1}
//                     onPress={() => Alert.alert('Cannot press this one')}
//                 >
//                     <Text style={{ fontWeight: "600", fontSize: 16 }}><Image source={require('../assets/google.png')} />  Sign in with Google</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={styles.buttonStyles1}
//                     onPress={() => Alert.alert('Cannot press this one')}
//                 >
//                     <Text style={{ fontWeight: "600", fontSize: 16 }}><Image source={require('../assets/facebook.png')} />  Sign in with Facebook</Text>
//                 </TouchableOpacity>
//                 <View style={{ alignItems: "center", marginVertical: 30 }}>
//                     <Text style={{ paddingBottom: 15 }}>New to Nurture Genomics?</Text>
//                     <Text > <Text style={{ color: "#302B57", fontSize: 14, fontWeight: "500" }}>Buy a Kit </Text> <Text >or </Text><Text style={{ color: "#302B57", fontSize: 14, fontWeight: "500" }}> Sign Up</Text></Text>

//                 </View>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     display: {
//         position: 'absolute',
//     },
//     display1: {
//         flex: 1,
//         paddingTop: 60,
//         flexDirection: "row",

//     },
//     maindisplay: {
//         flex: 1,
//     },
//     textcontent: {
//         paddingHorizontal: 30,
//     },
//     mainview: {
//         flex: 4,
//         backgroundColor: "#fff",
//         padding: 40,
//         paddingVertical: 20,
//         borderTopLeftRadius: 30,
//     },
//     tinyLogo: {
//         width: 220,
//         height: 100,
//         alignSelf: "center",
//         marginRight: 15
//     },
//     input: {
//         backgroundColor: '#84C2CF33',
//         borderRadius: 6,
//         height: 45,
//         marginVertical: 12,
//         paddingHorizontal: 10,

//     },
//     buttonStyles: {
//         backgroundColor: "#302B57",
//         borderRadius: 6,
//         height: 45,
//         alignItems: "center",
//         paddingVertical: 14,
//         marginVertical: 12
//     },
//     buttonStyles1: {
//         borderColor: "rgba(48, 43, 87, 0.8)",
//         borderWidth: 1,
//         borderRadius: 6,
//         height: 47,
//         alignItems: "center",
//         paddingVertical: 10,
//         marginVertical: 12
//     }
// });