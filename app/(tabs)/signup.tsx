import { Image, StyleSheet, Platform, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/images/partial-react-logo.png';





export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.headerText}>
          Create Account
        </Text>
        <Text style={styles.subHeaderText}>Join our community today</Text>
      </View>


      <View style={styles.inputSection}>


        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>


        <View style={styles.phoneInput}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput placeholder='Phone Number' style={styles.input} keyboardType='phone-pad' maxLength={10} />
        </View>
        <View style={styles.otpSection}>

          <Text style={styles.otpLabel}>Enter OTP</Text>
          <View style={styles.otpContainer}>
            {[1, 2, 3, 4].map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                maxLength={1}
                keyboardType="number-pad"
              />
            ))}
          </View>
        </View>


        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Verify & Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By signing up, you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text>
            {' '}and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.linkText}>Login</Text>
          </Text>
        </TouchableOpacity>


      </View>




    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 25
  },
  headerSection: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,

  },
  inputSection: {
    padding: 20,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
    color: '#333',
  },
  inputContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  otpSection: {
    marginBottom: 25
  },
  otpLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  otpInput: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resendContainer: {
    alignItems: 'center',
  },
  resendText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '500',
  },
  termsContainer: {
    marginBottom: 20,
  },
  termsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
  },

  loginContainer: { alignItems: 'center', },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  linkText: {
    color: '#4A90E2',
    fontWeight: '500',
  }

});
