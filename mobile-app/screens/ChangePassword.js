import React, { useState, useContext } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { AuthContext } from '../store/auth-context'; // Adjust import path as needed
import LoadingOverlay from '../components/ui/LoadingOverlay'; // Adjust import path as needed
// Import or implement your API method for changing the password

function ChangePasswordScreen() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const authCtx = useContext(AuthContext);

  async function changePasswordHandler() {
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Password mismatch', 'New passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Replace this with your API call to change the password
      // await changeUserPassword(authCtx.token, currentPassword, newPassword);

      Alert.alert('Success', 'Password changed successfully.');
      // Optionally navigate back or take other actions
    } catch (error) {
      Alert.alert(
        'Change password failed',
        'Could not change password, please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitting) {
    return <LoadingOverlay message="Changing password..." />;
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
        placeholder="Current Password"
      />
      <TextInput 
        style={styles.input} 
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        placeholder="New Password"
      />
      <TextInput 
        style={styles.input} 
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        secureTextEntry
        placeholder="Confirm New Password"
      />
      <Button title="Change Password" onPress={changePasswordHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default ChangePasswordScreen;
