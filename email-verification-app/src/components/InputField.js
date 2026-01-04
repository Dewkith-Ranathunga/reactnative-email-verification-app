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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  }
});
