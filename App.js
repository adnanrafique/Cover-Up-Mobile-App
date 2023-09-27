import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

function App() {
  return (
      <WebView source={{uri: 'https://coveruponline.com'}} style={{flex: 1}} />
  );
}

export default App;
