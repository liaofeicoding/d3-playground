function flex_center_test() {
  var body = d3.select('body').html('');
  var container = body.append('div').attr('id', 'container');
  var h1 = container.append('h1').html('hello world');
  flex_center(container);
}

load_js('flex_center.js', flex_center_test);
