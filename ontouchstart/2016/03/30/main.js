window.addEventListener('load', function () {
  var d3 = this.d3;
  var body = d3.select('body');
  body.append('div')
    .attr('class', 'jumbotron')
    .append('div')
    .attr('class', 'container')
    .append('h1')
    .attr('id', 'h1')
    .html('A Step by Step Exercise with d3 and Bootstrap');
  body.append('div')
    .attr('id', 'container')
    .classed('container', true)
    .html('Here is the initial html of this page. ');
  step0();
});
