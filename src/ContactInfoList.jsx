function ContactInfoList({contacts, infoKey}) {
  return <>{
    contacts.map(contact => <div key={contact.id}>{contact[infoKey]}</div>)
  }</>
}

export default ContactInfoList