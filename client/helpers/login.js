Meteor.subscribe('userData');

Template.login.events({
  'click #facebook-login': function(event) {
    Meteor.loginWithFacebook({
      requestPermissions: ['email', 'user_about_me', 'user_friends', 'public_profile', 'user_photos']
    }, function(err) {
      if (Meteor.user().profile.pic_url) {
        return
      } else {
        Meteor.call('getFacebookPicture', Meteor.user());
      }
      if (err) 
        console.log(err)
    })
  },
});