import React, {Component } from 'react';
import Feed from './components/feed';


class App extends Component{


  constructor(props){
    super(props);
    this.state = {
      feed : [
        {id: 1, username:'Matheus', curtidas:10, comentarios: 2 },
        {id: 2, username:'Lucas', curtidas:1200, comentarios: 24},
        {id: 3, username:'Cleber', curtidas:800, comentarios: 50 }
      ]
    }
  }

  //no this.state.map, ele mapeia a lista e coloca como parametro o nome para ela

  render(){
    return(
        <div>
          {this.state.feed.map((item)=>{
            return(
              <Feed id={item.id} username ={item.username} 
                curtidas= {item.curtidas} comentarios= {item.comentarios}/> 
            );
          }
        )}              
        </div>
    );
  }

}
export default App;