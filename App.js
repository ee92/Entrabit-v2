import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import generatePassword from './util/generatePassword';

export default function App() {
  const [password, setPassword] = useState("");
  const handleCreateButtonPress = () => {
    const site = "111";
    const username = "222";
    const masterPassword = "333"
    const settings = {
      memorable: true,
      words: 2,
      saltUsed: "scalers",
      symbols: true,
      symbolsUsed: "@#$%^&*?!"
    };
    setPassword(generatePassword({username, site, settings, masterPassword}));
  }
  return (
    <View style={styles.container}>
      <Button onPress={handleCreateButtonPress} title="create password"></Button>
      {password && <Text>{password}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
