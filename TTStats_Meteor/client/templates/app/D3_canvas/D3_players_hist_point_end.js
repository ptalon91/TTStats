// Helpers for D3Stats template.

// Events for D3Stats template.

Template.D3PlayersHistPointEnd.onRendered(function() {

  let margin = {top: 55, right: 80, bottom: 0, left: 0};
  let width = 300;
  let height = 195;

  let svg_window = d3.select("#canvas_players_hist_point_end")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  let color = d3.scaleOrdinal(d3.schemeCategory10);

  let data = Stats.find({match_no: 1}).fetch();

  let point_end_count = d3.nest()
  .key(function(d) { return d.point_winner; })
  .key(function(d) { return d.point_end; })
  .rollup(function(v) { return v.length; })
  .entries(data);

  let point_end_list = [];
  let max = 0;

  for(i = 0; i < point_end_count.length; i++){
    point_end_list.push(point_end_count[i].values);
    if(d3.max(point_end_list[i], d => d.value) > max){
      max = d3.max(point_end_list[i], d => d.value);
    }
  }

  console.log(point_end_count.length)

  for(index=0;index<point_end_count.length;index++){

  let echelle_x = d3.scaleLinear()
    .domain([0, point_end_list[index].length])
    .range([0, width/point_end_count.length]);

  let echelle_y = d3.scaleLinear()
    .domain([0, max])// = données... demande le min et le max
    .range([height, 0]);

  svg_window.selectAll(`rect${index}_pe`)
    .data(point_end_list[index])
    .enter()
    .append("rect")
    	.attr("y", height)
    	.attr("x", (d,i) => 60 + echelle_x(i) + (index)*width/point_end_count.length + index*20)
      .attr("width", width/point_end_list[index].length/point_end_count.length - 2)
      .attr("height", 0)
      .attr("fill", (d) => color(index))
      .attr("opacity", 0.8)
    	.transition()
    		.duration(1000)
       // d pour les données et i pour l'index. Intégré.
  	    .attr("y", (d) => echelle_y(d.value))
  	    .attr("height", (d) => height - echelle_y(d.value))
  	    .attr("opacity", 0.8);

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
  	  .transition()
  	  	.delay(1000)
    		.duration(200)
    		.attr("font-size", "1em")
    		.transition()
  	  		.duration(200)
  	  		.attr("font-size", "0.9em");

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

  svg_window.append("text")
    .attr("x", (width / 2)+42)             
    .attr("y", -35)
    .attr("text-anchor", "middle")
    .attr("fill", "black")  
    .style("font-size", "1.5em")  
    .text("Points scoring types");


});