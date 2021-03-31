var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
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