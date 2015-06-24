App.createController("Application", {
  elements: {
    all: {
      allMessageContainer: "#application-controller-all"
    }
  },

  all: function(message) {
    this.$allMessageContainer.text(message);
  }
});
