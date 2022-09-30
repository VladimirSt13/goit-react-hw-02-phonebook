import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ outputContacts }) => {
  return (
    <List>
      {outputContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
