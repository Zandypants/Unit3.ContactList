function ContactInfoList({contacts, infoKey, selectContactID}) {
  return <>{
    contacts.map(contact => <div key={contact.id} onClick={()=>selectContactID(contact.id)}>{contact[infoKey]}</div>)
  }</>
}

export default ContactInfoList