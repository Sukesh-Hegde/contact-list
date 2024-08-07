// src/ContactList.js
import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ContactList = ({ contacts, setEditingContact }) => {
  return (
    <ListGroup>
      {contacts.map((contact) => (
        <ListGroup.Item
          key={contact.id}
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>{contact.name}</strong> - {contact.phone}
          </div>
          <Button
            variant="warning"
            size="sm"
            onClick={() => setEditingContact(contact)}
          >
            Edit
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ContactList;
