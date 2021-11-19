import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {onChange} from 'react-native-reanimated';

const DetailMahasiswa = ({navigation, route}) => {
  const {item} = route.params;
  const [loading, setLoading] = useState(false);

  const [kehadiran, setKehadiran] = useState({
    nim: item.nim,
    nama: item.nama,
    email: item.email,
    alamat: item.alamat,
    id_programStudi: item.id_programStudi,
    noTelp: item.noTelp,
    alamatOrtu: item.alamatOrtu,
    nik: item.nik,
    gender: item.gender,
    kelas: item.kelas,
  });

  const onChangeNim = value => {
    setKehadiran({...kehadiran, nim: value});
  };
  const onChangeNama = value => {
    setKehadiran({...kehadiran, nama: value});
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

  const UpdateData = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('https://project-fadhil-heroku.herokuapp.com/api/mahasiswa', {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify({
        nim: item.nim,
        nama: item.nama,
        email: item.email,
        alamat: item.alamat,
        id_programStudi: item.id_programStudi,
        noTelp: item.noTelp,
        alamatOrtu: item.alamatOrtu,
        nik: item.nik,
        gender: item.gender,
        kelas: item.kelas,
      }),
    });
  };
  const displayAlert = () => {
    Alert.alert('Kamu Yakin?', 'Data Ini akan terhapus', [
      {
        text: 'Tidak Terima Kasih',
        onPress: () => console.log('Cancel'),
      },
      {
        text: 'Hapus',
        onPress: deleteData,
      },
    ]);
  };

  const deleteData = () => {
    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');

    fetch(
      `https://project-fadhil-heroku.herokuapp.com/api/mahasiswa/${item._id}`,
      {
        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify({
          nim: kehadiran.nim,
          nama: kehadiran.nama,
          email: kehadiran.email,
        }),
      },
    )
      .then(response => {
        response.text();
        navigation.goBack();
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginHorizontal: 10,
        }}>
        Nim
      </Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#999999"
        placeholder={kehadiran.nim}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginHorizontal: 10,
        }}>
        Nama
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={kehadiran.nama}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginHorizontal: 10,
        }}>
        NIK
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={kehadiran.nik}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginHorizontal: 10,
        }}>
        Email
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={kehadiran.email}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginHorizontal: 10,
        }}>
        Alamat
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={kehadiran.alamat}
        style={styles.input}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginHorizontal: 10,
        }}>
        No Telepon
      </Text>
      <TextInput
        placeholderTextColor="#999999"
        placeholder={kehadiran.noTelp}
        style={styles.input}
      />
      <TouchableOpacity style={styles.updateButton}>
        <View style={{padding: 10}}>
          <Text style={{color: 'white', textAlign: 'center'}}>Perbarui</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={displayAlert}>
        <View style={{padding: 10}}>
          <Text style={{color: 'red', textAlign: 'center'}}>Hapus</Text>
        </View>
      </TouchableOpacity>
    </View>
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
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderColor: '#5665D2',
    color: 'black',
  },
});
export default DetailMahasiswa;
