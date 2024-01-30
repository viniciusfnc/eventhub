import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import tailwind from 'twrnc';
import { Ionicons } from "@expo/vector-icons";
import { Center, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';


export default function ProfileMenuScreen() {
  const navigation = useNavigation();
  return (
    <>
      <VStack space={4} alignItems="center">
        <Avatar
          size={48}
          source={{
            uri: `https://randomuser.me/api/portraits/men/1.jpg`,
          }}
          rounded
          onPress={() => navigation.navigate("Profile")}
          icon={{ name: "pencil", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#6733b9" }}
        />
        <Center>
          <Text>
            Joe Bloggs
          </Text>
        </Center>
      </VStack>
    </>
  );
}