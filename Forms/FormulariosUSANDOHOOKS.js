import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar(event) {
    alert(nome);
    event.preventDefault();
  }

  return (
    <div>
      <h1>Novo usuario</h1>
      <form onSubmit={cadastrar}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <br /><br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <br /><br />
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
