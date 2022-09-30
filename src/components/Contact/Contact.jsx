import { Item } from './Contact.styled';

export const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <Item>
      <div>
        <span>{name}:</span> <span>{number}</span>
      </div>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </Item>
  );
};
