import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const PostKehadiran = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [openKelas, setOpenKelas] = useState(false);
  const [valueKelas, setValueKelas] = useState(null);
  const [dataKelas, setDataKelas] = useState([]);

  const [kehadiran, setKehadiran] = useState({
    nim: '',
    nama: '',
    email: '',
    alamat: '',
    id_programStudi: '',
    noTelepon: '',
    alamatOrtu: '',
    nik: '',
    gender: '',
    kelas: '',
  });

  const [loading, setLoading] = useState(false);

  const getProgramStudi = () => {
    const apiURL = 'https://project-fadhil-heroku.herokuapp.com/api/prodi';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
      })
      .catch(error => {
        console.log('Error : ', error);
      });
  };

  const getKelas = () => {
    const apiURL = 'https://project-fadhil-heroku.herokuapp.com/api/kelas';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setDataKelas(resJson);
        console.log(resJson);
      })
      .catch(error => {
        console.log('Error : ', error);
      });
  };

  useEffect(() => {
    getProgramStudi();
    getKelas();
  }, []);

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

  const saveData = () => {
    const dataProgramStudi = data.filter(item =>
      value.includes(item.nama_prodi),
    );
    const dataKelass = dataKelas.filter(item =>
      valueKelas.includes(item.kelas),
    );
    console.log(dataProgramStudi);
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('https://project-fadhil-heroku.herokuapp.com/api/mahasiswa', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        nim: kehadiran.nim,
        nama: kehadiran.nama,
        id_programStudi: dataProgramStudi,
        id_kelas: dataKelass,
        email: kehadiran.email,
        alamat: kehadiran.alamat,
        noTelepon: kehadiran.noTelepon,
        alamatOrtu: kehadiran.alamatOrtu,
      }),
    })
      .then(response => {
        response.text();
        navigation.goBack();
        console.log(response);
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 10,
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
            color: 'black',
            marginHorizontal: 10,
          }}>
          Nama
        </Text>
        <TextInput
          placeholderTextColor="#999999"
          placeholder={'Alfikri'}
          onChangeText={value => onChangeNama(value)}
          style={styles.input}
        />
        <View style={{marginHorizontal: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Kelas
          </Text>
          <DropDownPicker
            listMode={'SCROLLVIEW'}
            style={styles.picker2}
            open={openKelas}
            value={valueKelas}
            setOpen={setOpenKelas}
            textStyle={{
              fontSize: 15,
              opacity: 0.4,
            }}
            dropDownContainerStyle={{
              borderColor: '#5665D2',
            }}
            placeholder="3 SI A"
            setValue={setValueKelas}
            items={dataKelas.map(item => ({
              label: item.kelas,
              value: item.kelas,
            }))}
            defaultValue={dataKelas}
          />
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Program Studi
          </Text>
          <DropDownPicker
            listMode={'SCROLLVIEW'}
            style={styles.picker}
            open={open}
            value={value}
            setOpen={setOpen}
            textStyle={{
              fontSize: 15,
              opacity: 0.4,
            }}
            dropDownContainerStyle={{
              borderColor: '#5665D2',
            }}
            placeholder="Algoritma dan Pemrograman Dasar"
            setValue={setValue}
            items={data.map(item => ({
              label: item.nama_prodi,
              value: item.nama_prodi,
            }))}
            defaultValue={data}
          />
        </View>
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
          placeholder={'2138977'}
          onChangeText={value => onChangeNik(value)}
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
          placeholder={'alfikri@gmail.com'}
          onChangeText={value => onChangeEmail(value)}
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
          placeholder={'Alamat Lengkap'}
          onChangeText={value => onChangeAlamat(value)}
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
          placeholder={'08xxxxxxx'}
          onChangeText={value => onChangeAlamat(value)}
          style={styles.input}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 10,
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
    </SafeAreaView>
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
    color: 'black',
    marginHorizontal: 10,
  },
  picker: {
    overlayColor: '#5665D2',
    borderColor: '#5665D2',
    marginBottom: 10,
    marginTop: 10,
    zIndex: 9,
  },
  picker2: {
    zIndex: 10,
    overlayColor: '#5665D2',
    borderColor: '#5665D2',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default PostKehadiran;
