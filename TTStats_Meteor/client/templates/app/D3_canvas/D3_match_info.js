// Helpers for D3MatchInfo template.
// Get values from MongoDB.
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
	}
});

// onRendered function for D3MatchInfo template.
// Gets data from MongoDB and inserts 2 colored circles in the page with players' name.
Template.D3MatchInfo.onRendered(function() {

	//Initialize data list.
	let data = [];
	
	// Get data from MongoDB and push to data list. 
	data.push(Stats.findOne({match_no: 1}).player2);
	data.push(Stats.findOne({match_no: 1}).player1);

  	// Parameters for the plot's size.
	let width = 400;
  	let height = width/3;

  	// Create a function for colors that will differenciate players.
  	let color = d3.scaleOrdinal(d3.schemeCategory10);

  	// Create svg window in selected div and ajust position.
  	let svg_window = d3.select("#canvas_players")
    .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
	    .attr("transform", "translate(" + -25 + "," + 0 + ")");

	// Add circles for every selected elements of the data, and set attributes.
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

	// Add players name to corresponding circles.
	svg_window.selectAll(".bars_text")
	    .data(data)
	    .enter()
	  	  .append("text")
	  	  .attr("x", (d,i) => (width/(i+1)) - width/4)
	  	  .attr("y", height/2 - 17)
	      .attr("dy", "1.2em")
	  	  .attr("text-anchor", "middle")
	  	  .text(function(d) { return d})
	  	  .attr("fill", "white")
	  	  .attr("font-size", 0)
	  	  .transition()
	    		.duration(1000)
	  	  		.attr("font-size", "1.5em")
	  	  		.ease(d3.easeElastic);

	// Add "VS" text.
	svg_window.append("text")
	    .attr("x", width/2)             
	    .attr("y", height/2 + 10)
	    .attr("text-anchor", "middle")
	    .attr("fill", "black")  
	    .style("font-size", "1.5em")  
	    .text("VS");
});