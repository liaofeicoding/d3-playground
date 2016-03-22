function flex_center_test() {
  var body = d3.select('body').html('');
  var container = body.append('div')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white');
  var h1 = container.append('h1')
    .html('hello world');
  flex_center(container);
}

if(location.hash === '#flex_center_test') {
  load_js('flex_center.js', flex_center_test);
}
