import { Component } from "react";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/search-box.component";



class Monster extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            monsters: [],
            searchField: '',
        }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => 
        this.setState( 
            () => {
                return {monsters: users};
            },
            () => {

        }
    ) )
}

onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase(); 
    this.setState(
        () => {
    return {searchField}
    })
}
render(){
const {monsters, searchField} = this.state;
const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField)
    });
    return(
        <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box'/>
        <CardList monsters={filteredMonsters}/>
        </div>
    )
}
}

export default Monster