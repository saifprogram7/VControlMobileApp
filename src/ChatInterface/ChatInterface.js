User
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

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

const ChatInterface = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (inputText.trim() !== '') {
      try {
        setIsTyping(true);

        // Update the messages state with the user's input
        const userMessage = { text: inputText, sender: 'user' };
        setMessages([...messages, userMessage]);

        // Clear the input text
        setInputText('');

        // Collect the data and log it to the console after sending a message
        console.log('Collected Data:', [userMessage]);
      } catch (error) {
        console.error('Error updating messages:', error);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleUserIconPress = () => {
    console.log('User icon pressed');
    // Handle user icon press here
  };

  const handleEllipsisPress = () => {
    console.log('Options pressed');
    // Handle ellipsis-vertical icon press here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable
              android_ripple={{ color: 'rgba(49, 127, 254, 0.3)', borderless: true, radius: 12 }}
              onPress={handleUserIconPress}
              style={({ pressed }) => [
                styles.iconContainer,
                pressed && { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              ]}
            >
              <AntDesign name="user" size={24} color="#178EEA" />
            </Pressable>
            <Text style={styles.title}>VControl</Text>
            <Pressable
              android_ripple={{ color: 'rgba(49, 127, 254, 0.3)', borderless: true, radius: 12 }}
              onPress={handleEllipsisPress}
              style={({ pressed }) => [
                styles.iconContainer,
                pressed && { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              ]}
            >
              <Ionicons name="ellipsis-vertical" size={24} color="#178EEA" />
            </Pressable>
          </View>

          {/* MessageDisplay component */}
          <MessageDisplay messages={messages} />

          {/* Your existing TextInput and Pressable for sending messages */}
          <View style={styles.content}>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                placeholder="Type your message..."
                placeholderTextColor="#8F8F8F"
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setInputText(text)}
                value={inputText}
              />
              <Pressable
                style={[styles.sendButton, { backgroundColor: '#178EEA' }]}
                android_ripple={{ color: 'rgba(49, 127, 254, 0.3)', borderless: true, radius: 12 }}
                onPress={handleSend}
              >
                {({ pressed }) => (
                  <Ionicons
                    name="send"
                    size={24}
                    color="white"
                    style={[pressed && styles.sendButtonPressed]}
                  />
                )}
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252331',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#252331', // Background color added
  },
  iconContainer: {
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  textAreaContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textArea: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#0F0F13',
    borderRadius: 8,
    padding: 10,
    paddingTop: 10,
    marginRight: 10,
    backgroundColor: '#0F0F13',
    height: 42,
    color: 'white', // Text color added
  },
  sendButton: {
    borderRadius: 8,
    padding: 8,
  },
  sendButtonPressed: {
    // ... styles for pressed sendButton ...
  },
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

export default ChatInterface;