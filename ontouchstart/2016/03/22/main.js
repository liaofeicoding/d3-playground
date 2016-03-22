var head = d3.select('head');
var body = d3.select('body');
head.select('title').html('A study of CSS flexible boxes')

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
    .html('hello world');
}

function right_center() {
  body.html('');
  var container = body.append('div')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white')
    .style('justify-content', 'flex-end')
    .style('align-items', 'center');
  var h1 = container.append('h1')
    .html('hello world');
}

function left_center() {
  body.html('');
  var container = body.append('div')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white')
    .style('justify-content', 'flex-start')
    .style('align-items', 'center');
  var h1 = container.append('h1')
    .html('hello world');
}

function center_center() {
  body.html('');
  var container = body.append('div')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white')
    .style('justify-content', 'center')
    .style('align-items', 'center');
  var h1 = container.append('h1')
    .html('hello world');
}

function bottom_center() {
    body.html('');
  var container = body.append('div')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')
    .style('background', 'white')
    .style('justify-content', 'center')
    .style('align-items', 'flex-end');
  var h1 = container.append('h1')
    .html('hello world');
}

function init() {
  body.html('');
  head.append('style').html('ul { margin: 3em;}');
  head.append('style').html('li { margin: 1em;}');
  var ul = body.append('ul');
  ul.append('li')
    .append('a')
    .attr('href', '#top_center')
    .html('top_center');
  ul.append('li')
    .append('a')
    .attr('href', '#left_center')
    .html('left_center');
  ul.append('li')
    .append('a')
    .attr('href', '#center_center')
    .html('center_center');
  ul.append('li')
    .append('a')
    .attr('href', '#right_center')
    .html('right_center');
  ul.append('li')
    .append('a')
    .attr('href', '#bottom_center')
    .html('bottom_center');
}

function load () {
  switch (location.hash) {
    case '#top_center': 
      top_center();
      break;
    case '#left_center': 
      left_center();
      break;
    case '#center_center': 
      center_center();
      break;
    case '#right_center': 
      right_center();
      break;
    case '#bottom_center': 
      bottom_center();
      break;  
    default: 
      init();
  }
};

window.addEventListener('load', load);
window.addEventListener('hashchange', load);
