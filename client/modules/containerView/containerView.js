Template['containerView'].helpers({
  stories: function () {
    return this.allStories(); 
  }
});

Template.containerView.rendered = function () {
  $('.containerItems').sortable(); 
}

Template['containerView'].events({
  "click .addStory": function () {
    
    return false; 
  },
  "keypress .quickAddItemForm": function (evt, template) {
    if (evt.which === 13) {
      var form = template.find(".quickAddItemForm")
      itemId = Item.insert({ name: form.value });
      this.addItem(itemId);
      $('.containerItems').sortable();
    }
  }
});
