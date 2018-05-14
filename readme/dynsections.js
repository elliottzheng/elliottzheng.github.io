/*
 @licstart  The following is the entire license notice for the
 JavaScript code in this file.

 Copyright (C) 1997-2017 by Dimitri van Heesch

 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

 @licend  The above is the entire license notice
 for the JavaScript code in this file
 */
function toggleVisibility(linkObj)
{
 var base = $(linkObj).attr('id');
 var summary = $('#'+base+'-summary');
 var content = $('#'+base+'-content');
 var trigger = $('#'+base+'-trigger');
 var src=$(trigger).attr('src');
 if (content.is(':visible')===true) {
   content.hide();
   summary.show();
   $(linkObj).addClass('closed').removeClass('opened');
   $(trigger).attr('src',src.substring(0,src.length-8)+'closed.png');
 } else {
   content.show();
   summary.hide();
   $(linkObj).removeClass('closed').addClass('opened');
   $(trigger).attr('src',src.substring(0,src.length-10)+'open.png');
 }
 return false;
}

function updateStripes()
{
  $('table.directory tr').
       removeClass('even').filter(':visible:even').addClass('even');
}

function toggleLevel(level)
{
  $('table.directory tr').each(function() {
    var l = this.id.split('_').length-1;
    var i = $('#img'+this.id.substring(3));
    var a = $('#arr'+this.id.substring(3));
    if (l