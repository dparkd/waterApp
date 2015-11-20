// EVENTS

Template.dashboard.events({
  'click #logout': function(event) {
    Meteor.logout(function(err){
      if (err) {
        throw new Meteor.Error("Logout failed");
      }
    });
  } 
});

Template.addPoint.events({
  'click #addRefill': function(event) {
    Meteor.call('addRefill');
  },

  'click #addBottle': function(event) {
    Meteor.call('addBottle');
  }
});



// Helpers

Template.dashboard.helpers({
  'profile_pic': function() {
    return Meteor.user().profile.pic_url
  }
})




