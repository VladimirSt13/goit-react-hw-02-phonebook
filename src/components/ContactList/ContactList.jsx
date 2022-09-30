import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ outputContacts, onDeleteContact }) => {
  return (
    <List>
      {outputContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};
