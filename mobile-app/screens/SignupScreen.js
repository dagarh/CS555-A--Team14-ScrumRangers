import React from 'react';
import { useContext, useState } from 'react';
import { Alert, View, ImageBackground, StyleSheet , Image } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return (
    <ImageBackground
      source={require('../assets/new.jpeg')} 
      style={styles.backgroundImage}
    >
      <Image 
        source={require('../assets/city-white.png')} // Replace with the path to your logo image
        style={styles.logo}
      />
      <View style={styles.container}>
        <AuthContent onAuthenticate={signupHandler} />
      </View>
    </ImageBackground>
  );
  
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 190, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    alignSelf: 'center', // Center the logo
    marginTop: 0, // Add some top margin
    resizeMode: 'contain', // Ensure the image is scaled correctly
  },
});

export default SignupScreen;
