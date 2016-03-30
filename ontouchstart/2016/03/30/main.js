window.addEventListener('load', function () {
  var d3 = this.d3;
  var body = d3.select('body');
  body.append('div').html('Please open the Web Console.');
  console.log(d3);
});
