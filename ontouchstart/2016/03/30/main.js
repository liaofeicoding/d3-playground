window.addEventListener('load', function () {
  var d3 = this.d3;
  var body = d3.select('body');
  var container = body.append('div').classed('container', true);
  step1(container);
});

function step1 (container) {
  var note = container.append('h1').html('Click on the code to run it.');
  var code = container.append('pre');
  code.on('click', function () {
    eval(this.innerHTML);
  });

  code.html(`
  // load bootstrap css 
  if(! this.bootstrap_version) {
    d3.select('head')
      .append('link')
      .attr('rel', 'stylesheet')
      .attr('href', '../../../../bootstrap/3.3.6/css/bootstrap.min.css');
    d3.select('head')
      .append('link')
      .attr('rel', 'stylesheet')
      .attr('href', '../../../../bootstrap/3.3.6/css/bootstrap-theme.min.css');
    this.bootstrap_version = '3.3.6';
    container.append('pre').html('bootstrap version = ' + this.bootstrap_version);
  }
`);
}
