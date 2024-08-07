import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (contact) => {
    setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
    setEditingContact(null);
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <ContactForm
            addContact={addContact}
            editContact={editContact}
            editingContact={editingContact}
            setEditingContact={setEditingContact}
          />
        </Col>
        <Col md={6}>
          <ContactList
            contacts={contacts}
            setEditingContact={setEditingContact}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
