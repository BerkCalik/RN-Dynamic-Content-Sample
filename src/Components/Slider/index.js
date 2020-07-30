//flow

import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

const renderSliderItems = (items) => {
  
  return (
    items.map(item => (
      <View style={styles.slide} key={"slider-item-" + item.id}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
      </View>
    ))
  )
}

const Slider = (props) => {
  if (props?.items?.length == 0) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>

      <Swiper 
        showsButtons
        autoplay
        loop
      >
        {renderSliderItems(props.items)}
      </Swiper>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    height: 200,
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
