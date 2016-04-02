function svg_box(container, w, h, hello_world) {
  var svg = container.append('svg');
  svg.attr('width', w);
  svg.attr('height', h);
  svg.style('background', 'orange');
  text = svg.append('text').text(hello_world);
  var rect = text.node().getBoundingClientRect();
  var text_width = rect.width;
  var text_height = rect.height;
  text.attr('fill', 'blue');
  text.attr('x', (w - text_width) / 2);
  text.attr('y', (h - text_height) / 2);
}
