import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white'
  },
  logo: {
    width: 400,
    height: 480,
    marginBottom: 32
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 32
  },
  button: {
    width: 280,
    backgroundColor:'#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000' 
  },
});