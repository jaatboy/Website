$('.datepicker').pickadate({
selectMonths: true,// Creates a dropdown to control month
selectYears: 30,// Creates a dropdown of 15 years to control year
// The title label to use for the month nav buttons
labelMonthNext: 'Next Month',
labelMonthPrev: 'Previous Month',
// The title label to use for the dropdown selectors
labelMonthSelect: 'Select Month',
labelYearSelect: 'Select Year',
// Months and weekdays
monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ],
weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wedenesday', 'Thursday', 'Friday', 'Saturday' ],
weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat' ],
// Materialize modified
weekdaysLetter: ['S', 'M', 'T', 'W', 'T', 'F', 'S' ],
// Today and clear
today: 'Today',
clear: 'Clear',
close: 'Close',
// The format to show on the `input` element
format: 'd mmmm, yyyy',

max: '22 January, 2017'
});
$(document).ready(function(){

  $('a#copy-language-ptbr').zclip({
    path:'vendor/ZeroClipboard.swf',
    copy:$('textarea#language-ptbr').val()
  });
  $('a#copy-style-orange').zclip({
    path:'vendor/ZeroClipboard.swf',
    copy:$('textarea#style-orange').val()
  });	 
  
  $('.tooltipped').tooltip({delay: 50});
  
 });