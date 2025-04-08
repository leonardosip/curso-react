import React, {Component } from 'react';


class App extends Component{


  constructor(props){
    super(props);
    this.state = {
      status: 1
    }
  }
 
  // criando ali embaixo, se o estatus for igual a 1 ele ira executar o codigo
  render(){
    return(
        <div>
          {
            this.state.status === 1 &&
            <h1>Bem vindo ao sistema </h1>
          }
        </div>
    );
  }

}
export default App;