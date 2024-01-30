import { Icon as Iconre } from "@rneui/themed";
import { Center, Flex, Input } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, useWindowDimensions } from "react-native";
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
          bg={"white"}
          InputLeftElement={
            <Center ml={"2"}>
              <Iconre color="grey" name="search" type="font-awesome" />
            </Center>
          }
          InputRightElement={
            <Iconre
              raised
              name="sliders"
              type="font-awesome"
              onPress={() => console.log("hello")}
            />
          }
          style={{ fontSize: 18 }}
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
