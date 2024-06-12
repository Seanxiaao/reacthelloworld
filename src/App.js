import './App.css';
import {PeopleList} from "./people";
import {Component} from "react";


class App extends Component{

    state = {
        contacts: [
            {
                id: 'tyler',
                name: 'Tyler McGinnis',
                handle: '@tylermcginnis',
                avatarURL: 'http://localhost:5001/tyler.jpg'
            },
            {
                id: 'karen',
                name: 'Karen Isgrigg',
                handle: '@karen_isgrigg',
                avatarURL: 'http://localhost:5001/karen.jpg'
            },
            {
                id: 'richard',
                name: 'Richard Kalehoff',
                handle: '@richardkalehoff',
                avatarURL: 'http://localhost:5001/richard.jpg'
            },
        ]
    };


    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c.id !== contact.id
            })
        }))
    }

    render() {
        return (
            <div className="App">
                <PeopleList
                    contacts={this.state.contacts}
                    onDeleteContact={this.removeContact}
                />
            </div>
        );
    }
}

export default App;
