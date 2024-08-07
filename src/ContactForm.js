// src/ContactForm.js
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const ContactForm = ({
  addContact,
  editContact,
  editingContact,
  setEditingContact,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
    } else {
      setName("");
      setPhone("");
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: editingContact ? editingContact.id : uuidv4(),
      name,
      phone,
    };

    if (editingContact) {
      editContact(contact);
    } else {
      addContact(contact);
    }

    setName("");
    setPhone("");
    setEditingContact(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {editingContact ? "Update Contact" : "Add Contact"}
      </Button>
    </Form>
  );
};

export default ContactForm;
