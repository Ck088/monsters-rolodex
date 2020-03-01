import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/CardList.component";
import { SearchBox } from "./components/search-box/Search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ""
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))
        return (
            <div className="App">
                <h1 className="heading">Monsters Rolodex</h1>
                <SearchBox placeholder="Search monsters..."
                    handleChange={e => {
                        this.setState({ searchField: e.target.value });
                        console.log(this.state.searchField);
                    }}/>
                <CardList monsters={filteredMonsters}></CardList>
            </div>
        );
    }
}

export default App;
