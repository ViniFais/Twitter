import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Usuario({ sugestao }) {
  const [seguir, setSeguirState] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Image style={styles.img}
            source={{
              uri: `https://github.com/${sugestao}.png`
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', }}>
          <Text style={{ marginTop: 10 }}>
            {sugestao}
            <MaterialCommunityIcons name="check-decagram" size={16} color='#0000FF'
            />
          </Text>

        </View>
        <Text style={{ color: 'grey', marginBottom: 10 }}>@{sugestao}</Text>

        <TouchableOpacity onPress={() => setSeguirState(!seguir)}>
          {seguir && <View style={styles.botao2}>
            <Text style={styles.textoBotao2}>Seguindo</Text>
          </View>}
          {!seguir && <View style={styles.botao1}>
            <Text style={styles.textoBotao1}>Seguir</Text>
          </View>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Components() {
  return (
    <View style={{ flexDirection: 'row' }}>
      {['ViniFais', 'peas', 'diego3g', 'drantunes'].map((sugestao) => <Usuario key={sugestao} sugestao={sugestao} />)}
      <View style={{ width: 20 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginLeft: 20,
    width: 130,
    height: 200,
    alignItems: 'center',
  },
  img: {
    marginTop: 20,
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#000',
    marginBottom: 5,
  },
  textoBotao1: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '600'
  },
  botao1: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  textoBotao2: {
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '600'
  },
  botao2: {
    backgroundColor: 'black',
    borderRadius: 10,
    border: '2px solid #fff',
  }

});