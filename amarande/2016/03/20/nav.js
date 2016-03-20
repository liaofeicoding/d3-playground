
function nav(container,data){
  
  var container = container.append('nav')
    .attr('class', 'navbar navbar-inverse navbar-fixed-top')
    .append('div').attr('class', 'container');
  var container_header = container.append('div').attr('class','navbar-header');
  
  container_header.append('a')
                  .attr('class','navbar-home')
                  .attr('href',data.home.url)
                  .html(data.home.html);
                     
  container.append('div')
           .attr('id','navbar')
           .attr('class','collapse navbar-collapde')
           .selectAll('li')    
           .data(data.nav)
           .enter()
           .append('li')
           .append('a')
           .attr('href',function(d){return d.url})
           .html(function(d){return d.html});
  }
