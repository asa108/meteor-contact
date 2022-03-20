import { ContactCollection } from "./ContactCollection";

Meteor.methods({
  "contacts.insert"({ name, email, imageUrl }) {
    if (!name) {
      throw new Meteor.Error("Name is required.");
    }
    return ContactCollection.insert({
      name,
      email,
      imageUrl,
      createdAt: new Date(),
    });
  },
  "contacts.remove"({ contactId }) {
    return ContactCollection.remove(contactId);
  },
});
