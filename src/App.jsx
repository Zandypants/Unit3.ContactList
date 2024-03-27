import { useState } from 'react'
import { useEffect } from 'react';
import ContactInfoSection from './ContactInfoSection';
import './App.css'

const API_URL = `https://jsonplaceholder.typicode.com/`;

async function fetchUsers(setUserList) {
  const response = await fetch(API_URL + "users");
  const json = await response.json();

  setUserList(json);
}

function App() {
  const [contacts, setContacts] = useState([]);

  // On Page Load
  useEffect(() => {fetchUsers(setContacts)}, []);

  return (
    <>
      <h1>Contact List</h1>
      <section className='container'>
        { ["name", "email", "phone"].map(infoKey => <ContactInfoSection key={infoKey} {...{contacts, infoKey}} />)}
      </section>
    </>
  )
}

export default App
