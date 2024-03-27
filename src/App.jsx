import { useState } from 'react'
import { useEffect } from 'react';
import ContactList from './ContactList';
import ContactCard from './ContactCard';
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
  const [selectedContactID, selectContactID] = useState([]);

  // On Page Load
  useEffect(() => {fetchUsers(setContacts)}, []);

  // On Update
  const selectedContact = contacts.find(contact => contact.id === selectedContactID);

  // Render
  return (
    <>
      { selectedContact
        ? <ContactCard contact={selectedContact} goBack={() => selectContactID(-1)} />
        : <ContactList {...{contacts, selectContactID}} />
      }
    </>
  )
}

export default App
