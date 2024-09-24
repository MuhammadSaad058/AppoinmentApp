// SignInScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { useAuth } from './AuthContext'; // Import the custom hook
import Icon from 'react-native-vector-icons/Ionicons';

function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const { signIn } = useAuth(); // Access the signIn function from context

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = async () => {
    if (!email.trim() || !password.trim()) {
      setModalMessage('Please fill in all fields.');
      setModalVisible(true);
      return;
    }

    const success = await signIn(email, password);
    if (success) {
      setModalMessage('Logged in successfully.');
      setModalVisible(true);
      setTimeout(() => navigation.navigate('Home'), 1500);
    } else {
      setModalMessage('Invalid email or password.');
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign in to Your Account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconToggle}>
          <Icon
            name={passwordVisible ? 'eye' : 'eye-off'}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signin} onPress={handleSignIn}>
        <Text style={styles.butnText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.lowtext}>or Sign in with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.iconButton1}>
          <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1f65df8bec0b5660f292f57a7cbe412d' }} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton2}>
          <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d22b040ee7182f27edf4206de25fc79a' }} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.finaltext}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.dec}> Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Pressable style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>×</Text>
            </Pressable>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Pressable style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    padding: 16,
  
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputContainer: {
    width: '95%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  signin: {
    backgroundColor: '#007BFF',
    width: '95%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  butnText: {
    padding: 14,
    color: 'white',
  },
  lowtext: {
    marginTop: 20,
  },
  iconImage: {
    width: 60,
    height: 60,
  },
  socialIcons: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  iconButton1: {
    borderWidth: 2,
    marginRight: 35,
    borderColor: '#f0f0f0',
    borderRadius: 15,
  },
  iconButton2: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#f0f0f0',
  },
  finaltext: {
    flexDirection: 'row',
    marginTop: 150,
  },
  dec: {
    color: '#007BFF',
  },
  iconToggle: {
    padding: 10,
  },
  // Modal Styles
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 50,
    width: '80%',
    alignItems: 'center',
    position: 'relative',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#C49F0F',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#007BFF',
  },
});

export default SignInScreen;
