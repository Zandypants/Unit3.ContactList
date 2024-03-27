import ContactInfoList from './ContactInfoList';
import {capitalize} from './helpers.js';

function ContactInfoSection(props) {
  return <section className='infoSection'>
    <h2>{capitalize(props.infoKey)}</h2>
    <ContactInfoList {...props} />
  </section>
}

export default ContactInfoSection