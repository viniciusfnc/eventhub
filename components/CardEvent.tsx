import React from "react";
import { Platform, StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import { Tile } from "@rneui/themed";
import { Card } from "@rneui/themed";
import {
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  ScrollView,
  Stack,
  View,
} from "native-base";
import { HStack, VStack } from "native-base";
import Moment from "moment";

export const CardEvent = ({ event }) => (
  <Center w="380" my={"1.5"} bg="white" rounded="3xl">
    <Stack direction="row" mb="2.5" mt="2.5" space={3}>
      <Center
        w="20"
        ml={"3"}
        mr={"2"}
        my={"1.5"}
        justifyContent={"center"}
        bg="gray.100"
        rounded="2xl"
        _text={{
          color: "warmGray.50",
          fontWeight: "medium",
        }}
        shadow={"3"}
      >
        <Image
          justifyContent={"center"}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt={event.title}
          size="sm"
        />
      </Center>
      <Center w="250" rounded="sm">
        <Center>
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Stack mr="2.5" mt="1.5" direction="row" space={3}>
              <Heading numberOfLines={1} w={150} justifyContent="left" size="md">
                {event.title}
              </Heading>
              <Heading justifyContent="right" size="sm">
              {event.fee}
              </Heading>
            </Stack>

            <Stack mr="2.5" mt="1.5" direction="row" space={3}>
              <Heading w={150} justifyContent="left" size="sm">
              {Moment(event.date).format("D MMM")}
              </Heading>
              <Heading justifyContent="right" size="sm">
                {event.locale}
              </Heading>
            </Stack>
          </Stack>
        </Center>
      </Center>
    </Stack>
  </Center>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: Layout.window.width - 30,
    borderRadius: 20,
    overflow: "hidden", // this does magic
  },
  title: {
    position: "absolute",
    left: 10,
    bottom: 30,
  },
  caption: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
});
