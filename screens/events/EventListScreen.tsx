import React from "react";
import { ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from "react-native";
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

class EventListScreen extends React.Component {
  render() {
    return (
        <SafeAreaView>
        <ScrollView>

          <Text h2 h2Style={styles.h2Style}>
            Top Events
          </Text>
          <View style={styles.grid}>
            {TopPicksScreenPics.map(({ pic, title, caption }) => (
              <Tile
                imageSrc={pic}
                activeOpacity={0.9}
                title={title}
                titleStyle={styles.title}
                caption={caption}
                captionStyle={styles.caption}
                featured
                key={title}
              />
            ))}
          </View>
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

export default EventListScreen