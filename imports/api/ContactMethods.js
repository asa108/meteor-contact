import { ContactCollection } from "./ContactCollection";

Meteor.methods({
  "contacts.insert"({ name, email, imageUrl }) {
    return ContactCollection.insert({ name, email, imageUrl });
  },
});
