// Helpers for D3Stats template.

// Events for D3Stats template.

Template.D3PlayersHistTotal.onRendered(function() {

  let data = Stats.find().fetch()

  let width = 200;
  let height = 250;

  let point_winner_count = d3.nest()
    .key(function(d) { return d.point_winner; })
    .rollup(function(v) { return v.length; })
    .entries(data);

  let echelle_x = d3.scaleLinear()
    .domain([0, point_winner_count.length])
    .range([0, width]);

  let echelle_y = d3.scaleLinear()
    .domain([0, d3.max(point_winner_count, d => d.value)])// = données... demande le min et le max
    .range([height, 0])

  let color = d3.scaleOrdinal(d3.schemeCategory10);

  let svg_window = d3.select("#canvas_players_stats")
    .append("svg")
      .attr("width", width)
      .attr("height", height);

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
    	.transition()
    		.duration(1000)
       // d pour les données et i pour l'index. Intégré.
  	    .attr("y", (d) => echelle_y(d.value)+60)
  	    .attr("height", (d) => height - echelle_y(d.value))
  	    .attr("fill", (d) => color(d.key))
  	    .attr("opacity", 0.8);

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
  	  .transition()
  	  	.delay(1000)
    		.duration(200)
    		.attr("font-size", "1.8em")
    		.transition()
  	  		.duration(200)
  	  		.attr("font-size", "1.5em");

  svg_window.selectAll(".bars_text")
    .data(point_winner_count)
    .enter()
  	  .append("text")
  	  .attr("x", (d,i) => echelle_x(i))
  	  .attr("y", height - 30)
  	  .attr("dx", (width/point_winner_count.length - 5)/2)
    	.attr("dy", "1.2em")
  	  .attr("text-anchor", "middle")
  	  .text(function(d) { return d.key;})
  	  .attr("fill", "white")
  	  .attr("font-size", 0)
  	  .transition()
  	  	.delay(1000)
    		.duration(200)
    		.attr("font-size", "1.5em")
    		.transition()
  	  		.duration(200)
  	  		.attr("font-size", "1.2em");

  svg_window.append("text")
    .attr("x", (width / 2))             
    .attr("y", 30)
    .attr("text-anchor", "middle")  
    .style("font-size", "1.2em")  
    .text("Points scored per player");
});