import {
  Button,
  Divider,
  Input,
  makeStyles,
  SocialIcon,
  Text,
} from '@rneui/themed';
import React from 'react';
import {Dimensions, View} from 'react-native';

const {width} = Dimensions.get('window');

function Login(props) {
  const styles = useStyles(props);
  return (
    <>
      <Text h3 style={styles.heading}>
        Log in to TablePe
      </Text>
      <View style={{padding: 20, width: '100%'}}>
        <Input autoCapitalize={false} placeholder="email@example.com" />
        <Input
          secureTextEntry={true}
          autoCapitalize={false}
          placeholder="Your Password"
        />
      </View>
      <Button style={styles.button} radius="sm">
        Login
      </Button>
      <Text h5 style={{marginTop: 30}}>
        OR
      </Text>
      <Divider inset={true} insetType="middle" style={{marginBottom: 20}} />
      <Button radius={'sm'} type="outline" style={styles.oauthButton}>
        <SocialIcon iconSize={12} type="google" />
        Continue with Google
      </Button>

      <Divider inset={true} insetType="middle" style={{marginBottom: 10}} />
      <Button radius={'sm'} type="outline" style={styles.oauthButton}>
        <SocialIcon iconSize={12} type="facebook" />
        Continue with Facebook
      </Button>
      <Text style={{marginTop: 30}}>New to tablePe? Create Account</Text>
    </>
  );
}

export default Login;

const useStyles = makeStyles((theme, props) => ({
  heading: {
    fontFamily: 'Inclusive Sans',
    fontWeight: 500,
    color: '#000',
  },
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
