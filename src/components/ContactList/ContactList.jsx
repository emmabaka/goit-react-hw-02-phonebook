const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(item => {
        return (
          <li key={item.id}>
            <span> {item.name}:</span> <span>{item.number}</span>
            <button onClick={() => deleteContact(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
