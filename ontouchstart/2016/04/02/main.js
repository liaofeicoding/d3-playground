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
  d3.select('head').append('title').html(hello_world);
  var container = fullscreen.append('div'); 
  container.append('h1').html(hello_world);
  var version = container.append('pre');
  version.html(`d3.version = ${d3.version}`);

  var data = {
    w : 256,
    h : 256
  };
  container.call(svg_box, data); // default content
  data.content = hello_world; 
  svg_box(container, data); // Chinese version
});
