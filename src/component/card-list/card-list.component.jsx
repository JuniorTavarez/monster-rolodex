import { Component } from "react";

class CardList extends Component {
/*   constructor(props){
        super (props)

*/ 
render(){
    const {monsters} = this.props

    return(
     <div>
 {monsters.map((monster) =>(
     <h1 key={monster.id}>{monster.name}</h1>
 ))
   }  </div>
    )
}
}


export default CardList