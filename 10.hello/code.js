let run = function() {
  d3.select('svg')
    .selectAll('rect')
    .attr('x', 10)
    .style('fill', 'pistacho');
}