import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TelaCatalogo = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nossos Vinhos</Text>
      <Text style={styles.subtitle}>
        Trabalhamos com a melhor seleção de vinhos da região,
        tipos tintos, brancos, rosé, doces, espumantes, etc.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Charigny Chandonnay</Text>
        <Text style={styles.cardDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Donec nec lorem sit amet,
          consectetur lacinia tortor.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Concha y Toro Expedition</Text>
        <Text style={styles.cardDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Donec nec lorem sit amet,
          consectetur lacinia tortor.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Château Lagrézette Reserve</Text>
        <Text style={styles.cardDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Donec nec lorem sit amet,
          consectetur lacinia tortor.
        </Text>
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
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
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

export default TelaCatalogo;
