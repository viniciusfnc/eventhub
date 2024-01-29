import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { Events, TopPicksScreenPics } from "../../constants/Pics";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Tile } from "@rneui/base";
import {
  Heading,
  Input,
  Divider,
  Flex,
  Spacer,
  Center,
  Container,
  Box,
  Image,
  Icon,
  SearchIcon,
  VStack,
} from "native-base";
import { CardEvent } from "../../components/CardEvent";

class EventListScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <VStack space={4} alignItems="center" my="1.5">
            {Events.map((event) => (
              <CardEvent
                event={event}
              />
            ))}
          </VStack>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  h2Style: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
  h4Style: {
    textAlign: "center",
    color: "#757575",
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    position: "absolute",
    left: 10,
    bottom: 50,
    backgroundColor: "black",
    marginBottom: -2,
    padding: 10,
  },
  caption: {
    position: "absolute",
    left: 10,
    bottom: 0,
    backgroundColor: "black",
    marginTop: 10,
    padding: 10,
  },
});

export default EventListScreen;
