import React, { useEffect, useState } from 'react';
// Library
import { View, Text, ImageBackground, Image, StatusBar } from 'react-native';
///styles
import globalStyles from '../../../globlestyles/styles';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import { Themes } from '../../../globlestyles/Themes';
import colors from '../../../globlestyles/color';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons, IconsType } from '../../../globlestyles/Icon';
import { Sizes } from '../../../globlestyles/Size';
import { Icon } from 'react-native-elements';
import Ion from 'react-native-vector-icons/Ionicons';
import FontAwsome from 'react-native-vector-icons/FontAwesome5';

const Login = (props) => {
    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // });



    return (
        <View style={globalStyles.mainCont2}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ScrollView>
                <View style={styles.subcont}>


                    <View style={{ paddingVertical: hp('12%'), paddingHorizontal: hp('2%'), }}>
                        <Text style={styles.welcome}>Welcome  back !</Text>
                        <Text style={styles.acoount}>sign in your account,</Text>
                        <View style={styles.textInputView}>
                            <TextInput
                                label="Email"
                                theme={Themes.inputTheme}
                                mode='outlined'
                                styles={styles.textinput}
                                right={<TextInput.Icon name={() =>
                                    <Icon
                                        type={IconsType.fontAwesome}
                                        name={Icons.email}
                                        size={Sizes.inputIcons2}
                                        color={colors.black}
                                    />
                                }
                                />}
                            />
                        </View>
                        <View style={styles.textInputView}>
                            <TextInput
                                label="Enter Password"
                                mode='outlined'
                                secureTextEntry={true}
                                theme={Themes.inputTheme}
                                right={<TextInput.Icon name={() =>
                                    <Icon
                                        type={IconsType.fontAwesome5}
                                        name={Icons.key}
                                        size={Sizes.inputIcons2}
                                        color={colors.black}
                                    />
                                }
                                />}
                            />
                        </View>
                        <View style={{ alignSelf: 'flex-end', paddingTop: hp('1%') }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Forgot') }}>
                                <Text style={styles.forgot}> Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textInputView}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Home') }} >
                                <View style={styles.button}>
                                    <Text style={styles.loginText}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', paddingTop: hp('2%') }}>
                            <View style={globalStyles.row}>
                                <Text>Don't have account? </Text>
                                <TouchableOpacity onPress={() => { props.navigation.navigate('Signup') }}>
                                    <Text style={styles.loginText2}> Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', paddingTop: hp('2%') }}>
                            <Text style={styles.orlogin}>Or Login Via</Text>
                        </View>
                        <View style={{ alignItems: 'center', paddingVertical: hp('5%') }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <View style={styles.circleshape}>
                                        <FontAwsome
                                            name="facebook-f"
                                            size={15}
                                            color="#1170F0"
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ marginLeft: hp('2%') }}>
                                        <TouchableOpacity style={styles.circleshape}>
                                            <Ion name="logo-google" size={15} color="#D93E3D" />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
};
export default Login;