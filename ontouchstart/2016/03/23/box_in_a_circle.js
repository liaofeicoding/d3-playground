function box_in_a_circle(container, r, w, h) {
  var d = 2 * r;
  var circle = container.append('div')
    .style('display', 'flex')
    .style('justify-content', 'center')
    .style('align-items', 'center')
    .style('margin', 0)
    .style('padding', 0)
    .style('width', d + 'px')
    .style('height', d + 'px')
    .style('border-radius', r + 'px')
    .style('border', '1px solid black');
  var box = circle.append('div')
    .style('margin', 0)
    .style('padding', 0)
    .style('width', w)
    .style('height', h);
  return box; 
}
