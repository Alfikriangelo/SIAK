import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-picker';
import DataMahasiswa from '../../assets/DataMahasiswa.jpg';

const PostMahasiswa = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [openKelas, setOpenKelas] = useState(false);
  const [valueKelas, setValueKelas] = useState(null);
  const [dataKelas, setDataKelas] = useState([]);
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [openProvinsi, setOpenProvinsi] = useState(false);
  const [valueProvinsi, setValueProvinsi] = useState('');
  const [dataKota, setDataKota] = useState([]);
  const [openKota, setOpenKota] = useState(false);
  const [valueKota, setValueKota] = useState('');
  const [dataKecamatan, setDataKecamatan] = useState([]);
  const [openKecamatan, setOpenKecamatan] = useState(false);
  const [valueKecamatan, setValueKecamatan] = useState('');
  const [dataKelurahan, setDataKelurahan] = useState([]);
  const [loadingProvinsi, setLoadingProvinsi] = useState(false);
  const [loadingKota, setLoadingKota] = useState(false);
  const [loadingKecamatan, setLoadingKecamatan] = useState(false);
  const [loadingProvinsiOrtu, setLoadingProvinsiOrtu] = useState(false);
  const [loadingKotaOrtu, setLoadingKotaOrtu] = useState(false);
  const [loadingKecamatanOrtu, setLoadingKecamatanOrtu] = useState(false);
  const [dataProvinsiOrtu, setDataProvinsiOrtu] = useState([]);
  const [openProvinsiOrtu, setOpenProvinsiOrtu] = useState(false);
  const [valueProvinsiOrtu, setValueProvinsiOrtu] = useState('');
  const [dataKotaOrtu, setDataKotaOrtu] = useState([]);
  const [openKotaOrtu, setOpenKotaOrtu] = useState(false);
  const [valueKotaOrtu, setValueKotaOrtu] = useState('');
  const [dataKecamatanOrtu, setDataKecamatanOrtu] = useState([]);
  const [openKecamatanOrtu, setOpenKecamatanOrtu] = useState(false);
  const [valueKecamatanOrtu, setValueKecamatanOrtu] = useState('');
  const [dataKelurahanOrtu, setDataKelurahanOrtu] = useState([]);

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiProvinsi = async () => {
      const apiURL = 'https://ibnux.github.io/data-indonesia/propinsi.json';

      await fetch(apiURL)
        .then(res => res.json())
        .then(resJson => {
          setDataProvinsi(resJson);
        })
        .catch(error => {
          console.log('Error1 : ', error);
        });
    };
    const timer = setTimeout(() => {
      apiProvinsi();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const apiProvinsiOrtu = () => {
    const apiURL = 'https://ibnux.github.io/data-indonesia/propinsi.json';

    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setDataProvinsiOrtu(resJson);
      })
      .catch(error => {
        console.log('Error 2: ', error);
      });
  };

  const handleChangeProvinsi = value => {
    setLoadingProvinsi(true);

    const apiURL = `https://ibnux.github.io/data-indonesia/kabupaten/${value}.json`;
    setValueProvinsi(value);

    // console.log(apiURL);
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setDataKota(resJson);
      })
      .catch(error => {
        console.log('Error3 : ', error);
      })
      .finally(() => setIsLoading(false));
  };
  const handleChangeProvinsiOrtu = value => {
    setLoadingProvinsiOrtu(true);
    const apiURL = `https://ibnux.github.io/data-indonesia/kabupaten/${value}.json`;
    setValueProvinsiOrtu(value);
    // console.log(apiURL);
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setDataKotaOrtu(resJson);
      })
      .catch(error => {
        console.log('Error4 : ', error);
      });
  };

  const handleChangeKota = value => {
    setLoadingKota(true);

    const apiURL = `https://ibnux.github.io/data-indonesia/kecamatan/${value}.json`;
    setValueKota(value);

    // console.log(apiURL);
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setDataKecamatan(resJson);
      })
      .catch(error => {
        console.log('Error5 : ', error);
      });
  };
  const handleChangeKotaOrtu = value => {
    setLoadingKotaOrtu(true);
    const apiURL = `https://ibnux.github.io/data-indonesia/kecamatan/${value}.json`;
    setValueKotaOrtu(value);
    // console.log(apiURL);
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setDataKecamatanOrtu(resJson);
      })
      .catch(error => {
        console.log('Error6 : ', error);
      });
  };

  const handleChangeKecamatan = value => {
    setLoadingKecamatan(true);

    const apiURL = `https://ibnux.github.io/data-indonesia/kelurahan/${value}.json`;
    setValueKecamatan(value);

    // console.log(apiURL);
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setDataKelurahan(resJson);
      })
      .catch(error => {
        console.log('Error7 : ', error);
      });
  };

  const handleChangeKecamatanOrtu = value => {
    setLoadingKecamatanOrtu(true);
    const apiURL = `https://ibnux.github.io/data-indonesia/kelurahan/${value}.json`;
    setValueKecamatanOrtu(value);
    // console.log(apiURL);
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setDataKelurahanOrtu(resJson);
      })
      .catch(error => {
        console.log('Error7 : ', error);
      });
  };

  const getProgramStudi = () => {
    const apiURL = 'https://project-fadhil-heroku.herokuapp.com/api/prodi';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
      })
      .catch(error => {
        console.log('Error8 : ', error);
      });
  };

  const getKelas = () => {
    const apiURL = 'https://project-fadhil-heroku.herokuapp.com/api/kelas';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setDataKelas(resJson);
      })
      .catch(error => {
        console.log('Error9 : ', error);
      });
  };

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
    const dataProvinsii = dataProvinsi.filter(
      item => valueProvinsi === item.id,
    );
    const dataKotaa = dataKota.filter(item => valueKota === item.id);
    const dataKecamatann = dataKecamatan.filter(
      item => valueKecamatan === item.id,
    );

    console.log(valueProvinsi);

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
        provinsiMhs: dataProvinsii.length > 0 ? dataProvinsii[0].nama : '',
        kabupatenMhs: dataKotaa.length > 0 ? dataKotaa[0].nama : '',
        kecamatanMhs: dataKecamatann.length > 0 ? dataKecamatann[0].nama : '',
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

  useEffect(() => {
    getKelas();
    getProgramStudi();
    apiProvinsiOrtu();
  }, []);
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{width: '45%', marginRight: 10}}>
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
              // onChangeValue={value => console.log(value)}
              placeholder="3 SI A"
              setValue={setValueKelas}
              items={dataKelas.map(item => ({
                label: item.kelas,
                value: item.kelas,
              }))}
              defaultValue={dataKelas}
            />
          </View>
          <View style={{width: '45%'}}>
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
              // onChangeValue={value => console.log(value)}
              dropDownContainerStyle={{
                borderColor: '#5665D2',
              }}
              placeholder="S1 - AKUNTANSI"
              setValue={setValue}
              items={data.map(item => ({
                label: item.nama_prodi,
                value: item.nama_prodi,
              }))}
              defaultValue={data}
            />
          </View>
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
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{width: '45%'}}>
            <DropDownPicker
              loading={loadingProvinsi}
              ActivityIndicatorComponent={() => (
                <ActivityIndicator
                  activityIndicatorSize={30}
                  activityIndicatorColor="#5665D2"
                />
              )}
              listMode={'SCROLLVIEW'}
              style={styles.picker}
              open={openProvinsi}
              value={valueProvinsi}
              onChangeValue={value => handleChangeProvinsi(value)}
              setOpen={setOpenProvinsi}
              textStyle={{
                fontSize: 15,
                opacity: 0.4,
              }}
              dropDownDirection="BOTTOM"
              dropDownContainerStyle={{
                borderColor: '#5665D2',
              }}
              placeholder="Provinsi"
              setValue={setValueProvinsi}
              items={dataProvinsi.map(item => ({
                label: item.nama,
                value: item.id,
              }))}
            />
          </View> */}
        {/* <View style={{width: '45%'}}>
            <DropDownPicker
              loading={loadingKota}
              ActivityIndicatorComponent={() => (
                <ActivityIndicator
                  activityIndicatorSize={30}
                  activityIndicatorColor="#5665D2"
                />
              )}
              onChangeValue={value => console.log(value)}
              listMode={'SCROLLVIEW'}
              style={styles.picker}
              open={openKota}
              value={valueKota}
              onChangeValue={value => handleChangeKota(value)}
              // onChangeValue={value => console.log(value)}
              setOpen={setOpenKota}
              textStyle={{
                fontSize: 15,
                opacity: 0.4,
              }}
              dropDownDirection="BOTTOM"
              dropDownContainerStyle={{
                borderColor: '#5665D2',
              }}
              placeholder="Kota/Kabupaten"
              setValue={setValueKota}
              items={dataKota.map(item => ({
                label: item.nama,
                value: item.id,
              }))}
              defaultValue={dataKota}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{width: '45%'}}>
            <DropDownPicker
              ActivityIndicatorComponent={() => (
                <ActivityIndicator
                  activityIndicatorSize={30}
                  activityIndicatorColor="#5665D2"
                />
              )}
              loading={loadingKecamatan}
              listMode={'SCROLLVIEW'}
              style={styles.picker}
              open={openKecamatan}
              value={valueKecamatan}
              onChangeValue={value => handleChangeKecamatan(value)}
              setOpen={setOpenKecamatan}
              textStyle={{
                fontSize: 15,
                opacity: 0.4,
              }}
              dropDownDirection="BOTTOM"
              dropDownContainerStyle={{
                borderColor: '#5665D2',
              }}
              placeholder="Kecamatan"
              setValue={setValueKecamatan}
              items={dataKecamatan.map(item => ({
                label: item.nama,
                value: item.id,
              }))}
              defaultValue={dataKecamatan}
            />
          </View>
          <View style={{width: '45%'}}>
            <TextInput
              placeholderTextColor="#999999"
              placeholder={'Kode Pos'}
              style={styles.input2}
            />
          </View> */}
        {/* </View> */}
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
            fonztSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 10,
            color: 'black',
          }}>
          Alamat Orang Tua
        </Text>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{width: '45%'}}>
            <DropDownPicker
              loading={loadingProvinsiOrtu}
              ActivityIndicatorComponent={() => (
                <ActivityIndicator
                  activityIndicatorSize={30}
                  activityIndicatorColor="#5665D2"
                />
              )}
              listMode={'SCROLLVIEW'}
              style={styles.picker}
              open={openProvinsiOrtu}
              value={valueProvinsiOrtu}
              onChangeValue={value => handleChangeProvinsiOrtu(value)}
              setOpen={setOpenProvinsiOrtu}
              // onChangeValue={value => console.log(value)}
              textStyle={{
                fontSize: 15,
                opacity: 0.4,
              }}
              dropDownDirection="BOTTOM"
              dropDownContainerStyle={{
                borderColor: '#5665D2',
              }}
              placeholder="Provinsi"
              setValue={setValueProvinsiOrtu}
              items={dataProvinsiOrtu.map(item => ({
                label: item.nama,
                value: item.id,
              }))}
              defaultValue={dataProvinsiOrtu}
            />
          </View>
          <View style={{width: '45%'}}>
            <DropDownPicker
              loading={loadingKotaOrtu}
              ActivityIndicatorComponent={() => (
                <ActivityIndicator
                  activityIndicatorSize={30}
                  activityIndicatorColor="#5665D2"
                />
              )}
              listMode={'SCROLLVIEW'}
              style={styles.picker}
              open={openKotaOrtu}
              value={valueKotaOrtu}
              onChangeValue={value => handleChangeKotaOrtu(value)}
              // onChangeValue={value => console.log(value)}
              setOpen={setOpenKotaOrtu}
              textStyle={{
                fontSize: 15,
                opacity: 0.4,
              }}
              dropDownDirection="BOTTOM"
              dropDownContainerStyle={{
                borderColor: '#5665D2',
              }}
              placeholder="Kota/Kabupaten"
              setValue={setValueKotaOrtu}
              items={dataKotaOrtu.map(item => ({
                label: item.nama,
                value: item.id,
              }))}
              defaultValue={dataKotaOrtu}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{width: '45%'}}>
            <DropDownPicker
              ActivityIndicatorComponent={() => (
                <ActivityIndicator
                  activityIndicatorSize={30}
                  activityIndicatorColor="#5665D2"
                /> */}
        {/* )}
              loading={loadingKecamatanOrtu}
              listMode={'SCROLLVIEW'}
              style={styles.picker}
              open={openKecamatanOrtu}
              value={valueKecamatanOrtu}
              onChangeValue={value => handleChangeKecamatanOrtu(value)}
              setOpen={setOpenKecamatanOrtu}
              textStyle={{
                fontSize: 15,
                opacity: 0.4,
              }}
              dropDownDirection="BOTTOM"
              dropDownContainerStyle={{
                borderColor: '#5665D2',
              }}
              placeholder="Kecamatan"
              setValue={setValueKecamatanOrtu}
              items={dataKecamatanOrtu.map(item => ({
                label: item.nama,
                value: item.id,
              }))}
              defaultValue={dataKecamatanOrtu}
            />
          </View> */}
        {/* <View style={{width: '45%'}}>
            <TextInput
              placeholderTextColor="#999999"
              placeholder={'Kode Pos'}
              style={styles.input2}
            />
          </View>
        </View> */}
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
  input2: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#5665D2',
    fontSize: 15,
    color: 'black',
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

export default PostMahasiswa;
