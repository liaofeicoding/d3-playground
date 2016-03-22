var head = d3.select('head');
var body = d3.select('body');
function test_flex_center_center() {
  body.html('');
  var container = body.append('div')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white');
  flex_center(container);
  var h1 = container.append('h1')
    .html('hello world');
}

function test_flex_bottom_center() {
  body.html('');
  var container = body.append('div')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white');
  flex_center(container);
  var h1 = container.append('h1')
    .style('align-self', 'flex-end')
    .html('hello world');
}

function init() {
  body.html('');
  head.append('style').html('ul { margin: 3em;}');
  head.append('style').html('li { margin: 1em;}');
  var ul = body.append('ul');
  ul.append('li')
    .append('a')
    .attr('href', '#test_flex_center_center')
    .html('Test flex_center_center');
  ul.append('li')
    .append('a')
    .attr('href', '#test_flex_bottom_center')
    .html('Test flex_bottom_center');
}

function load () {
  switch (location.hash) {
    case '#test_flex_center_center': 
      load_js('flex_center.js', test_flex_center_center);
      break;
    case '#test_flex_bottom_center': 
      load_js('flex_center.js', test_flex_bottom_center);
      break;  
    default: 
      init();
  }
};

window.addEventListener('load', load);
window.addEventListener('hashchange', load);
