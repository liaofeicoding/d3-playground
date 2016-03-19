#Styling

d3.select('body') 
   .append('div')
   .append('p')
   .html('The content that is here will be in blue')
   .style('color','blue');
   
   d3.select('body') 
   .append('div')
   .append('b')
   .html('The content that is here will be bold and blue')
   .style('color','blue');
   
   d3.select('body') 
   .append('div')
   .append('i')
   .html('The content that is here will be italicized and blue')
   .style('color','blue');
