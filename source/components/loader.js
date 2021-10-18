import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
// Library
import {SkypeIndicator} from 'react-native-indicators';
// Style
import colors from '../globlestyles/color';

export default class Loader extends Component {
  _renderLoader = () => {
    if (this.props.isLoading)
      return (
        <View style={styles.background}>
          <SkypeIndicator  size={70} color={colors.black} />
        </View>
      );
    else return null;
  };

  render() {
    return this._renderLoader();
  }
}

const styles = StyleSheet.create({
  background: {
    top: 0,
    left: 0,
    flex: 1,
    right: 0,
    bottom: 0,
    opacity: 0.5,
    zIndex: 9999,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
