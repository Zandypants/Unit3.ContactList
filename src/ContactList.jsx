import ContactInfoSection from './ContactInfoSection';

function ContactList({ contacts, selectContactID }) {
  return <div>
    <h1>Contact List</h1>
    <section className='container'>
      {["name", "email", "phone"].map(infoKey => <ContactInfoSection key={infoKey} {...{ contacts, infoKey, selectContactID }} />)}
    </section>
  </div>
}

export default ContactList