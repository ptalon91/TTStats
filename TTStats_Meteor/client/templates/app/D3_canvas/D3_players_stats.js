// Helpers for D3Stats template.

// Events for D3Stats template.

Template.D3PlayersStats.onRendered(function() {

let width = 300;
let height = 200;

let data = Stats.find().fetch()

let point_winner_count = d3.nest()
  .key(function(d) { return d.point_winner; })
  .rollup(function(v) { return v.length; })
   .entries(data);
console.log(point_winner_count)


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
  	.attr("y", height)
  	.attr("x", (d,i) => echelle_x(i))
    .attr("width", width/point_winner_count.length)
    .attr("height", 0)
    .attr("fill", (d) => color(d.key))
    .attr("opacity", 0.8)
  	.transition()
  		.duration(1000)
     // d pour les données et i pour l'index. Intégré.
	    .attr("y", (d) => echelle_y(d.value))
	    .attr("height", (d) => height - echelle_y(d.value))
	    .attr("fill", (d) => color(d.key))
	    .attr("opacity", 0.8);

});