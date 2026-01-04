import { useState } from "react";
import { Alert, Button, View } from "react-native";
import { loginUser } from "../api/userApi";
import InputField from "../components/InputField";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      navigation.navigate("Dashboard");
    } catch (err) {
      Alert.alert("Login Failed", err.response?.data);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Password" value={password} onChangeText={setPassword} secure />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
