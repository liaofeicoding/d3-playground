var head = d3.select('head');
var body = d3.select('body');

head.select('title').html('LivingProgram's study of CSS flexible boxes')

function top_center() {
  body.html('');
  var container = body.append('div')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white')
    .style('justify-content', 'center')
    .style('align-items', 'flex-start');
  var h1 = container.append('h1')
    .html('I'm on top);
}

function right_center() {
  var container = body.append('div')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white')
    .style('justify-content', 'flex-end')
    .style('align-items', 'center');
  var h1 = container.append('h1')
    .html('I'm to the right);
}

function init() {
  body.html('');
  head.append('style').html('ul { margin: 3em;}');
  head.append('style').html('li { margin: 1em;}');
  var ul = body.append('ul');
  ul.append('li')
    .append('a')
    .attr('href', '#top_right_center')
    .html('top_right_center');

}

function load () {
  switch (location.hash) {
    case '#top_right_center': 
      top_center();
      right_center();
      break;
    default: 
      init();
  }
};

window.addEventListener('load', load);
window.addEventListener('hashchange', load);
