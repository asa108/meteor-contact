import { Meteor } from "meteor/meteor";
import "/imports/api/ContactCollection";
import "/imports/api/ContactMethods";
import "/imports/api/ContactsPublications";

Meteor.startup(() => {
  // If the collection is empty, add some data.
});
