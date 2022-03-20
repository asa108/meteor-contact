import React from "react";
import { ContactCollection } from "../api/ContactCollection";
import { useTracker } from "meteor/react-meteor-data";

const ContactList = () => {
  // useTracker データを取ってくるときに使う
  const contacts = useTracker(() => {
    return ContactCollection.find({}).fetch();
  });

  return (
    <>
      <h3>Contact Wallet</h3>
      {contacts.map((contact) => (
        <li key={contact.email}>
          {contact.name} - {contact.email}
        </li>
      ))}
    </>
  );
};

export default ContactList;
