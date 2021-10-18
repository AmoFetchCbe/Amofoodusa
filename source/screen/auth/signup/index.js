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

const Signup = (props) => {
    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // });



    return (
        <View style={globalStyles.mainCont2}>
        <StatusBar  backgroundColor={'transparent'}  translucent={true}/>
            <ScrollView>
                <View style={styles.subcont}>
                  

                    <View style={{ paddingVertical: hp('20%'), paddingHorizontal: hp('2%'), }}>
                        <Text style={styles.welcome}>Welcome  back !</Text>
                        <Text style={styles.acoount}>Create a account,</Text>
                        <View style={styles.textInputView}>
                            <TextInput
                                label="Name"
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
                        <View style={styles.textInputView}>
                            <TextInput
                                label="Mobile Number"
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
                            <TouchableOpacity  onPress={()=>{ props.navigation.navigate('Home')}} >
                                <View style={styles.button}>
                                    <Text style={styles.loginText}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', paddingTop:hp('2%') }}>
                            <View style={globalStyles.row}>
                                <Text>Already have an account? </Text>
                                <TouchableOpacity onPress={()=>{ props.navigation.navigate('Login')}}>
                                    <Text style={styles.loginText2}> Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
};
export default Signup;