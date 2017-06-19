// onRendered function for D3Histogram template.
// Gets data from MongoDB and inserts a scatter plot in the page.
Template.D3ScPlotPointVsRally.onRendered(function() {

  // Get data from MongoDB.
  let data = Stats.find({match_no: 1}).fetch();

  // Parameters for the plot's size.
  let margin = {top: 20, right: 10, bottom: 20, left: 10};
  let width = 800 - margin.left - margin.right;
  let height = 450 - margin.top - margin.bottom;

  // Define scale for x axis.
  let echelle_x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.point_no))
    .range([60, width-20])

  // Define scale for y axis.
  let echelle_y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.nb_rally))
    .range([height-40, 40])

  // Define x and y axis and assign scales.
  let axeX = d3.axisBottom(echelle_x);
  let axeY = d3.axisLeft(echelle_y);

  // Create a function for colors that will differenciate players.
  let color = d3.scaleOrdinal(d3.schemeCategory10);

  // Create svg window in selected div and ajust position.
  let svg_window = d3.select("#canvas_match_stats")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Add circles for every selected elements of the data, and set attributes.
  svg_window.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    	.attr("cx", (d) => echelle_x(d.point_no))
      .attr("cy", echelle_y(0))
      .attr("r", 0)
      .attr("fill", (d) => color(d.point_winner))
      .attr("opacity", 0.8)
      // Animation.
    	.transition()
        // Gives a slight delay with 25 ms spacing.
    		.delay(function (d, i){
                return i * 25;  
            })
    		.duration(1000)
  	    .attr("cx", (d) => echelle_x(d.point_no))
  	    .attr("cy", (d) => echelle_y(d.nb_rally))
  	    .attr("r", 5)
        // Elastic effect.
  	  	.ease(d3.easeElastic);

  // Add x axis on the plot.
  svg_window.append("g")
    .attr("transform",`translate(0,${height-20})`)
    .call(axeX);

  // Add y axis to the plot.
  svg_window.append("g")
    .attr("transform",`translate(40,0)`)
    .call(axeY);

  // Add title to plot.
  svg_window.append("text")
    .attr("x", (width / 2))             
    .attr("y", 15)
    .attr("text-anchor", "middle")  
    .style("font-size", "18px") 
    .style("text-decoration", "underline")  
    .text("Scored point vs length of rally");

  // Add x axis label to the plot.
  svg_window.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + 10)
    .style("font-size", "14px") 
    .text("Point number");

  // Add y axis label to the plot.
  svg_window.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 2)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .style("font-size", "14px")
    .text("Length of rally");
});