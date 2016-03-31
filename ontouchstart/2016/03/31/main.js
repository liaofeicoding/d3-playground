window.addEventListener('load', function () {
  var d3 = this.d3;
  var fullscreen = d3.select('body').append('div')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white')
    .style('justify-content', 'center')
    .style('align-items', 'center');

  var hello_world = 'hello world';

  var container = fullscreen.append('div'); 
  container.append('h1').html(hello_world);
  var version = container.append('pre');
  version.html(`d3.version = ${d3.version}`);
  var svg = svg_box(container).style('background', 'orange');

  text = svg.append('text').text(hello_world);
  text.attr('fill', 'blue');
  text.attr('x', '1em');
  text.attr('y', `${hello_world.length / 2} em`);

});
