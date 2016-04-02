function svg_text(container, data) {
  console.log(data);
  var rect = container.node().getBoundingClientRect();
  var w = rect.width;
  var h = rect.height;
  var text = container.append('text');
  if(data && data.content) {
    text.text(data.content);
  }
  else {
    text.text('hello world');
  }
  rect = text.node().getBoundingClientRect();
  var text_width = rect.width;
  var text_height = rect.height;
  text.attr('fill', 'blue');
  text.attr('x', (w - text_width) / 2);
  text.attr('y', (h - text_height) / 2);

}
