function step1() {
  var h1 = d3.select('#h1');
  h1.html('Step1 : load Bootstrap');
  var container = d3.select('#container');
  var code = container.append('pre');
  var button = container.append('button').html('Run').on('click', run).attr('class', 'btn btn-primary btn-lg');

  function run() {
    eval(code.html());
    button.style('display', 'none');
    h1.html('Now we have Bootstrap');
    container.append('button').html('Next').on('click', step2).attr('class', 'btn btn-primary btn-lg');

  };

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
