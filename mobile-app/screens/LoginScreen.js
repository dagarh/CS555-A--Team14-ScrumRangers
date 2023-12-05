import React from 'react';
import { View, ImageBackground, StyleSheet , Image} from 'react-native';
import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <ImageBackground
      source={require('../assets/login.webp')}
      style={styles.backgroundImage}
    >
      <Image 
        source={require('../assets/City-black.png')} // Replace with the path to your logo image
        style={styles.logo}
      />
      <View style={styles.container}>
        <AuthContent isLogin onAuthenticate={loginHandler}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', //  can adjust the image resizing mode as needed
    justifyContent: 'center', //  can change the alignment as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    top:80,
    width: 190, // Adjust the width as needed
    height: 190, // Adjust the height as needed
    alignSelf: 'center', // Center the logo
    marginTop: 0, // Add some top margin
    resizeMode: 'contain', // Ensure the image is scaled correctly
  },
});

export default LoginScreen;
