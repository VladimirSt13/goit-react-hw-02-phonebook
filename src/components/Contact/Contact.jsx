import { Item } from './Contact.styled';

export const Contact = ({ contact: { id, name, number } }) => {
  return (
    <Item>
      <span>{name}:</span> <span>{number}</span>
    </Item>
  );
};
