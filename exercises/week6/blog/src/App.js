import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import BlogList from './components/BlogList'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <BlogList />
        <Footer />
      </div>
    );
  }
}

export default App;
