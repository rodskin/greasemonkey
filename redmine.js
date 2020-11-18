// ==UserScript==
// @name     Redmine add buttons
// @version  1.3
// @grant    none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==


// SEPARATOR
function mySeparator() {
  var issues_text = jQuery('#issue_notes').val();
  issues_text += "\r\n\r\n" + '----' + "\r\n\r\n";
  jQuery('#issue_notes').val(issues_text);
  return false;
}
var elem = document.createElement("input"); 
elem.value = '----';
elem.type = 'button';
elem.style.background = 'white';
elem.style.marginRight = '4px';

elem.addEventListener('click', mySeparator, false);

jQuery(".jstElements").append(elem);


// TODO
function myTodo() {
  var issues_text = jQuery('#issue_notes').val();
  issues_text += "\r\n" + '%{background:orange}@TODO% : ';
  jQuery('#issue_notes').val(issues_text);
  return false;
}
var elem = document.createElement("input"); 
elem.value = '@TODO';
elem.type = 'button';
elem.style.background = 'orange';
elem.style.marginRight = '4px';

elem.addEventListener('click', myTodo, false);

jQuery(".jstElements").append(elem);


// DONE
function myDone() {
  var issues_text = jQuery('#issue_notes').val();
  issues_text += "\r\n" + '%{background:lightgreen}@DONE% : ';
  jQuery('#issue_notes').val(issues_text);
  return false;
}
var elem = document.createElement("input"); 
elem.value = '@DONE';
elem.type = 'button';
elem.style.background = 'lightgreen';
elem.style.marginRight = '4px';

elem.addEventListener('click', myDone, false);

jQuery(".jstElements").append(elem);


// INFO
function myInfo() {
  var issues_text = jQuery('#issue_notes').val();
  issues_text += "\r\n" + '%{background:yellow}@INFO% : ';
  jQuery('#issue_notes').val(issues_text);
  return false;
}
var elem = document.createElement("input"); 
elem.value = '@INFO';
elem.type = 'button';
elem.style.background = 'yellow';
elem.style.marginRight = '4px';

elem.addEventListener('click', myInfo, false);

jQuery(".jstElements").append(elem);


// CANCELED
function myCancel() {
  var issues_text = jQuery('#issue_notes').val();
  issues_text += "\r\n" + '%{background:red; color:white}@CANCELED% : ';
  jQuery('#issue_notes').val(issues_text);
  return false;
}
var elem = document.createElement("input"); 
elem.value = '@CANCELED';
elem.type = 'button';
elem.style.background = 'red';
elem.style.color = 'white';
elem.style.marginRight = '4px';

elem.addEventListener('click', myCancel, false);

jQuery(".jstElements").append(elem);


// ESTIMATE
function myEstimate() {
  var issues_text = jQuery('#issue_notes').val();
  issues_text += "\r\n" + '%{background:purple; color:white}@ESTIMATE% : ';
  jQuery('#issue_notes').val(issues_text);
  return false;
}
var elem = document.createElement("input"); 
elem.value = '@ESTIMATE';
elem.type = 'button';
elem.style.background = 'purple';
elem.style.color = 'white';
elem.style.marginRight = '4px';

elem.addEventListener('click', myEstimate, false);

jQuery(".jstElements").append(elem);


// CONTACT
function myContact() {
  var issues_text = jQuery('#issue_notes').val();
  issues_text += "\r\n" + '%{background:cyan; color:black}@CONTACT% : ';
  jQuery('#issue_notes').val(issues_text);
  return false;
}
var elem = document.createElement("input"); 
elem.value = '@CONTACT';
elem.type = 'button';
elem.style.background = 'cyan';
elem.style.color = 'black';

elem.addEventListener('click', myContact, false);

jQuery(".jstElements").append(elem);
