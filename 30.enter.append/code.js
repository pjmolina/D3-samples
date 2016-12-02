function run(){
  var svg = d3.select("svg");
  var data =[10, 15, 5, 35, 18, 60, 50, 40, 5, 20, 31];
  
  var rects = svg.selectAll("rect")
    .data(data)
	.enter().append("rect")
    .attr("x", function(d,i) { return i * 20 + 100 ; })
    .attr("y", function(d,i) { return 20 ; })
    .attr("width", 20)
    .attr("height", function(d,i) { return d * 3; })
	;  
}
