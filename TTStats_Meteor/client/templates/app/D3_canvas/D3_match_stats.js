// Helpers for D3Histogram template.

// Events for D3Histogram template.

Template.D3MatchStats.onRendered(function() {

let width = window.innerWidth/3;
let height = window.innerHeight/3;

let data = Stats.find().fetch()

let echelle_x = d3.scaleLinear()
  .domain(d3.extent(data, d => d.point_nb)) // = données... demande le min et le max
  .range([60, width-20])

let echelle_y = d3.scaleLinear()
  .domain(d3.extent(data, d => d.nb_rally))// = données... demande le min et le max
  .range([height-40, 40])

let axeX = d3.axisBottom(echelle_x);
let axeY = d3.axisLeft(echelle_y);
let color = d3.scaleOrdinal(d3.schemeCategory10);

let svg_window = d3.select("#canvas_match_stats")
  .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_window.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  	.attr("cx", (d) => echelle_x(d.point_nb))
    .attr("cy", echelle_y(0))
    .attr("r", 0)
    .attr("fill", (d) => color(d.point_winner))
    .attr("opacity", 0.8)
  	.transition()
  		.delay(function (d, i){
              return i * 25;  // Gives a slight delay with 25 ms spacing
          })
  		.duration(500)
     // d pour les données et i pour l'index. Intégré.
	    .attr("cx", (d) => echelle_x(d.point_nb))
	    .attr("cy", (d) => echelle_y(d.nb_rally))
	    .attr("r", 5)
	    .attr("fill", (d) => color(d.point_winner))
	    .attr("opacity", 0.8);

svg_window.append("g")
  .attr("transform",`translate(0,${height-20})`)
  .call(axeX);

svg_window.append("g")
  .attr("transform",`translate(40,0)`)
  .call(axeY);

});