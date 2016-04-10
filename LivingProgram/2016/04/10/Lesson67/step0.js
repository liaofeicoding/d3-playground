function step0() {
  var container = d3.select('#container'); //this is the container that was created before
  container.append('button').html('Step 1').on('click', run).attr('class', 'btn btn-primary btn-lg'); //a bootstrap button, with the styling of a primary button, also a large button
  var html = d3.select('html').html(); //get the html contents

  var textarea = container.append('textarea');
  textarea.text(html); //appends a box of text with the html
  textarea.style('resize', 'none')
  textarea.style('width', '100%');    
  textarea.style('margin', '1em 0');
  textarea.attr('readonly', true);
  textarea.attr('rows', html.split('\n').length + 2);

  function run() { //this function is run when the "Step 1" button is pressed 
    d3.select(this).style('display', 'none');
    step1();
  }
}
