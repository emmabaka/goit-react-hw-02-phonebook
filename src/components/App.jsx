import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

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
    this.setState(prevState => {
      const isInclude = prevState.contacts.some(
        contact => contact.name === contactName
      );
      if (isInclude) {
        alert(`${contactName} is already in contacts`);
        return prevState;
      } else {
        const newContact = {
          id: nanoid(4),
          name: contactName,
          number: contactNumber,
        };
        const contactArr = [newContact, ...prevState.contacts];
        return { contacts: contactArr };
      }
    });
  };

  handleFilterChange = e => {
    const filterValue = e.target.value;
    this.setState({ filter: filterValue });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    const { contacts } = this.state;
    console.log(id);
    const filtered = contacts.filter(contact => contact.id !== id);
    this.setState(() => {
      return { contacts: filtered };
    });
  };

  render() {
    const filteredContacts = this.filterByName();

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
        <Filter
          value={this.state.filter}
          handleChange={this.handleFilterChange}
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
