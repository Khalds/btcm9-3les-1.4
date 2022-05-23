//! 1 Тип
var figlet = require('figlet');

figlet('Intocode', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data)
});


//! 2 Тип
figlet.text('Intocode', {
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 100,
  whitespaceBreak: true
}, function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});