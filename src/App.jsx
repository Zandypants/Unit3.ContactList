import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

const API_URL = `https://jsonplaceholder.typicode.com/`;

async function fetchUsers(setUserList) {
  const response = await fetch(API_URL + "users");
  const json = await response.json();
  console.log("fetchedJson:", json);

  setUserList(json);
}

function App() {
  const [contacts, setContacts] = useState([]);

  // On Page Load
  useEffect(() => {fetchUsers(setContacts)}, []);

  return (
    <>
      <h1>Add Contact List here!</h1>
      <ul>{
          contacts.map(contact => <li key={contact.id}>{contact.name}</li>)
      }</ul>
    </>
  )
}

export default App
