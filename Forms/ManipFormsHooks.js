import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sexo, setSexo] = useState("");
  const [nome, setNome] = useState("");

  return (
    <div>
      <h1>LOGIN</h1>
      Nome:
      <input 
      type='text'
      name='nome'
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      /> <br/>

      Email:
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      Senha:
      <input
        type='password'
        name='senha'
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <br />

      Sexo:
      <select name='sexo' value={sexo} onChange={(e) => setSexo(e.target.value)}>
        <option value='masculino'>Masculino</option>
        <option value='feminino'>Feminino</option>
      </select>
    </div>
  );
}

export default App;