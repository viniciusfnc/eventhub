import React from "react";
import { Text, View } from "react-native";
import { Input, SocialIcon } from "react-native-elements";

class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Input
          containerStyle={{
            borderStyle: "solid",
            overflow: "hidden",
            marginBottom: 10,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 25,
          }}
          placeholder="Email"
        />
        <SocialIcon title="Google" button type="google" />
        <SocialIcon title="Facebook" button type="facebook" />
        <SocialIcon title="Twitter" button type="twitter" />
        <SocialIcon title="Whatsapp" button type="whatsapp" />
        <SocialIcon
          style={{ backgroundColor: "black" }}
          title="Apple"
          button
          type="apple"
        />
      </View>
    );
  }
}

export default LoginScreen;
