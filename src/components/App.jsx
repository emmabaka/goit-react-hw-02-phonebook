import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (contactName, contactNumber) => {
    this.setState(state => {
      const contactArr = [...state.contacts];

      contactArr.push({
        id: nanoid(4),
        name: contactName,
        number: contactNumber,
      });

      return { contacts: contactArr };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
