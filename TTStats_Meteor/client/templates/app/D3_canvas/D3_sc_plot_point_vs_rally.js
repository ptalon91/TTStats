// Helpers for D3Histogram template.

// Events for D3Histogram template.

Template.D3ScPlotPointVsRally.onRendered(function() {

  let data = Stats.find().fetch()

  let margin = {top: 20, right: 10, bottom: 20, left: 10};
  let width = window.innerWidth/3 - margin.left - margin.right;
  let height = window.innerHeight/2 - margin.top - margin.bottom;

  let echelle_x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.point_no)) // = données... demande le min et le max
    .range([60, width-20])

  let echelle_y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.nb_rally))// = données... demande le min et le max
    .range([height-40, 40])

  let axeX = d3.axisBottom(echelle_x);
  let axeY = d3.axisLeft(echelle_y);
  let color = d3.scaleOrdinal(d3.schemeCategory10);

  let svg_window = d3.select("#canvas_match_stats")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg_window.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    	.attr("cx", (d) => echelle_x(d.point_no))
      .attr("cy", echelle_y(0))
      .attr("r", 0)
      .attr("fill", (d) => color(d.point_winner))
      .attr("opacity", 0.8)
    	.transition()
    		.delay(function (d, i){
                return i * 25;  // Gives a slight delay with 25 ms spacing
            })
    		.duration(1000)
  	    .attr("cx", (d) => echelle_x(d.point_no))
  	    .attr("cy", (d) => echelle_y(d.nb_rally))
  	    .attr("r", 3)
  	  	.ease(d3.easeElastic);


  svg_window.append("g")
    .attr("transform",`translate(0,${height-20})`)
    .call(axeX);

  svg_window.append("g")
    .attr("transform",`translate(40,0)`)
    .call(axeY);

  svg_window.append("text")
    .attr("x", (width / 2))             
    .attr("y", 15)
    .attr("text-anchor", "middle")  
    .style("font-size", "16px") 
    .style("text-decoration", "underline")  
    .text("Point number vs length of rally");

  svg_window.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + 10)
    .text("Point number");

  svg_window.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 2)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Length of rally");
});