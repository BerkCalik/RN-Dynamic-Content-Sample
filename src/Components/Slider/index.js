//flow

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const Slider = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>

      <Swiper showsButtons={true}>
        <View style={styles.slide}>
          <Image
            source={{uri: 'https://picsum.photos/id/1/1920/1080'}}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{uri: 'https://picsum.photos/id/1/1920/1080'}}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{uri: 'https://picsum.photos/id/1/1920/1080'}}
            style={styles.image}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 10
  },
  title: {
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 10
  },
  image: {
    height: 200,
    width: '100%',
  },
});
