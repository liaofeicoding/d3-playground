function clock_markers(container, r) {
  var d = 2 * r;
  var circle = container.append('div')
    .style('position', 'relative')
    .style('margin', 0)
    .style('padding', 0)
    .style('width', d + 'px')
    .style('height', d + 'px')
    .style('border-radius', r + 'px')
    .style('border', '1px solid black');
  var one_minute = d3.range(60).map(function (d) { return d * 360 / 60; });
  circle.selectAll('div.one_minute')
    .data(one_minute)
    .enter()
    .append('div')
    .attr('class', 'one_minute')
    .style('position', 'absolute')
    .style('margin', 0)
    .style('padding', 0)
    .style('top', r)
    .style('left', r)
    .style('width', r)
    .style('height', 2)
    .style('transform-origin', '0 0')
    .style('transform', function (d) { return `rotate(${d}deg)`;})
    .append('div')
    .style('position', 'absolute')
    .style('left', '90%')
    .style('width', '10%')
    .style('height', '100%')
    .style('background', 'red');

  var five_minute = d3.range(60).map(function (d) { return d * 360 / 12; });
  circle.selectAll('div.five_minute')
    .data(five_minute)
    .enter()
    .append('div')
    .attr('class', 'one_minute')
    .style('position', 'absolute')
    .style('margin', 0)
    .style('padding', 0)
    .style('top', r)
    .style('left', r)
    .style('width', r)
    .style('height', 2)
    .style('transform-origin', '0 0')
    .style('transform', function (d) { return `rotate(${d}deg)`;})
    .append('div')
    .style('position', 'absolute')
    .style('left', '80%')
    .style('width', '20%')
    .style('height', '100%')
    .style('background', 'blue');

  return circle; 
}
