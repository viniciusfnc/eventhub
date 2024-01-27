import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { TopPicksScreenPics } from "../../constants/Pics";
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
} from "native-base";
import { SceneMap, TabView } from "react-native-tab-view";
import EventListScreen from "./EventListScreen";
import EventMapScreen from "./EventMapScreen";

const FirstRoute = () => <EventListScreen />;

const SecondRoute = () => <EventMapScreen />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function EventsScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <>
      <Flex
        direction="column"
        h={20}
        mx="5"
        mb="2.5"
        mt="1.53"
        alignItems="center"
      >
        {/* <Heading size="xl">Buscar Eventos</Heading> */}
        <Input
          variant="rounded"
          mt="3"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<SearchIcon name="search" />}
            />
          }
          placeholder="Pesquisar"
        />
      </Flex>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
