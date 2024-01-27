import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Messages } from '../../constants/Messages'
import { ListItem } from '@rneui/themed';
import { Avatar } from 'react-native-elements';

class MessagesScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {Messages.map((user: any, i: number) => (
            <ListItem key = {i} >
              <Avatar source={user.pic} />
              <ListItem.Content>
              <ListItem.Title style={styles.title}>{user.title}</ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>user.message</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#3F3F3F',
  },
  subtitle: {
    color: '#A5A5A5',
  },
})

export default MessagesScreen
