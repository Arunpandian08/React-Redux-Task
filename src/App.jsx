import React from 'react';
import './App.css'
import CartDisplay from './components/CartDisplay';
import Product from './MobilesData/Product';
import { Provider } from 'react-redux';
import configureStore from './Features/configureStore';

const App = () => {
  return (
    <Provider store={configureStore}> 
      <div>
        <Product >
          <CartDisplay />
        </Product>
      </div>
    </Provider>
  );
};

export default App;