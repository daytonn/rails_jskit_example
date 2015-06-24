App.createController("Pages", {
  actions: ["index"],

  elements: {
    all: { allMessageContainer: "#pages-controller-all"} ,
    index: {
      indexMessageContainer: "#pages-controller-index",
      tabContent: ".js-vertical-tab-content",
      tabs: ".js-vertical-tab",
      accordianHeading: ".js-vertical-tab-accordion-heading"
    }
  },

  events: {
    index: {
      tabs: {
        click: "handleTabClick"
      },
      accordianHeading: {
        click: "handleAccordionHeadingClick"
      }
    }
  },

  all: function(message) {
    this.$allMessageContainer.text(message);
  },

  index: function(message) {
    this.$indexMessageContainer.text(message);
    this.$tabContent.hide();
    this.$tabContent.eq(0).show();
  },

  handleTabClick: function(event) {
    var $tab = $(event.currentTarget);
    event.preventDefault();
    this.$tabContent.hide();
    var activeTab = $tab.attr("rel");

    $("#" + activeTab).show();

    this.$tabs.removeClass("is-active");
    $tab.addClass("is-active");

    this.$accordianHeading.removeClass("is-active");
    $(".js-vertical-tab-accordion-heading[rel^='" + activeTab + "']").addClass("is-active");
  },

  handleAccordionHeadingClick: function(event) {
    event.preventDefault();
    var $header = $(event.currentTarget);
    this.$tabContent.hide();
    var accordion_activeTab = $header.attr("rel");
    $("#" +  accordion_activeTab).show();
    this.$accordianHeading.removeClass("is-active");
    $header.addClass("is-active");

    this.$tabs.removeClass("is-active");
    $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
  }
});
