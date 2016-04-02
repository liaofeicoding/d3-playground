function svg_box(container, data) {
  var w = data.w || 256; 
  var h = data.h || 256; 
  var svg = container.append('svg');
  svg.style('margin', '1em');
  svg.append('line')
    .attr('x1', 0) 
    .attr('x2', w) 
    .attr('y1', h/2) 
    .attr('y2', h/2)
    .attr('stroke', '#ccc')
    .attr('stroke-width', 1);
  svg.append('line')
    .attr('x1', w/2) 
    .attr('x2', w/2) 
    .attr('y1', 0) 
    .attr('y2', h)
    .attr('stroke', '#ccc')
    .attr('stroke-width', 1);
  
  var content = data.content || 'hello world';
  svg.attr('width', w);
  svg.attr('height', h);
  svg.style('background', 'orange');
  svg.call(svg_text, data);
}
