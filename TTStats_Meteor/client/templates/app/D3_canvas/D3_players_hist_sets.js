// Helpers for D3Stats template.

// Events for D3Stats template.

Template.D3PlayersHistSets.onRendered(function() {

  let margin = {top: 55, right: 80, bottom: 0, left: 0};
  let width = 300;
  let height = 145;

  let svg_window = d3.select("#canvas_players_hist_sets")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  let color = d3.scaleOrdinal(d3.schemeCategory10);

  let data = Stats.find({match_no: 1}).fetch();
  let nb_sets = Stats.findOne({match_no: 1}, {sort: {set: -1} }).set;

  let set_no_list = [];

  for(i=1; i<=nb_sets; i++){
    set_no_list.push(i);
  }

  // let point_winner_count = d3.nest()
  //   .key(function(d) { return d.set; })
  //   .rollup(function(v) { return v.length; })
  //   .entries(data);

  let point_winner_count = d3.nest()
  .key(function(d) { return d.set; })
  .key(function(d) { return d.point_winner; })
  .rollup(function(v) { return v.length; })
  .entries(data);

  let sets_list = [];
  let max = 0;

  for(i = 0; i < nb_sets; i++){
    sets_list.push(point_winner_count[i].values);
    if(d3.max(sets_list[i], d => d.value) > max){
      max = d3.max(sets_list[i], d => d.value);
    }
  }

  // alert(sets_list)
  // let set1_points_count = point_winner_count["0"].values;
  // let set2_points_count = point_winner_count["1"].values;
  // let set3_points_count = point_winner_count["2"].values;
  // let set4_points_count = point_winner_count["3"].values;
  // let set5_points_count = point_winner_count["4"].values;



  for(index=0;index<nb_sets;index++){

  let echelle_x = d3.scaleLinear()
    .domain([0, sets_list[index].length])
    .range([0, width/nb_sets]);

  let echelle_y = d3.scaleLinear()
    .domain([0, max])// = données... demande le min et le max
    .range([height, 0]);

  svg_window.selectAll(`rect${index}`)
    .data(sets_list[index])
    .enter()
    .append("rect")
    	.attr("y", height-50)
    	.attr("x", (d,i) => echelle_x(i) + (index)*width/nb_sets + index*20)
      .attr("width", width/sets_list[index].length/nb_sets - 5)
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

  svg_window.selectAll(".bars_numbers")
    .data(sets_list[index])
    .enter()
  	  .append("text")
  	  .attr("x", (d,i) => echelle_x(i) + (index)*width/nb_sets + index*20)
  	  .attr("y", (d) => echelle_y(d.value))
  	  .attr("dx", (width/sets_list[index].length/nb_sets - 5)/2)
    	.attr("dy", "1.2em")
  	  .attr("text-anchor", "middle")
  	  .text(function(d) { return d.value;})
  	  .attr("fill", "white")
  	  .attr("font-size", 0)
  	  .transition()
  	  	.delay(1000)
    		.duration(200)
    		.attr("font-size", "1.5em")
    		.transition()
  	  		.duration(200)
  	  		.attr("font-size", "1.2em");

            svg_window.selectAll(".sets_numbers")
    .data(set_no_list)
    .enter()
      .append("text")
      .attr("x", (d,i) => echelle_x(i) + i*250/nb_sets + 30)
      .attr("y", -30)
      .attr("dy", "1.2em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d;})
      .attr("fill", "black")
      .attr("font-size", "1.2em")
}
  // svg_window.selectAll(".bars_text")
  //   .data(sets_list[index])
  //   .enter()
  // 	  .append("text")
  // 	  .attr("x", (d,i) => echelle_x(i))
  // 	  .attr("y", height - 30)
  // 	  .attr("dx", (width/sets_list[index].length/nb_sets - 5)/2)
  //   	.attr("dy", "1.2em")
  // 	  .attr("text-anchor", "middle")
  // 	  .text(function(d) { return d.key;})
  // 	  .attr("fill", "white")
  // 	  .attr("font-size", 0)
  // 	  .transition()
  // 	  	.delay(1000)
  //   		.duration(200)
  //   		.attr("font-size", "1.5em")
  //   		.transition()
  // 	  		.duration(200)
  // 	  		.attr("font-size", "1.2em");

  svg_window.append("text")
    .attr("x", (width / 2)+50)             
    .attr("y", -40)
    .attr("text-anchor", "middle")  
    .style("font-size", "16px") 
    .style("text-decoration", "underline")  
    .text("Sets");


});