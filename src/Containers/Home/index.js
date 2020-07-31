import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header, Footer } from '../../Components'
import Builder from '../../Components/Builder'
import { getHomeData } from '../../Services'
import defaultModel from './defaultModel'

const Home = () => {

  return (
    <View style={styles.container}>
      <Header />
      <Builder
        endpoint={'templates'}
        defaultModel={defaultModel}
      />
      <Footer />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
