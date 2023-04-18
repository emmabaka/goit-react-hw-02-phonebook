const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(item => {
        return (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
