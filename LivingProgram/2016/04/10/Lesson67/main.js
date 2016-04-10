window.addEventListener('load', function () {
  var d3 = this.d3;
  d3.select('head').append('title').html('This is a: Step by Step Exercise with d3 and Bootstrap'); 
  var body = d3.select('body');
  body.append('div')
    .attr('class', 'jumbotron') //special bootstrap class, where you can put html in the container
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
