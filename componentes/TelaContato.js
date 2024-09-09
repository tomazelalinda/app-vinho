import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TelaContato = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Entre em contato, conheça para comprar nossos produtos</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Telefone:</Text>
        <Text style={styles.cardDescription}>+55 (11) 9999-9999</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Endereço:</Text>
        <Text style={styles.cardDescription}>Av. Brasil, 123 - Centro, São Paulo - SP</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Email:</Text>
        <Text style={styles.cardDescription}>contato@adegapreferida.com.br</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Instagram:</Text>
        <Text style={styles.cardDescription}>@adegapreferida</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
  },
});

export default TelaContato;
