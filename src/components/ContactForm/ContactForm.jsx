import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onSubmit = e => {
    e.preventDefault();

    const { handleSubmit } = this.props;
    const contactName = e.target.elements.name.value;
    const contactNumber = e.target.elements.number.value;

    this.setState({ name: contactName, number: contactNumber });

    handleSubmit(contactName, contactNumber);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.inputs}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.inputs}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.submitButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
