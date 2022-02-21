import React, {Component} from 'react';

class ListMenuUtama extends Component {
  render(){
    return(
      <div>
          <h1>
            <center> Selamat Darang di Warung Nusantara</center>
          </h1>
        <center>
          <img src = {this.props.Link} alt ="Masakan Nusantara" width = "600" />
        </center>
      </div>
    )
  }
}
export default ListMenuUtama;
