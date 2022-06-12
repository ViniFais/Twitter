import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Home from './pages/Home';
import Message from './pages/Message';
import Notification from './pages/Notification';
import Search from './pages/Search';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Icon(){
  return (
    <AntDesign name="twitter" size={24} color="black" />
  )
}


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerTitleAlign: 'center', headerTitle: Icon, headerTitleStyle: {
          fontWeight: '900'
        }, headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }}>
            <AntDesign name="setting" size={24} color="black" />
          </TouchableOpacity>),
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="ios-person-circle-outline" size={24} color="black" />
          </TouchableOpacity>),
          headerStyle: {
            height: 90,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'white',
            borderBottomColor: 'lightgrey',
          }
      }} />
    </Stack.Navigator>
  );
}


function Pesquisa() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pesquisa" component={Search} options={{
        headerTitleAlign: 'center', headerTitle: 'Twitter', headerTitleStyle: {
          fontWeight: '900'
        }, headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }}>
            <AntDesign name="setting" size={24} color="black" />
          </TouchableOpacity>),
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="ios-person-circle-outline" size={24} color="black" />
          </TouchableOpacity>)
      }} />
    </Stack.Navigator>
  );
}


function Notificacao() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notificação" component={Notification} options={{
        headerTitleAlign: 'center', headerTitle: 'Twitter', headerTitleStyle: {
          fontWeight: '900'
        }, headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }}>
            <AntDesign name="setting" size={24} color="black" />
          </TouchableOpacity>),
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="ios-person-circle-outline" size={24} color="black" />
          </TouchableOpacity>)
      }} />
    </Stack.Navigator>
  );
}


function Menssagem() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menssagem" component={Message} options={{
        headerTitleAlign: 'center', headerTitle: 'Twitter', headerTitleStyle: {
          fontWeight: '900'
        }, headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }}>
            <AntDesign name="setting" size={24} color="black" />
          </TouchableOpacity>),
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="ios-person-circle-outline" size={24} color="black" />
          </TouchableOpacity>)
      }} />
    </Stack.Navigator>
  );
}


export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'Black',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: ({ backgroundColor: '#fff', borderTopColor: 'lightgrey', paddingTop: 8 })
      })}>
      <Tab.Screen name="Home" component={MyStack} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => (
          <Ionicons name="home" size={size} color={color} />
        ), tabBarLabel: ''
      }} />
       <Tab.Screen name="Pesquisa" component={Pesquisa} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => (
          <Ionicons name="search" size={size} color={color} />
        ), tabBarLabel: ''
      }} />
      <Tab.Screen name="Notificação" component={Notificacao} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => (
          <Ionicons name="notifications-sharp" size={size} color={color} />
        ), tabBarLabel: ''
      }} />
      <Tab.Screen name="Message" component={Menssagem} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => (
          <AntDesign name="mail" size={
            size} color={color} />
    ), headerShown: false, tabBarLabel: ''
}} />
    </Tab.Navigator>
  );
}