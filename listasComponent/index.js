import React, {Component} from "react";

class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>
                <h2>{this.props.username}</h2>
                <h4>{this.props.curtidas} Curtidas / {this.props.comentarios} comentarios</h4>
                
            </div>
        )
    }
}

export default Feed;