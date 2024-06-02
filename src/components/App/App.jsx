// import { useEffect, useState } from "react";
// import inisialContacts from "../../contacts.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import css from "./App.module.css";

export default function App() {
  //   const [contacts, setContacts] = useState(inisialContacts);

  //   const [contacts, setContacts] = useState(() => {
  //     const saveContacts = localStorage.getItem("contact");
  //     if (saveContacts !== null) {
  //       return JSON.parse(saveContacts);
  //     }
  //     return inisialContacts;
  //   });

  //   useEffect(() => {
  //     localStorage.setItem("contact", JSON.stringify(contacts));
  //   }, [contacts]);

  //   const [filter, setFilter] = useState("");

  //   const addContact = (newContact) => {
  //     setContacts((prevContacts) => {
  //       return [...prevContacts, newContact];
  //     });
  //   };

  //   const deleteContact = (contactId) => {
  //     setContacts((prevContacts) => {
  //       return prevContacts.filter((contact) => contact.id !== contactId);
  //     });
  //   };

  //   const visibleContacts = contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
