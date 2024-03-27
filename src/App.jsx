import { useState } from 'react'
import { useEffect } from 'react';
import ContactInfoSection from './ContactInfoSection';
import './App.css'

const API_URL = `https://jsonplaceholder.typicode.com/`;

async function fetchUsers(setUserList) {
  try {
    const response = await fetch(API_URL + "users");
    const json = await response.json();

    setUserList(json);
  } catch (error) {
    console.log(`Error caught: ${error}`);
  }
}

function App() {
  // State
  const [contacts, setContacts] = useState([]);

  // On Page Load
  useEffect(() => {fetchUsers(setContacts)}, []);

  // Render
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
