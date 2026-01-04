import { useState } from "react";
import { Alert, Button, View } from "react-native";
import { registerUser } from "../api/userApi";
import InputField from "../components/InputField";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function to handle user registration by calling the registerUser API
  const handleRegister = async () => {
    try {
      await registerUser({ name, email, password });
      Alert.alert("Success", "Check your email for verification");
      navigation.navigate("VerifyInfo");
    } catch (err) {
      Alert.alert("Error", err.response?.data || "Registration failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <InputField placeholder="Name" value={name} onChangeText={setName} />
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Password" value={password} onChangeText={setPassword} secure />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
