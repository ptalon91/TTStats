// Helpers for D3Stats template.

// Events for D3Stats template.

Template.D3PlayersHistTotal.onRendered(function() {

  let data = Stats.find({match_no: 1}).fetch();
  let nb_sets = Stats.findOne({match_no: 1}, {sort: {set: -1} }).set;

  let set_no_list = [];

  for(i=1; i<=nb_sets; i++){
    set_no_list.push(i);
  }

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

  let margin = {top: 20, right: 20, bottom: 20, left: 20},
    padding = {top: 60, right: 20, bottom: 30, left: 20},
    outerWidth = 400,
    outerHeight = 300,
    innerWidth = outerWidth - margin.left - margin.right,
    innerHeight = outerHeight - margin.top - margin.bottom,
    width = innerWidth - padding.left - padding.right,
    height = innerHeight - padding.top - padding.bottom,
    between_players_bar_dist = 2,
    between_sets_bar_dist = 10;

  let svg_window = d3.select("body").append("svg")
      .attr("width", innerWidth + nb_sets*between_sets_bar_dist + nb_sets*between_players_bar_dist)
      .attr("height", innerHeight)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg_window.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "lightgrey");

  let color = d3.scaleOrdinal(d3.schemeCategory10);

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
     .attr("y", height + padding.top)
     .attr("x", (d,i) => padding.left + echelle_x(i) + (index)*width/nb_sets + index*between_sets_bar_dist)
      .attr("width", (width/sets_list[index].length)/nb_sets - between_players_bar_dist)
      .attr("height", 0)
      .attr("fill", (d) => color(d.key))
      .attr("opacity", 0.8)
     .transition()
       .duration(1000)
       // d pour les données et i pour l'index. Intégré.
       .attr("y", (d) => echelle_y(d.value) + padding.top)
       .attr("height", (d) => height - echelle_y(d.value))
       .attr("fill", (d) => color(d.key))
       .attr("opacity", 0.8);

  svg_window.selectAll(".bars_numbers")
    .data(sets_list[index])
    .enter()
     .append("text")
     .attr("x", (d,i) => padding.left + echelle_x(i) + (index)*width/nb_sets + index*between_sets_bar_dist)
     .attr("y", (d) => echelle_y(d.value) + padding.top)
     .attr("dx", (width/sets_list[index].length/nb_sets - between_players_bar_dist)/2)
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
      .attr("x", (d,i) => padding.left + echelle_x(i) + i*212/nb_sets + 30)
      .attr("y", 35)
      .attr("dy", "1.2em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d;})
      .attr("fill", "black")
      .attr("font-size", "1em"); 
}
  // svg_window.selectAll(".bars_text")
  //   .data(sets_list[index])
  //   .enter()
  //     .append("text")
  //     .attr("x", (d,i) => echelle_x(i))
  //     .attr("y", height - 30)
  //     .attr("dx", (width/sets_list[index].length/nb_sets - 5)/2)
  //     .attr("dy", "1.2em")
  //     .attr("text-anchor", "middle")
  //     .text(function(d) { return d.key;})
  //     .attr("fill", "white")
  //     .attr("font-size", 0)
  //     .transition()
  //       .delay(1000)
  //       .duration(200)
  //       .attr("font-size", "1.5em")
  //       .transition()
  //         .duration(200)
  //         .attr("font-size", "1.2em");

  svg_window.append("text")
    .attr("x", (width / 2)+40)             
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("fill", "black")  
    .style("font-size", "1.5em")  
    .text("Point per set");

})