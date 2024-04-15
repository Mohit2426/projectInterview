import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import store from './store/store'
console.log("🚀 ~ store:", store.getState()
)
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
       <NavigationContainer>  
          <Navigation/>
       </NavigationContainer>
    </Provider>

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
