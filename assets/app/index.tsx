import { Text, View, StyleSheet } from 'react-native';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
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