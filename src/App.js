import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import SimpleBurger from './containers/SimpleBurger/SimpleBurger';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SimpleBurger />
        </Layout>
      </div>
    );
  }
}

export default App;
