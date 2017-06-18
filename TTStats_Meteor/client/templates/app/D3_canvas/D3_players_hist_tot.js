// onRendered function for D3PlayersHistTotal template.
// Gets data from MongoDB and inserts a histogram in the page.
Template.D3PlayersHistTotal.onRendered(function() {

  // Get data from MongoDB. 
  let data = Stats.find().fetch()
  
  // Nest data: count of occurences for point winner.
  let point_winner_count = d3.nest()
    .key(function(d) { return d.point_winner; })
    .rollup(function(v) { return v.length; })
    .entries(data);
  
  // Parameters for the plot's size.
  let outerWidth = 400;
  let width = 200;
  let height = 250;

  // Create a function for colors that will differenciate players.
  let color = d3.scaleOrdinal(d3.schemeCategory10);

  // Define scale for x axis.
  let echelle_x = d3.scaleLinear()
    .domain([0, point_winner_count.length])
    .range([0, width]);

  // Define scale for y axis.
  let echelle_y = d3.scaleLinear()
    .domain([0, d3.max(point_winner_count, d => d.value)])
    .range([height, 0])

  // Create svg window in selected div and ajust position.
  let svg_window = d3.select("#canvas_players_stats")
    .append("svg")
      .attr("width", outerWidth)
      .attr("height", height)
      .attr("transform", "translate(" + 130 + "," + 0 + ")");;

  // Add rectangles for every selected elements of the data, and set attributes.
  svg_window.selectAll("rect")
    .data(point_winner_count)
    .enter()
    .append("rect")
    	.attr("y", height+60)
    	.attr("x", (d,i) => echelle_x(i))
      .attr("width", width/point_winner_count.length - 5)
      .attr("height", 0)
      .attr("fill", (d) => color(d.key))
      .attr("opacity", 0.8)
      // Animation for heigth.
    	.transition()
    		.duration(1000)
  	    .attr("y", (d) => echelle_y(d.value)+60)
  	    .attr("height", (d) => height - echelle_y(d.value))
  	    .attr("fill", (d) => color(d.key))
  	    .attr("opacity", 0.8);

  // Add numbers to corresponding rectangles.
  svg_window.selectAll(".bars_numbers")
    .data(point_winner_count)
    .enter()
  	  .append("text")
  	  .attr("x", (d,i) => echelle_x(i))
  	  .attr("y", (d) => echelle_y(d.value)+55)
  	  .attr("dx", (width/point_winner_count.length - 5)/2)
    	.attr("dy", "1.2em")
  	  .attr("text-anchor", "middle")
  	  .text(function(d) { return d.value;})
  	  .attr("fill", "white")
  	  .attr("font-size", 0)
      // Animation
  	  .transition()
  	  	.delay(1000)
    		.duration(200)
    		.attr("font-size", "1.8em")
    		.transition()
  	  		.duration(200)
  	  		.attr("font-size", "1.5em");

  svg_window.append("text")
    .attr("x", (width / 2))             
    .attr("y", 30)
    .attr("text-anchor", "middle")  
    .style("font-size", "1.2em")  
    .text("Points scored per player");
});