import React, {Component} from 'react';

class MenuTentangKami extends Component{
  constructor(props){
    super(props);
    this.state = { about : 'Warung Nusantara adalah Restoran Yang Bernusansa Makanan Nusantara,Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara'};
  }

    render(){
      return(
        <div>
          <center>
            <p> Tentang Kami </p> {this.state.about}
          </center>
        </div>
      );
    }
  }


export default MenuTentangKami;
