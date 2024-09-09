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
        Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Concha y Toro Expedition</Text>
        <Text style={styles.cardDescription}>
        Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Portada Winemaker's</Text>
        <Text style={styles.cardDescription}>
        Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.

        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Elvio Cogno Ravera Barolo</Text>
        <Text style={styles.cardDescription}>
        Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados..
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
