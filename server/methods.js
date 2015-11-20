Meteor.methods({
  // Get the facebook profile
  'getFacebookPicture': function() {
    Meteor.users.update(Meteor.userId(), {$set: {"profile.pic_url": "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=square&height=300&width=300"}}, {multi: true});
  },

  'addBottle': function() {
    Meteor.users.update(Meteor.userId(), {$inc: {"profile.bottles": 1}}, {multi: true});
  },

  'addRefill': function() {
    Meteor.users.update(Meteor.userId(), {$inc: {"profile.refills": 1}}, {multi: true});
  },

});


