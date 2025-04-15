import { useState } from 'react'
import { db } from './firebaseConnection'
import {doc, setDoc, collection, addDoc, getDoc} from 'firebase/firestore'

function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  async function handleAdd(){


    //AQUI ESTAVA ADICIONANDO NO BANCO APENAS COM UM ID ESCOLHIDO
    // await setDoc(doc(db, 'posts', '12345'), {
    //   titulo : titulo,
    //   autor : autor,
    // })

    // .then(() => {
    //   alert('Cadastrou')
    // })

    // .catch((error) => {
    //   alert("gerou erro " + error)
    // })





    //Aqui podemos adicionar um item no banco "posts" com qqr id gerado automatico pelo firebase
    await addDoc(collection(db, "posts"),{
      titulo : titulo, 
      autor : autor
  })

    .then(() => {
      alert('cadastrou');
      setAutor('');
      setTitulo('');
    })
    .catch((error) => {
      alert("Gerou erro" + error)
    })
  }





  // aqui estamos fazendo uma busca no firebase de um determinado item "12345" e mudando o input
    async function buscarPost() {
      const postRef = doc(db, 'posts', '12345')

      await getDoc(postRef)

      .then((snapshot) => {
        setAutor(snapshot.data().autor)
        setTitulo(snapshot.data().titulo)

      })
      .catch(() => {
        alert('erro')
      })
    }


  return (

      <div>
        <h1>React + Firebase </h1>

        <div>

          <label> Titulo: </label>
          <input type='text' placeholder='Digite o titulo'
          value={titulo} 
          onChange={(e) => setTitulo(e.target.value)}/>

          <br/> <br/>
          <label> Autor: </label>
          <input type='text' placeholder='Autor do post'
          value={autor}
          onChange={(e) => setAutor(e.target.value)}/>

          <br/> <br/>

          <button onClick={handleAdd}> Cadastrar </button>
          <button onClick={buscarPost}> Buscar post</button>

        </div>

      </div>


  )
}

export default App
