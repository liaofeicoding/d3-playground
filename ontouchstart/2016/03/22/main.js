var body = d3.select('body');

function test_flex_center_center() {
  body.html('');
  var container = body.append('div')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white');
  var h1 = container.append('h1')
    .html('hello world');
  flex_center(container);
}

function init() {
  body.html('');
  var ul = body.append('ul')
    .style('margin', '3em');
  ul.append('li')
    .append('a')
    .attr('href', '#test_flex_center_center')
    .html('Test flex_center_center');
}

function load () {
  switch (location.hash) {
    case '#test_flex_center_center': 
      load_js('flex_center_center.js', test_flex_center_center);
      break;
    default: 
      init();
  }
};

window.addEventListener('load', load);
window.addEventListener('hashchange', load);
