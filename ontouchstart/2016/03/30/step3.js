function step3() {
  var h1 = d3.select('#h1').html("Step 3: What is in the h1?");
  var container = d3.select('#container').html('');

  var code = container.append('pre');
  var button = container.append('button').html('Run').on('click', run).attr('class', 'btn btn-primary btn-lg');
  function run() {
    eval(code.html());
    container.append('button').html('Next').on('click', step4).attr('class', 'btn btn-primary btn-lg');
  }

  code.html(`
var h1 = d3.select('#h1');
var html = h1.html();
var textarea = container.append('textarea');
textarea.text(html);
textarea.style('resize', 'none')
textarea.style('width', '100%');    
textarea.style('margin', '1em 0');
textarea.attr('readonly', true);
textarea.attr('rows', html.split('\\n').length + 2);
`);
}
