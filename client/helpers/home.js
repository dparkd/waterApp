Template.home.helpers ({
  tasks: function() {
    return Score.find();
  }
});