import React from 'react';
import { StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </QueryClientProvider>
  );
};

export default App;
