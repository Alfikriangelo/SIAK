import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  TextInput,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeKehadiran = () => {
  const scrollA = useRef(new Animated.Value(0)).current;

  const getKehadiranMahasiswa = () => {
    const apiURL = 'https://project-fadhil-heroku.herokuapp.com/api/datamhs';
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={16}>
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={require('../../assets/DataMahasiswa.jpg')}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.searchSection}>
            <Ionicons
              style={styles.searchIcon}
              name="search-outline"
              size={20}
              color="#000"
            />
            <TextInput
              // value={search}
              style={styles.input}
              placeholder="Search..."
              placeholderTextColor="grey"
              onChangeText={text => searchFilter(text)}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: 180,
    width: '100%',
    transform: [
      {
        translateY: scrollA,
      },
    ],
  }),
  searchSection: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    marginTop: 10,
    borderRadius: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    height: 50,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#f3f3f3',
    color: '#424242',
    borderRadius: 10,
  },
});

export default HomeKehadiran;
