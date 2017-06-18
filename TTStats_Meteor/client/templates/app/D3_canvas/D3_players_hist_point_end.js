// onRendered function for D3PlayersHistPointEnd template.
// Gets data from MongoDB and inserts a histogram in the page.
Template.D3PlayersHistPointEnd.onRendered(function() {

  // Get data from MongoDB.  
  let data = Stats.find({match_no: 1}).fetch();

  // Nest data: count of occurences for point winner and type of point end (in, out, etc...)
  let point_end_count = d3.nest()
    .key(function(d) { return d.point_winner; })
    .key(function(d) { return d.point_end; })
    .rollup(function(v) { return v.length; })
    .entries(data);

  // Initialize list and max var for loop.
  let point_end_list = [];
  let max = 0;

  // Loop to create data with lower "depth" (easier for D3). + get max value of the entire data.
  for(i = 0; i < point_end_count.length; i++){
    point_end_list.push(point_end_count[i].values);
    if(d3.max(point_end_list[i], d => d.value) > max){
      max = d3.max(point_end_list[i], d => d.value);
    }
  }

  // Parameters for the plot's size.
  let margin = {top: 55, right: 80, bottom: 0, left: 0};
  let outerWidth = 520;
  let width = 300;
  let height = 195;

  // Create a function for colors that will differenciate players.
  let color = d3.scaleOrdinal(d3.schemeCategory10);

  // Create svg window in selected div and ajust position.
  let svg_window = d3.select("#canvas_players_hist_point_end")
    .append("svg")
      .attr("width", outerWidth + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
        .attr("transform", "translate(" + 220 + "," + margin.top + ")");

  // Loop that goes through the data for the 2 players.
  for(index=0;index<point_end_count.length;index++){

    // Define scale for x axis.
    let echelle_x = d3.scaleLinear()
      .domain([0, point_end_list[index].length])
      .range([0, width/point_end_count.length]);

    // Define scale for y axis.
    let echelle_y = d3.scaleLinear()
      .domain([0, max])
      .range([height, 0]);

    // Add rectangles for every selected elements of the data, and set attributes.
    svg_window.selectAll(`rect${index}_pe`)
      .data(point_end_list[index])
      .enter()
      .append("rect")
      	.attr("y", height)
        // Here, add of a bigger space when the data is for the second player.
      	.attr("x", (d,i) => 60 + echelle_x(i) + (index)*width/point_end_count.length + index*20)
        .attr("width", width/point_end_list[index].length/point_end_count.length - 2)
        .attr("height", 0)
        .attr("fill", (d) => color(index))
        .attr("opacity", 0.8)
        // Animation for heigth.
      	.transition()
      		.duration(1000)
    	    .attr("y", (d) => echelle_y(d.value))
    	    .attr("height", (d) => height - echelle_y(d.value))
    	    .attr("opacity", 0.8);

    // Add numbers to corresponding rectangles.
    svg_window.selectAll(".bars_numbers_pe")
      .data(point_end_list[index])
      .enter()
    	  .append("text")
    	  .attr("x", (d,i) => 60 + echelle_x(i) + (index)*width/point_end_count.length + index*20)
    	  .attr("y", (d) => echelle_y(d.value))
    	  .attr("dx", (width/point_end_list[index].length/point_end_count.length - 2)/2)
      	.attr("dy", "1em")
    	  .attr("text-anchor", "middle")
    	  .text(function(d) { return d.value;})
    	  .attr("fill", "white")
    	  .attr("font-size", 0)
        // Animation.
    	  .transition()
    	  	.delay(1000)
      		.duration(200)
      		.attr("font-size", "1em")
      		.transition()
    	  		.duration(200)
    	  		.attr("font-size", "0.9em");

    // Add point end types above corresponding rectangles.
    svg_window.selectAll(".point_end_type")
      .data(point_end_list[index])
      .enter()
        .append("text")
        .attr("x", (d,i) => 77 + echelle_x(i) + (index)*width/point_end_count.length + index*20)
        .attr("y", (d) => echelle_y(d.value)-20)
        .attr("dy", "1.2em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.key;})
        .attr("fill", "black")
        .attr("font-size", "0.8em")
  }

  // Add title to the plot.
  svg_window.append("text")
    .attr("x", (width / 2)+42)             
    .attr("y", -35)
    .attr("text-anchor", "middle")
    .attr("fill", "black")  
    .style("font-size", "1.5em")  
    .text("Points scoring types");
});