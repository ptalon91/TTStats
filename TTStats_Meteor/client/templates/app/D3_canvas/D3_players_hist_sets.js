// onRendered function for D3PlayersHistSets template.
// Gets data from MongoDB and inserts a histogram in the page.
Template.D3PlayersHistSets.onRendered(function() {

  // Get data from MongoDB.
  let data = Stats.find({match_no: 1}).fetch();
  // Get numbers of sets played from MongoDB.
  let nb_sets = Stats.findOne({match_no: 1}, {sort: {set: -1} }).set;

  // Initialize list for loop that will make a list set numbers (1,2,3,...).
  let set_no_list = [];

  // Loop to get set numbers.
  for(i=1; i<=nb_sets; i++){
    set_no_list.push(i);
  }

  // Nest data: count of occurences for point winner and for each set.
  let point_winner_count = d3.nest()
    .key(function(d) { return d.set; })
    .key(function(d) { return d.point_winner; })
    .rollup(function(v) { return v.length; })
    .entries(data);

  // Initialize list and max var for loop.
  let sets_list = [];
  let max = 0;

  // Loop to create data with lower "depth" (easier for D3). + get max value of the entire data.
  for(i = 0; i < nb_sets; i++){
    sets_list.push(point_winner_count[i].values);
    if(d3.max(sets_list[i], d => d.value) > max){
      max = d3.max(sets_list[i], d => d.value);
    }
  }

  // Parameters for the plot's size.
  let margin = {top: 55, right: 80, bottom: 0, left: 0};
  let outerWidth = 500;
  let width = 300;
  let height = 195;

  // Create a function for colors that will differenciate players.
  let color = d3.scaleOrdinal(d3.schemeCategory10);

  // Create svg window in selected div and ajust position.
  let svg_window = d3.select("#canvas_players_hist_sets")
    .append("svg")
      .attr("width", outerWidth + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
        .attr("transform", "translate(" + 130 + "," + margin.top + ")");

  // Loop that goes through the data for every set.
  for(index=0;index<nb_sets;index++){

    // Define scale for x axis.
    let echelle_x = d3.scaleLinear()
      .domain([0, sets_list[index].length])
      .range([0, width/nb_sets]);

    // Define scale for y axis.
    let echelle_y = d3.scaleLinear()
      .domain([0, max])
      .range([height, 0]);

    // Add rectangles for every selected elements of the data, and set attributes.
    svg_window.selectAll(`rect${index}`)
      .data(sets_list[index])
      .enter()
      .append("rect")
      	.attr("y", height)
        // Here, add of a bigger space when the data is for the next set.
      	.attr("x", (d,i) => echelle_x(i) + (index)*width/nb_sets + index*20)
        .attr("width", width/sets_list[index].length/nb_sets - 2)
        .attr("height", 0)
        .attr("fill", (d) => color(d.key))
        .attr("opacity", 0.8)
        // Animation for heigth.
      	.transition()
      		.duration(1000)
    	    .attr("y", (d) => echelle_y(d.value))
    	    .attr("height", (d) => height - echelle_y(d.value))
    	    .attr("fill", (d) => color(d.key))
    	    .attr("opacity", 0.8);

    // Add numbers to corresponding rectangles.
    svg_window.selectAll(".bars_numbers")
      .data(sets_list[index])
      .enter()
    	  .append("text")
    	  .attr("x", (d,i) => echelle_x(i) + (index)*width/nb_sets + index*20)
    	  .attr("y", (d) => echelle_y(d.value))
    	  .attr("dx", (width/sets_list[index].length/nb_sets - 2)/2)
      	.attr("dy", "1.2em")
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

    // Add set number above corresponding rectangles.
     svg_window.selectAll(".sets_numbers")
      .data(set_no_list)
      .enter()
        .append("text")
        .attr("x", (d,i) => echelle_x(i) + i*250/nb_sets + 30)
        .attr("y", -28)
        .attr("dy", "1.2em")
        .attr("text-anchor", "middle")
        .text(function(d) { return "set " +d;})
        .attr("font-size", "1em");
  }

  // Add title to the plot.
  svg_window.append("text")
    .attr("x", (width / 2)+42)             
    .attr("y", -35)
    .attr("text-anchor", "middle")
    .attr("fill", "black")  
    .style("font-size", "1.5em")  
    .text("Points scored per set and player");
});