function ContactCard({ contact, goBack }) {
  const shallowInfo = Object.keys(contact).filter(key => typeof (contact[key]) != "object" && key !== "name");
  
  return <>
    <h1>{contact.name}</h1>
    {shallowInfo.map(key => <div key={key}>{key}: {contact[key]}</div>)}
    <div>company: {contact.company.name}</div>
    <div>location: {contact.address.geo.lat}, {contact.address.geo.lng}</div>
    <br></br>
    <button onClick={goBack}>Go Back</button>
  </>
}

export default ContactCard