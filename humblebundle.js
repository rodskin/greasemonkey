// ==UserScript==
// @name     Humblebundle Get list
// @version  1
// @grant    none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==

function getGamesList() {
  //if you're not on the first page navigate to the first page
  if($('.js-jump-to-page:first').text() != "1"){
    $('.js-jump-to-page:nth-child(2)').click()
  }

  // Find how many pages of games you have by getting the text inside the last page button
  var loop = $('.js-jump-to-page:nth-last-child(2)').html() * 1


  // array to store all games found
  var x = [];

  // loop through each page
  for(i = 0; i < loop; i++){

    // for each game on the page add an entry into the array
    $('tbody tr').each(function(){
      var is_available = 'Y';
      //key-redeemer .container js-third-party .js-keyfield
      if ($(this).children('td.redeemer-cell').children('.key-redeemer').children('.container').children('.keyfield').hasClass('redeemed')) {
        is_available = 'N';
      }
      x.push('\n' + $(this).children('td.game-name').children('h4').attr('title') + ' ; ' + $(this).children('td.platform').children('i').attr('title') + '; ' + is_available + ' ;')
    })
    // click next page button
    $('.js-jump-to-page:last').click()
  }

  // sort game list
  x.sort()

  // string variable for game list
  var gamelist = ''

  // transfer gamelist from array into string
  x.forEach(function(x){
    gamelist += x
  })

  // Output games with header needed for Reddit formatted table
  console.log('Game ; Platform ; Available ; Price' + gamelist)
}

var elem = document.createElement("input"); 
elem.value = 'Get List';
elem.type = 'button';

elem.addEventListener('click', getGamesList, false);

$(".base-main-wrapper").prepend(elem);
