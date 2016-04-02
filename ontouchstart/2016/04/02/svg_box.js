function svg_box(container, data) {
  var svg = container.append('svg');
  var w = data.w || 256; 
  var h = data.h || 256; 
  var content = data.content || 'hello world';
  svg.attr('width', w);
  svg.attr('height', h);
  svg.style('background', 'orange');
  text = svg.append('text').text(content);
  var rect = text.node().getBoundingClientRect();
  var text_width = rect.width;
  var text_height = rect.height;
  text.attr('fill', 'blue');
  text.attr('x', (w - text_width) / 2);
  text.attr('y', (h - text_height) / 2);
}
