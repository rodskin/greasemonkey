// ==UserScript==
// @name     iovision tooltip
// @version  1
// @grant    none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

var elem = document.createElement("div"); 
elem.id = 'rod_tooltip';
elem.style.textAlign = 'left';
elem.style.padding = ' 10px';
//elem.style.height = '50px';

jQuery("#drop_legende").prepend(elem);

function reportLegend (event) {
	setTimeout(function(){
      var tooltip_info = jQuery('.dhtmlXTooltip').html();
      jQuery('#rod_tooltip').html(tooltip_info);
  }, 500);
}

jQuery('body').on('mouseenter', '.dhx_cal_event_line', function (e){
	//showTooltip(e);
  reportLegend(e);
});
