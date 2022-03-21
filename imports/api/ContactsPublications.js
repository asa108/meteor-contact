import { ContactCollection } from "./ContactCollection";
import { Meteor } from "meteor/meteor";

// publish に関することをマネジする
Meteor.publish("allContacts", function publishAllContacts() {
  return ContactCollection.find(); // live query
});
