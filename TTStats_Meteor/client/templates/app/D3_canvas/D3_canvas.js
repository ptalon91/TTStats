// Helpers for D3Canvas template.

// Events for D3Canvas template.

Session.set('d3', false);
Meteor.startup(function(){
 $.getScript('https://d3js.org/d3.v4.min.js', function(){
  // script has loaded
  Session.set('d3', true);
 });
});