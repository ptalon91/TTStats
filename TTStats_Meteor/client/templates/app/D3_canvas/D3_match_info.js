// Helpers for D3MatchInfo template.

Template.D3MatchInfo.helpers({

	match_no: function() {
		return Stats.findOne().match_no;
	},

	player_1: function() {
		return Stats.findOne().player1;
	},

	player_2:function() {
		return Stats.findOne().player2;
	},

	nb_sets: function() {
		return Stats.findOne({match_no: 1}, {sort: {set: -1} }).set;
	},

	nb_points: function() {
		return Stats.findOne({match_no: 1}, {sort: {point_no: -1} }).point_no;
	},

	match_winner: function() {
		return Stats.findOne({match_no: 1}, {sort: {point_no: -1} }).point_winner;
	},

});

Template.D3MatchInfo.onRendered(function() {

	let data = [];
	data.push(Stats.findOne({match_no: 1}).player1);
	data.push(Stats.findOne({match_no: 1}).player2);

	let width = 400;
  	let height = width/3;

  	let color = d3.scaleOrdinal(d3.schemeCategory10);

  	let svg_window = d3.select("#canvas_players")
    .append("svg")
      .attr("width", width)
      .attr("height", height);

	svg_window.selectAll("circle")
	    .data(data)
	    .enter()
	    .append("circle")
	      .attr("cx", (d,i) => (width/(i+1)) - width/4)
	      .attr("cy", height/2)
	      .attr("r", 0)
	      .attr("fill", (d) => color(d))
	      .attr("opacity", 0.8)
	    	.transition()
	    	.duration(1000)
	  	    .attr("r", 60)
	  	  	.ease(d3.easeElastic);

	  svg_window.selectAll(".bars_text")
    .data(data)
    .enter()
  	  .append("text")
  	  .attr("x", (d,i) => (width/(i+1)) - width/4)
  	  .attr("y", height/2 - 12)
  	  // .attr("dx", (width/point_winner_count.length - 5)/2)
      .attr("dy", "1.2em")
  	  .attr("text-anchor", "middle")
  	  .text(function(d) { return d})
  	  .attr("fill", "white")
  	  .attr("font-size", 0)
  	  .transition()
    		.duration(1000)
  	  		.attr("font-size", "1.2em")
  	  		.ease(d3.easeElastic);;


});