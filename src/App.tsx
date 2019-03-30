import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MasterForm from './components/MasterForm';


class App extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <MasterForm />
        <Footer />
      </>
    );
  }
}

export default App;
