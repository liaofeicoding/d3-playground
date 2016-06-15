d3.selectAll('pre')
  .style('margin', '1em')
  .style('padding', '1em')
  .style('border', '1px solid #ccc')
  .on('click', function () { 
    eval(d3.select(this).text()); 
  });
d3.select('body')
  .append('button')
  .html('Run all')
  .on('click', function () {
    d3.selectAll('pre')
      .each(function() {
         eval(d3.select(this).text());
      });
  });
