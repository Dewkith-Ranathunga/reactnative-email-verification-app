//this page creates a reusable input field component for forms like

import { StyleSheet, TextInput, View } from "react-native";

export default function InputField({ value, onChangeText, placeholder, secure }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secure}
        style={styles.input}
        placeholderTextColor="#9ca3af"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginBottom: 16,
    width: '100%',
  },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    color: '#0f172a',
  }
});
