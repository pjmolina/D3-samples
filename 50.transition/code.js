var data = [];

function runEnter(){
  data =[10, 15, 5, 35, 18, 60, 50, 40, 5, 20, 31];
  var svg = d3.select("svg");
  var rects = svg.selectAll("rect")
    .data(data)
	.enter().append("rect")
    .attr("x", function(d,i) { return i * 20 + 100 ; })
    .attr("y", function(d,i) { return 20 ; })
    .attr("width", 20)
    .attr("height", function(d,i) { return d * 3; })
	;  
}
function runExit(){
  data = [10, 15];
  var svg = d3.select("svg");
  var rects = svg.selectAll("rect")
    .data(data)
	.exit().remove(); 
}
function clearAll(){
  data = [];
  var svg = d3.select("svg");
  var rects = svg.selectAll("rect")
    .data(data)
	.exit().remove(); 
}

function t1() {
  var svg = d3.select("svg");
  svg.selectAll("rect")
    .data(data)
    .transition()
    .duration(2300)  // 2.3 segundos
      .attr("x", 10)
      .attr("y", function(d,i) { return i * 25 + 5; })
      .attr("width", function(d,i) { return d * 3; })
      .attr("height", 20)
      .style("fill", "#cc2200");
}