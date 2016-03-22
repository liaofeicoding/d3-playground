function flex_center_test() {
  var container = d3.select('div#container');
  var h1 = container.append('h1').html('hello world');
  flex_center(container);
}

load_js('flex_center.js', flex_center_test);
