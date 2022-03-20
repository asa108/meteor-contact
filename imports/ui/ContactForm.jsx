import React, { useState } from "react";
import { ContactCollection } from "../api/ContactCollection";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const saveContact = () => {
    ContactCollection.insert({
      name,
      email,
      imageUrl,
    });

    setName("");
    setEmail("");
    setImageUrl("");
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image Url</label>
        <input
          id="text"
          value={imageUrl}
          type="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div>
        <button type="button" onClick={saveContact}>
          Save Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
