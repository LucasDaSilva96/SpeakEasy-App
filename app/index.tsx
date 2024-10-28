import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <TouchableOpacity>
        <Text>Click here for magic</Text>
      </TouchableOpacity>
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
