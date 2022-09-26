import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  handleChange = (e, key) => {};
  addContact = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: e.currentTarget.name.value,
      number: e.currentTarget.number.value,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    e.curretTarget.reset();
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <form autoComplete="off" onSubmit={this.addContact}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label htmlFor="number">
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}{' '}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
