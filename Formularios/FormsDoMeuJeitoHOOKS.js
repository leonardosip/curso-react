import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState("LEONARDO");
  const [mensagem, setMensagem] = useState("");

  function cadastrar(event){
    event.preventDefault();
    setMensagem(`Olá, ${nome}! Seja bem-vindo!`);
  }
  
  

  return (
    <div>
      <form onSubmit={cadastrar}>
      <label>Nome:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <button type='submit'>Aperte Leonardo</button>
      </form>
      {mensagem && <h2>{mensagem}</h2>}
    </div>
  );
}

export default App;
