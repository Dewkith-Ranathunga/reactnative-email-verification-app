import { Text, View } from "react-native";

export default function VerifyInfoScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 16 }}>
        A verification email has been sent.
        Please verify your email before logging in.
      </Text>
    </View>
  );
}
