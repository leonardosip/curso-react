import React, {Component } from 'react';


class App extends Component{


  constructor(props){
    super(props);
    this.state = {
      status: true
    }

    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this); //ativa o metodo no this

  }
 // se o status for true, ele ira executar o codigo antes dos dois pontos 
 
  sair(){
    this.setState({status : false}) //implementando o metodo no Onclick
  }
  entrar(){
    this.setState({status: true})
  }

  render(){
    return(
        <div>
          {this.state.status ?
            <div> 
              <h2>Bem vindo ao sistema</h2> 
              <button onClick={this.sair}> sair no SISTEMA</button>
            </div> :

            <div>
              <h2>
                Ola visitante faca o login
              </h2>
              <button onClick={this.entrar}> Entrar no Sistema </button>
            </div>
        }
        </div>
    );
  }

}
export default App;