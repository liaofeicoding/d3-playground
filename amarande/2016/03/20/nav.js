
function nav(container,data){
  
  var container = container.append('nav')
    .attr('class', 'navbar navbar-inverse navbar-fixed-top')
    .append('div').attr('class', 'container');
  var container_header = container.append('div').attr('class','navbar-header');

  var button = navbar_header.append('button')
      .attr('type', 'button')
      .attr('class', 'navbar-toggle collapsed')
      .attr('data-toggle', 'collapse')
      .attr('data-target', '#navbar')
      .attr('aria-expanded', 'false')
      .attr('aria-controls', 'navbar');
  button.append('span').attr('class', 'sr-only').html('Toggle navigation');
  button.append('span').attr('class', 'icon-bar');
  button.append('span').attr('class', 'icon-bar');
  button.append('span').attr('class', 'icon-bar');

  
  container_header.append('a')
                  .attr('class','navbar-brand')
                  .attr('href',data.home.url)
                  .html(data.home.html);


                     
  container.append('div')
           .attr('id','navbar')
           .attr('class','collapse navbar-collapse')
           .append('ul')
           .attr('class', 'nav navbar-nav')
           .selectAll('li')    
           .data(data.nav)
           .enter()
           .append('li')
           .append('a')
           .attr('href',function(d){return d.url})
           .html(function(d){return d.html});
  }
