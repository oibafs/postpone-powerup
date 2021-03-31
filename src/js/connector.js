var onBtnClick = function (t, opts) {
  return t.card('id')
    .then(function(card) {
      fetch(`https://scheduler-ruby.vercel.app/api/1/trello/cards/${card.id}/postpone`, {
        method : 'PUT',
        body : {},
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      .then(function(response) {
        return response.json();
      })
    })
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      // usually you will provide a callback function to be run on button click
      // we recommend that you use a popup on click generally
      // icon: GRAY_ICON, // don't use a colored icon here
      text: 'Postpone',
      callback: onBtnClick,
      condition: 'edit'
    }];
  }
});