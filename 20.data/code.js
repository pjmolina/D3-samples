function run(){
  var svg = d3.select("svg");
  var data =[127, 61, 256];
  
  var rects = svg.selectAll("rect")
    .data(data)
    .attr("x", 0)
    .attr("y", function(d,i) { return i*30+30 })
    .attr("width", function(d,i) { return d; })
    .attr("height", 20)
    .style("fill", "steelblue")
  
  console.log(rects);
}
