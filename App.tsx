import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from './constants';
import { MainLayout } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <MainLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
