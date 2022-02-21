import React , {Component} from 'react';
import Footer from "./Page/Footer";
import Header from "./Page/Header";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak"
import MenuMakanan from "./Page/MenuMakanan"


class App extends Component{
  render(){
    return(
      <div>
      <Header />
      <MenuMakanan />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
      </div>
    );
  }
}

export default App;
