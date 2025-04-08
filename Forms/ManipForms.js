import React, {Component } from 'react';



class App extends Component{


  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: "",
      sexo:""
    }
    this.trocaEmail= this.trocaEmail.bind(this);
    this.trocaSenha= this.trocaSenha.bind(this);
    this.trocaSexo= this.trocaSexo.bind(this);
  }

  trocaEmail(e){
    let valorDigitado = e.target.value;
    this.setState({email: valorDigitado})
  }

  trocaSenha(e){
    let valorDigitado = e.target.value;
    this.setState({senha: valorDigitado})
  }

  trocaSexo(e){
    this.setState({sexo: e.target.value})
  }


  render(){
    return(
        <div>
          <h1>LOGIN</h1>
          Email:
          <input type='email' name= "email" value={this.state.email}
           onChange={this.trocaEmail}/> 
          <br/>

          Senha:
          <input type='password' name= "senha" value={this.state.senha}
          onChange={this.trocaSenha}/>
          <br/>

          Sexo
          <select name='sexo' value={this.state.sexo} onChange={this.trocaSexo}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>

        </div> // chamou o onchange e criou uma funcao aonde vai ser implementada la encima
    );
  }

}
export default App;