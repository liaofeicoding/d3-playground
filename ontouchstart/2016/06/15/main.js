d3.selectAll('pre')
  .style('margin', '1em')
  .style('padding', '1em')
  .style('border', '1px solid #ccc')
  .on('click', function () { 
    eval(d3.select(this).text()); 
  });
