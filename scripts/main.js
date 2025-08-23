/**
 * Main JavaScript file for shared functionality across all pages
 * Author: Amanpreet Kapoor
 */

// Initialize Materialize components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize sidenav for mobile navigation
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Alternative jQuery initialization for backward compatibility
$(document).ready(function(){
  $('.sidenav').sidenav();
});

// Load header, footer, and infobar components
$(function(){
  $("#header").load("header.html");
  $("#footer").load("footer.html");
  $("#infobar").load("infobar.html");
});