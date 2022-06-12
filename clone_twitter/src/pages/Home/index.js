import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Components from '../../components';

function Twitts({ cardUser }) {
  const [like, setLikeState] = useState(false);
  return (
    <View style={styles.container1}>
      <StatusBar style='dark' />
      <View>
        <Image style={styles.img}
          source={{
            uri: `https://github.com/${cardUser}.png`
          }}
        />
      </View>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.texto1}>
            {cardUser}
            <View style={{ width: 3 }}></View>
            <MaterialCommunityIcons name="check-decagram" size={16} color='#0000FF' />
          </Text>
          <Text style={{ marginLeft: 5 }}>
            @{cardUser}
          </Text>
        </View>
        <Text style={styles.texto2}>
          Hi, this app is fantastic
        </Text>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Feather name="message-circle" size={21} color="black" />
          </TouchableOpacity>
          <Text>1,0K</Text>
          <View style={{ width: 30 }}></View>
          <TouchableOpacity>
            <Ionicons name="git-compare-outline" size={21} color="black" />
          </TouchableOpacity>
          <Text>500</Text>
          <View style={{ width: 30 }}></View>
          <TouchableOpacity onPress={() => setLikeState(!like)}>
            {like && <Ionicons name="heart" size={21} color="red" />}
            {!like && <Ionicons name="heart-outline" size={21} color="black" />}
          </TouchableOpacity>
          <Text style={{marginRight: 17}}>5,0K</Text>
          <TouchableOpacity >
          <Ionicons name="share-social-outline" size={21} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}
    style={{backgroundColor: 'white'}}
    >
      {['ViniFais', 'diego3g', 'drantunes'].map((cardUser) => <Twitts key={cardUser} cardUser={cardUser} />)}
      <Text style={{ fontWeight: '900', fontSize: 20, margin: 20 }}>
          Quem seguir
        </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{backgroundColor: 'white'}}>
     <Components />
      </ScrollView>
      <View style={{height: 20}}></View>
      {['florinpop17', 'ViniFais'].map((cardUser) => <Twitts key={cardUser} cardUser={cardUser} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderBottomColor: 'lightgray'
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 10
  },
  texto1: {
    color: 'black',
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 10,
  },
  texto2: {
    fontWeight: '400',
    fontSize: 14,
    marginLeft: 10
  },
  img: {
    marginTop: 5,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#000'
  },
});