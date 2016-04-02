window.addEventListener('load', function () {
  var d3 = this.d3;
  var fullscreen = d3.select('body').append('div')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white')
    .style('justify-content', 'space-around')
    .style('align-items', 'center');

  var hello_world = '你好世界';
  var container = fullscreen.append('div'); 
  container.append('h1').html(hello_world);
  var version = container.append('pre');
  version.html(`d3.version = ${d3.version}`);

  container.call(svg_box, 256, 256, hello_world);
  svg_box(container, 256, 256, hello_world); // the same
});
