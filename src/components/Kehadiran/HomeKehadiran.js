import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  StatusBar,
} from 'react-native';

const HomeKehadiran = () => {
  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{width: 157, height: 137}}
          source={require('../../assets/DataMahasiswa.jpg')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HomeKehadiran;
