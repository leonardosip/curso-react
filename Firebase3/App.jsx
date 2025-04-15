import { useState } from 'react'
import { db } from './firebaseConnection'
import {collection, addDoc, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'

function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState('');


  async function cadastrarPosts(){

    if (titulo.trim() === '' || autor.trim() === '') {
      alert('Preencher todos os campos antes de cadastrar!');
      return; // impede o cadastro se tiver campo vazio
    }

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

     async function editarPost(){
      if (idPost.trim() === '' || titulo.trim() === '' || autor.trim() === '') {
        alert("Preencha o ID, título e autor antes de atualizar.");
        return;
      }
      const docRef = doc(db, 'posts', idPost)

      await updateDoc(docRef, {
        titulo : titulo, 
        autor : autor
      })
      .then(() => {
        alert("alterado com sucesso")
        setIdPost('')
        setTitulo('') 
        setAutor("")
      })
      .catch(() => {
        alert('errrrrrro')
      })
    }


    async function excluirPost(id){
      const docRef = doc(db, 'posts', id)
      await deleteDoc(docRef)

      .then(() => {
        alert('post deletado com sucesso')
      })
    }


  return (

      <div>
        <h1>React + Firebase </h1>

        <div>


          <label> ID do Post : </label> 
          <input placeholder='Digite o id do Post'
          value={idPost}
          onChange={(e) =>  setIdPost(e.target.value)}/> 
          
          <br/> < br/>

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

          <button onClick={cadastrarPosts}> Cadastrar </button>
          <button onClick={buscarPosts}> Buscar posts</button>
          <button onClick={editarPost}> Atualizar um Post </button>
          <br/> <br/> <br/>


          <ul> 
            {posts.map((post) => {
              return(
                <li key={post.id}>
                  <strong> ID : {post.id}</strong> <br/>
                  <span> Titulo :{post.titulo} </span> <br/>
                  <span> Autor : {post.autor} </span> <br/> 
                  <button onClick={() => excluirPost(post.id)}>Excluir</button>
                  
                  <br/>  <br/>
                 
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
