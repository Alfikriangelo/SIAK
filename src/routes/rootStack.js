import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();
import Get from '../components/DataMaster/Ruangan/Get';
import Post from '../components/DataMaster/Ruangan/Post';
import Details from '../components/DataMaster/Ruangan/Details';

const rootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Get"
        component={Get}
        options={({navigation, route}) => ({
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
};

export default rootStack;
