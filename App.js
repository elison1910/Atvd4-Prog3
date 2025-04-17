import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

{/* Mensagens */}
const messages = [
  {
    id: '1',
    name: 'Claudia Alves',
    message: 'Do more of what you love.',
    time: '3m ago',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    unread: true,
  },
  {
    id: '2',
    name: 'Dani Martinez',
    message: 'Do your own thing.',
    time: '1m ago',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    unread: true,
  },
  {
    id: '3',
    name: 'Kimberly Nguyen',
    message: 'Kindness is beautiful.',
    time: '11m ago',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    unread: true,
  },
  {
    id: '4',
    name: 'Mariana Napolitani',
    message: 'Live your purpose.',
    time: '23m ago',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    unread: true,
  },
  {
    id: '5',
    name: 'Olivia Wilson',
    message: 'You got this.',
    time: '1h ago',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    unread: false,
  },
  {
    id: '6',
    name: 'Rachelle Beaudry',
    message: "You're wonderful.",
    time: 'Yesterday',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    unread: false,
  },
  {
    id: '7',
    name: 'Soo Jin Ae',
    message: 'Keep it simple.',
    time: 'Yesterday',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    unread: false,
  },
];

{/* Lista de Mensagens */}
const MessageItem = ({ item }) => (
  <TouchableOpacity style={styles.messageItem}>
    <Image source={{ uri: item.avatar }} style={styles.avatar} />
    <View style={styles.messageInfo}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
    <View style={styles.rightInfo}>
      <Text style={[styles.time, item.unread && { color: '#3A86FF' }]}>{item.time}</Text>
      {item.unread && <View style={styles.unreadDot} />}
    </View>
  </TouchableOpacity>
);

{/* Parte Inferior da Tela */}
const BottomTab = () => (
  <View style={styles.bottomTab}>
    <View style={styles.tabItem}>
      <Ionicons name="home-outline" size={24} color="#3A86FF" />
      <Text style={styles.tabLabel}>Home</Text>
    </View>
    <View style={styles.tabItem}>
      <Ionicons name="chatbubble-ellipses-outline" size={24} color="#3A86FF" />
      <Text style={styles.tabLabel}>Chat</Text>
    </View>
    <View style={styles.tabItem}>
      <Ionicons name="mail-outline" size={24} color="#3A86FF" />
      <Text style={styles.tabLabel}>Mail</Text>
    </View>
    <View style={styles.tabItem}>
      <Ionicons name="person-outline" size={24} color="#3A86FF" />
      <Text style={styles.tabLabel}>Profile</Text>
    </View>
  </View>
);

{/* Tela de Mensagens */}
export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho simples só com título */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages & Chat</Text>
      </View>

      {/* Linha de opções */}
      <View style={styles.optionsRow}>
        <Text style={styles.optionText}>Mark all read</Text>
        <View style={styles.sortRow}>
          <Text style={styles.optionText}>Sort by time</Text>
          <Ionicons name="chevron-down" size={16} color="#3A86FF" />
        </View>
      </View>

      {/* Lista de mensagens */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MessageItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Barra de navegação inferior */}
      <BottomTab />
    </SafeAreaView>
  );
}

{/* Estilos */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
  },
  header: {
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 14,
    color: '#3A86FF',
    fontWeight: '600',
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  messageInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1A1A1A',
  },
  message: {
    color: '#888',
    fontSize: 14,
    marginTop: 2,
  },
  rightInfo: {
    alignItems: 'flex-end',
    minWidth: 60,
  },
  time: {
    fontSize: 12,
    color: '#bbb',
    marginBottom: 4,
  },
  unreadDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#3A86FF',
    alignSelf: 'flex-end',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#3A86FF',
    marginTop: 2,
  },
});
