import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const PostKehadiran = ({navigation}) => {
  const [kehadiran, setKehadiran] = useState({
    nim: '',
    nama: '',
    programStudi: '',
    email: '',
    alamat: '',
    noTelepon: '',
    alamatOrtu: '',
    nik: '',
    gender: '',
    kelas: '',
  });

  const [loading, setLoading] = useState(false);

  const onChangeNim = value => {
    setKehadiran({...kehadiran, nim: value});
  };
  const onChangeNama = value => {
    setKehadiran({...kehadiran, nama: value});
  };
  const onChangeProgramStudi = value => {
    setKehadiran({...kehadiran, programStudi: value});
  };
  const onChangeNik = value => {
    setKehadiran({...kehadiran, nik: value});
  };
  const onChangeEmail = value => {
    setKehadiran({...kehadiran, email: value});
  };
  const onChangeAlamat = value => {
    setKehadiran({...kehadiran, alamat: value});
  };
  const onChangeAlamatOrtu = value => {
    setKehadiran({...kehadiran, alamatOrtu: value});
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('https://project-fadhil-heroku.herokuapp.com/api/mahasiswa', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        nim: kehadiran.nim,
        nama: kehadiran.nama,
        programStudi: kehadiran.programStudi,
        email: kehadiran.email,
        alamat: kehadiran.alamat,
        noTelepon: kehadiran.noTelepon,
        alamatOrtu: kehadiran.alamatOrtu,
        nik: kehadiran.nik,
        gender: kehadiran.gender,
        kelas: kehadiran.kelas,
      }),
    })
      .then(response => {
        response.text();
        navigation.goBack();
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 15,
          color: 'black',
        }}>
        NIM
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={'2138977'}
        onChangeText={value => onChangeNim(value)}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 15,
          color: 'black',
        }}>
        Nama
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={'Alfikri'}
        onChangeText={value => onChangeNama(value)}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 15,
          color: 'black',
        }}>
        NIK
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={'2138977'}
        onChangeText={value => onChangeNik(value)}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 15,
          color: 'black',
        }}>
        Email
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={'alfikri@gmail.com'}
        onChangeText={value => onChangeEmail(value)}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 15,
          color: 'black',
        }}>
        Alamat
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={'Alamat Lengkap'}
        onChangeText={value => onChangeAlamat(value)}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 15,
          color: 'black',
        }}>
        Alamat Orang Tua
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={'Alamat Lengkap'}
        onChangeText={value => onChangeAlamatOrtu(value)}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 15,
          color: 'black',
        }}>
        Alamat Orang Tua
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={'Alamat Lengkap'}
        onChangeText={value => onChangeAlamatOrtu(value)}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 15,
          color: 'black',
        }}>
        Alamat Orang Tua
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={'Alamat Lengkap'}
        onChangeText={value => onChangeAlamatOrtu(value)}
        style={styles.input}
      />
      <TouchableOpacity onPress={saveData}>
        <View
          style={{
            backgroundColor: '#5665d2',
            padding: 10,
            borderRadius: 10,
            marginHorizontal: 10,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            {loading ? 'Menyimpan...' : 'Simpan'}
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    padding: 8,
    backgroundColor: '#ffff',
  },
  input: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#5665D2',
    fontSize: 15,
    marginHorizontal: 10,
    color: 'black',
  },
});

export default PostKehadiran;
