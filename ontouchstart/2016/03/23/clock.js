function clock(container, r) {
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

  var second_hand = circle.append('div')
    .style('position', 'absolute')
    .style('margin', 0)
    .style('padding', 0)
    .style('top', r)
    .style('left', r)
    .style('width', r * 0.75)
    .style('height', 1)
    .style('transform-origin', '0 0')
    .style('background', 'red');

  var minute_hand = circle.append('div')
    .style('position', 'absolute')
    .style('margin', 0)
    .style('padding', 0)
    .style('top', r)
    .style('left', r)
    .style('width', r * 0.6)
    .style('height', 3)
    .style('transform-origin', '0 0')
    .style('background', 'green');

  var hour_hand = circle.append('div')
    .style('position', 'absolute')
    .style('margin', 0)
    .style('padding', 0)
    .style('top', r)
    .style('left', r)
    .style('width', r * 0.4)
    .style('height', 5)
    .style('transform-origin', '0 0')
    .style('background', 'blue');


  function update(h, m, s) {
    var hours_deg = h * 360 / 12 - 90;
    var minutes_deg = m * 360 / 60 - 90;
    var seconds_deg = s * 360 / 60 - 90;
    second_hand.style('transform', `rotate(${seconds_deg}deg)`);
    minute_hand.style('transform', `rotate(${minutes_deg}deg)`);
    hour_hand.style('transform', `rotate(${hours_deg}deg)`);
  }

  function update_now() {
    var now = new Date();
    update(now.getHours(), now.getMinutes(), now.getSeconds());
  }

  update_now();
  setInterval(update_now, 1000);
  return circle; 
}
