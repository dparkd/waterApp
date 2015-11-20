Router.route('Login', {
  path: '/', 
  onBeforeAction: function (pause) {
    if (!Meteor.user()) {
      this.render('login');
    } else {
      this.render('dashboard');
    }
  }
});


// Router.route('Onboarding', {
//   path: '/onboarding', 
//   onBeforeAction: function(pause) {
//     if (!Met)
//   }
// })