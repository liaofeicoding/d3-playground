function svg_box(container) {
  var svg = container.append('svg');
  svg.attr('width', 256);
  svg.attr('height', 256);
  return svg;
}
