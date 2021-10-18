import React, { useEffect, useState } from 'react';
// Library
import { View, Text, ImageBackground, Image, StatusBar } from 'react-native';
///styles
import globalStyles from '../../globlestyles/styles';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import { Themes } from '../../globlestyles/Themes';
import colors from '../../globlestyles/color';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons, IconsType } from '../../globlestyles/Icon';
import { Sizes } from '../../globlestyles/Size';
import { Icon } from 'react-native-elements';
import Images from '../../globlestyles/Imagepath';

const Editprofile = (props) => {
    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // });



    return (
        <View style={globalStyles.mainCont2}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ScrollView>
                <View style={styles.subcont}>


                    <View style={{ paddingVertical: hp('2%'), paddingHorizontal: hp('2%'), }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={Images.profile}
                                style={styles.proimg}

                            />
                            <View style={styles.cricle}>
                            <TouchableOpacity>
                                <Icon
                                    type={IconsType.fontAwesome}
                                    name={Icons.camera}
                                    size={Sizes.inputIcons}
                                    color={colors.white}
                                />
                            </TouchableOpacity>
                            </View>
                        </View>
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
                                label="Mobile Number"
                                theme={Themes.inputTheme}
                                mode='outlined'
                                styles={styles.textinput}
                                right={<TextInput.Icon name={() =>
                                    <Icon
                                        type={IconsType.fontAwesome}
                                        name={Icons.phone}
                                        size={Sizes.inputIcons2}
                                        color={colors.black}
                                    />
                                }
                                />}
                            />
                        </View>

                        <View style={styles.textInputView}>
                            <TouchableOpacity   >
                                <View style={styles.button}>
                                    <Text style={styles.loginText}>Update</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>

    )
};
export default Editprofile;