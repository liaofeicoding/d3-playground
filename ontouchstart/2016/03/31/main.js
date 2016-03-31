window.addEventListener('load', function () {
  var d3 = this.d3;
  var fullscreen = d3.select('body').append('div')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white')
    .style('justify-content', 'center')
    .style('align-items', 'center');

  var container = fullscreen.append('div'); 
  container.append('h1').html('hello world');
  var version = container.append('pre');
  version.html(`d3.version = ${d3.version}`);
});
