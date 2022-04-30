import { Component } from "react";



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
render(){

    const filteredMonsters = this.state.monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(this.state.searchField)
    });
    return(
        <div className="App">
        <h1>Monsters Rolodex</h1>
        <input 
            className='search-box' 
            type='search'
            placeholder='search monsters' 
            onChange={(event) => {
                const searchField = event.target.value.toLowerCase(); 
                this.setState(
                    () => {
                return {searchField}
                })
            }}
        />
        {
            filteredMonsters.map((monster, index) => {
                return (
                    <div key={index}>
                    <h1 >{monster.name}</h1>
                    </div>
                    )})
        }
        </div>
    )
}
}

export default Monster