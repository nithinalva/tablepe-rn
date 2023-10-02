import {Input, Text} from '@rneui/base';
import {
  makeStyles,
  ThemeConsumer,
  Button,
  Divider,
  SocialIcon,
} from '@rneui/themed';
import React from 'react';
import {Dimensions, StatusBar, View, SafeAreaView} from 'react-native';

import theme from '../../theme';
import Login from './login';

const {width} = Dimensions.get('window');

function Authentication(props) {
  const styles = useStyles(props);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      {/* <ThemeConsumer>
        {({theme}) => <Text  style={{color: theme.colors.primary}}>Yo!</Text>}
      </ThemeConsumer> */}

      <View style={styles.signUpDrawer}>
        <Login />
      </View>
    </View>
  );
}

export default Authentication;

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.primary,
  },
  button: {
    backgroundColor: '#0000',
    fontFamily: 'Inclusive Sans',
    width: width / 1.1,
  },
  oauthButton: {
    fontFamily: 'Inclusive Sans',
    width: width / 1.1,
  },

  signUpDrawer: {
    minHeight: 600,
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
}));
