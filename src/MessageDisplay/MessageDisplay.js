import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageDisplay = ({ messages }) => {
  return (
    <View style={styles.messageContainer}>
      {messages.map((message, index) => (
        <View
          key={index}
          style={[
            styles.messageBox,
            message.sender === 'user' ? styles.userMessageBox : styles.otherMessageBox,
          ]}
        >
          <Text style={styles.messageText}>{message.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  messageBox: {
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: '#317FFE',
    padding: 10,
    marginBottom: 8,
    maxWidth: '80%',
  },
  userMessageBox: {
    alignSelf: 'flex-end',
    backgroundColor: '#317FFE',
  },
  otherMessageBox: {
    alignSelf: 'flex-start',
    backgroundColor: '#0F0F13',
  },
  messageText: {
    color: 'white',
  },
});

export default MessageDisplay;
