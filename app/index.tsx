import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#ecf0f1",
    fontWeight: "bold",
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    color: "#ecf0f1",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 30,
  },
  input: {
    width: "90%",
    borderColor: "#34495e",
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#34495e",
    color: "#ecf0f1",
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    width: "90%",
    marginTop: 10,
  },
});

export default function Index() {
  const [corrente, setCorrente] = useState("");
  const [distancia, setDistancia] = useState("");
  const [resultado, setResultado] = useState("");

  const calcBitola = () => {
    const correnteNum = Number(corrente.replace(',', '.'));
    const distanciaNum = Number(distancia.replace(',', '.'));

    if (isNaN(correnteNum) || isNaN(distanciaNum) || correnteNum <= 0 || distanciaNum <= 0) {
      setResultado("Por favor, insira valores numéricos válidos e maiores que zero.");
      return;
    }

    const bitola110 = (2 * correnteNum * distanciaNum) / 294.64;
    const bitola220 = (2 * correnteNum * distanciaNum) / 510.4;

    setResultado(
      `Bitola recomendada para 127V: ${bitola110.toFixed(2)} mm²\nBitola recomendada para 220V: ${bitola220.toFixed(2)} mm²`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Bitola de Cabos</Text>
      <TextInput
        placeholder="Distância (metros)"
        placeholderTextColor="#95a5a6"
        style={styles.input}
        value={distancia}
        onChangeText={setDistancia}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Corrente (Amperes)"
        placeholderTextColor="#95a5a6"
        style={styles.input}
        value={corrente}
        onChangeText={setCorrente}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Calcular Bitola"
          onPress={calcBitola}
          color="#3498db"
        />
      </View>
      {resultado ? <Text style={styles.text}>{resultado}</Text> : null}
    </View>
  );
}