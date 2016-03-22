function flex_center(container) { 
  container.style('display', 'flex');
  container.style('justify-content', 'center');
  container.style('align-items', 'center');
}

console.log(d3);
var container = d3.select('div#container');
var [w, h] = [container.style('width'), container.style('height')].map(parseFloat);
console.log(w, h);
var h1 = container.append('h1').html('hello world');

flex_center(container);
