function step2() {
  var h1 = d3.select('#h1').html("Step 2: What's in the container?");
  var container = d3.select('#container').html('');
  var code = container.append('pre');
  var button = container.append('button').html('Run').on('click', run).attr('class', 'btn btn-primary btn-lg');
  function run() {
    eval(code.html());
    container.append('button').html('Step 3').on('click', step3).attr('class', 'btn btn-primary btn-lg');
  }

  code.html(`
var container = d3.select('#container');
var html = container.html();
container.html('');
var textarea = container.append('textarea');
textarea.text(html);
textarea.style('resize', 'none')
textarea.style('width', '100%');    
textarea.style('margin', '1em 0');
textarea.attr('readonly', true);
textarea.attr('rows', html.split('\\n').length + 2);
`);
}
