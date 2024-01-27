import React from "react";
import { Button, SocialIcon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import {
  Text,
  Heading,
  Input,
  Divider,
  Flex,
  Spacer,
  Center,
  Container,
  Box,
  Image,
} from "native-base";

class LoginScreen extends React.Component {
  render() {
    return (
      <Flex direction="column" h={80} mb="2.5" mt="1.5" alignItems="center">
         <Center my="10">
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size="xl"
            />
             <Spacer />
             <Text fontSize="xl">Bem Vindo!</Text>
          </Center>
        <Container>
         
          <Button
            title="Entrar"
            onPress={() => this.props.navigation.navigate("Main")}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "#514EB5",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
          <Button
            title="Cadastrar"
            onPress={() => this.props.navigation.navigate("Main")}
            buttonStyle={{
              borderColor: "#514EB5",
              borderRadius: 30,
            }}
            type="outline"
            titleStyle={{ color: "#514EB5" }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
          <Center></Center>;
        </Container>
        <Spacer />
        <Box w="350">
          <Center>
            <Flex direction="row" mb="2.5" mt="10" alignItems="center">
              <Divider mr="2" />
              <Heading size="xs">Entre com</Heading>
              <Divider ml="2" />
            </Flex>
          </Center>
        </Box>
        <Center>
          <Flex direction="row" mb="2.5" mt="4" alignItems="center">
            <SocialIcon
              title="Google"
              type="google"
              onPress={() => this.props.navigation.navigate("Main")}
            />
            <SocialIcon
              title="Facebook"
              type="facebook"
              onPress={() => this.props.navigation.navigate("Main")}
            />
            <SocialIcon
              onPress={() => this.props.navigation.navigate("Main")}
              style={{ backgroundColor: "black" }}
              title="Apple"
              type="apple"
            />
          </Flex>
        </Center>
      </Flex>
    );
  }
}

export default withNavigation(LoginScreen);
