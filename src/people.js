import React, {Component} from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PropTypes from "prop-types";

export class PeopleList extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (newQuery) => {
        this.setState(() => ({
            query: newQuery.trim()
        }))
    }

    render() {
        const element =
            <div className='people-list'>
                <div className='contact-list-top'>
                    <input className='search-people'
                           type='text'
                           placeholder='search people'
                           value={this.state.query}
                           onChange={(event) => {
                               this.updateQuery(event.target.value)}} />
                </div>
                {JSON.stringify(this.state.query)}
                <ol className='contact-list'>
                    {this.props.contacts.map(
                        contact =>
                            <li key={contact.id} className='contact-list-item'>
                                <div className='contact-avatar'
                                     style={{
                                         backgroundImage: `url(${contact.avatarURL})`
                                     }}                        ></div>
                                <div className='contact-details'>
                                    <p>{contact.name}</p>
                                    <p>{contact.handle}</p>
                                </div>
                                <button onClick={() => this.props.onDeleteContact(contact)}
                                        className='contact-remove'>remove</button>
                            </li>
                    )}
                </ol>
            </div>
        return element
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
