import { useState } from 'react'
import { db } from './firebaseConnection'
import {collection, addDoc, getDocs} from 'firebase/firestore'

function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

  async function handleAdd(){

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





   //buscando todos os objetos do banco posts, setei variavel pra receber os itens

    async function buscarPosts() {
      const postsRef = collection(db, 'posts')
      await getDocs(postsRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id : doc.id,
            titulo : doc.data().titulo,
            autor : doc.data().autor
          })
        })

        setPosts(lista)

      })
      .catch((error) => {
        alert('deu algum erro')
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
          <button onClick={buscarPosts}> Buscar posts</button>


          <ul> 
            {posts.map((post) => {
              return(
                <li key={post.id}>
                  <span> Titulo :{post.titulo} </span> <br/>
                  <span> Autor : {post.autor} </span> <br/>  <br/>
                </li>
              )
            })}
          </ul>

        </div>

      </div>

              //renderizando a lista que traz todos os objetos
  )
}

export default App
