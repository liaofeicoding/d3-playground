function step0() {
  var container = d3.select('#container');
  container.append('button').html('Step 1').on('click', run).attr('class', 'btn btn-primary btn-lg');
  var html = d3.select('html').html();

  var textarea = container.append('textarea');
  textarea.text(html);
  textarea.style('resize', 'none')
  textarea.style('width', '100%');    
  textarea.style('margin', '1em 0');
  textarea.attr('readonly', true);
  textarea.attr('rows', html.split('\n').length + 2);

  
  function run() {
    d3.select(this).style('display', 'none');
    step1();
  }
}
