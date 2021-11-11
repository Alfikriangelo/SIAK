import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Get from './components/DataMaster/Ruangan/Get';
import Post from './components/DataMaster/Ruangan/Post';
import Details from './components/DataMaster/Ruangan/Details';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './components/DataMaster/Home';
import GetKelas from './components/DataMaster/Kelas/GetKelas';
import PostKelas from './components/DataMaster/Kelas/PostKelas';
import SplashScreen from './components/DataMaster/SplashScreen';
import GetMatkul from './components/DataMaster/Matkul/GetMatkul';
import PostMatkul from './components/DataMaster/Matkul/PostMatkul';
import DetailMatkul from './components/DataMaster/Matkul/DetailMatkul';
import GetProdi from './components/DataMaster/Prodi/GetProdi';
import PostProdi from './components/DataMaster/Prodi/PostProdi';
import DetailProdi from './components/DataMaster/Prodi/DetailProdi';
import DetailKelas from './components/DataMaster/Kelas/DetailKelas';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DataMaster() {
  return (
    <Stack.Navigator initialRouteName="Data Master">
      <Stack.Screen
        name="Home"
        options={{title: 'Sistem Informasi Akademik'}}
        component={Home}
      />
      <Stack.Screen
        name="GetProdi"
        component={GetProdi}
        options={({navigation}) => ({
          title: 'Data Prodi',
          headerRight: () => (
            <Ionicons
              name={'ios-add-circle'}
              size={40}
              color="#5665D2"
              onPress={() => navigation.navigate('Post Prodi')}
              style={{marginRight: 15}}
            />
          ),
        })}
      />
      <Stack.Screen name="Post Prodi" component={PostProdi} />
      <Stack.Screen
        name="Detail Prodi"
        component={DetailProdi}
        options={{title: 'Rincian'}}
      />
      <Stack.Screen
        name="Get Matkul"
        component={GetMatkul}
        options={({navigation}) => ({
          title: 'Data Matkul',
          headerRight: () => (
            <Ionicons
              name={'ios-add-circle'}
              size={40}
              onPress={() => navigation.navigate('Post Matkul')}
              color="#5665D2"
              style={{marginRight: 15}}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Post Matkul"
        component={PostMatkul}
        options={{title: 'Tambah'}}
      />
      <Stack.Screen
        name="Detail Matkul"
        options={{title: 'Rincian'}}
        component={DetailMatkul}
      />
      <Stack.Screen
        name="GetKelas"
        component={GetKelas}
        options={({navigation}) => ({
          title: 'Kelas dan Mata Kuliah',
          headerRight: () => (
            <Ionicons
              name={'ios-add-circle'}
              size={40}
              onPress={() => navigation.navigate('Post Kelas')}
              color="#5665D2"
              style={{marginRight: 15}}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Post Kelas"
        component={PostKelas}
        options={{title: 'Tambah'}}
      />
      <Stack.Screen
        name="Detail Kelas"
        options={{title: 'Rincian'}}
        component={DetailKelas}
      />

      <Stack.Screen
        name="Get"
        component={Get}
        options={({navigation}) => ({
          title: 'Data Ruangan',
          headerRight: () => (
            <Ionicons
              name={'ios-add-circle'}
              size={40}
              onPress={() => navigation.navigate('Post')}
              color="#5665D2"
              style={{marginRight: 15}}
            />
          ),
        })}
      />
      <Stack.Screen name="Post" component={Post} options={{title: 'Tambah'}} />
      <Stack.Screen
        name="Details"
        options={{title: 'Rincian'}}
        component={Details}
      />
    </Stack.Navigator>
  );
}

function CustomHeader({title}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
      }}>
      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <Text style={{color: 'black', textAlign: 'center'}}>{title}</Text>
      </View>
    </View>
  );
}

function KehadiranScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Kehadiran" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting</Text>
      </View>
    </SafeAreaView>
  );
}
function AbsensiScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Absensi" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Absensi</Text>
      </View>
    </SafeAreaView>
  );
}
function DataMahasiswaScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="DataMasiswa" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>DataMahasiswa</Text>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Master" options={{headerShown: false}}>
          {() => (
            <Tab.Navigator
              tabBarOptions={{
                keyboardHidesTabBar: true,
                labelStyle: {paddingBottom: 20, fontSize: 12},
                style: {height: 60},
                showLabel: false,
              }}>
              <Tab.Screen
                name="Master"
                component={DataMaster}
                options={({route}) => ({
                  tabBarIcon: ({focused}) =>
                    focused ? (
                      <Ionicons
                        name={'home-outline'}
                        size={30}
                        color="#5665D2"
                      />
                    ) : (
                      <Ionicons name={'home-outline'} size={30} color="grey" />
                    ),
                })}
              />
              <Tab.Screen
                name="Kehadiran"
                options={{
                  tabBarIcon: ({focused}) =>
                    focused ? (
                      <Ionicons
                        name={'calendar-outline'}
                        size={30}
                        color="#5665D2"
                      />
                    ) : (
                      <Ionicons
                        name={'calendar-outline'}
                        size={30}
                        color="grey"
                      />
                    ),
                }}
                component={KehadiranScreen}
              />
              <Tab.Screen
                name="Absensi"
                component={AbsensiScreen}
                options={{
                  tabBarIcon: ({focused}) =>
                    focused ? (
                      <Ionicons
                        name={'checkbox-outline'}
                        size={30}
                        color="#5665D2"
                      />
                    ) : (
                      <Ionicons
                        name={'checkbox-outline'}
                        size={30}
                        color="grey"
                      />
                    ),
                }}
              />
              <Tab.Screen
                name="Mahasiswa"
                component={DataMahasiswaScreen}
                options={{
                  tabBarIcon: ({focused}) =>
                    focused ? (
                      <Ionicons
                        name={'people-outline'}
                        size={30}
                        color="#5665D2"
                      />
                    ) : (
                      <Ionicons
                        name={'people-outline'}
                        size={30}
                        color="grey"
                      />
                    ),
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
