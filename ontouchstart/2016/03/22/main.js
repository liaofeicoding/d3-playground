var body = d3.select('body');

function flex_center_test() {
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
  body.append('button')
    .append('a')
    .attr('href', '#flex_center_test')
    .html('flex_center_test');
}

function load () {
  switch (location.hash) {
    case '#flex_center_test': 
      load_js('flex_center.js', flex_center_test);
      break;
    default: 
      init();
  }
};

window.addEventListener('load', load);
window.addEventListener('hashchange', load);
