function step3() {
  var h1 = d3.select('#h1').html("Step 3: Let's add a navbar.");
  var container = d3.select('#container').html('');

  var code = container.append('pre');
  var button = container.append('button').html('Run').on('click', run).attr('class', 'btn btn-primary btn-lg');

  function run() {
    eval(code.html());
    button.style('display', 'none');
    var html = d3.select('nav').node().outerHTML;
    var container = d3.select('body').append('div').attr('class', 'container');
    container.append('h1').html('The rendered HTML of navbar');
    var textarea = container.append('textarea');
    textarea.style('resize', 'none')
    textarea.style('width', '100%');    
    textarea.style('margin', '1em 0');
    textarea.attr('readonly', true);
    textarea.attr('rows', 15);
    textarea.text(html); //adds the html code of the nav bar to a readable text container
  }

  code.html(`
var body = d3.select('body').html('');
var nav = body.append('nav');
nav.attr('class', 'navbar navbar-default navbar-static-top');
var nav_container = nav.append('div').attr('class', 'container');
var navbar_header = nav_container.append('div').attr('class', 'navbar-header');
var navbar_button = navbar_header.append('button').on('click', navbar_toggle);
navbar_button.attr('type', 'button');
navbar_button.attr('class', 'navbar-toggle collapsed');
navbar_button.attr('data-toggle', 'collapse');
navbar_button.attr('data-target', '#navbar');
navbar_button.attr('aria-expanded', false);
navbar_button.attr('aria-controls', 'navbar');
navbar_button.append('span').attr('class', 'sr-only').html('Toggle navigation');
navbar_button.append('span').attr('class', 'icon-bar').html('');
navbar_button.append('span').attr('class', 'icon-bar').html('');
navbar_button.append('span').attr('class', 'icon-bar').html('');
navbar_header.append('a').attr('class', 'navbar-brand').attr('href', '#').html('D3-Playground').on('click', function () {
  d3.selectAll('#navbar li').classed('active', false);
  navbar.classed('in', false);
  navbar_button.classed('collapsed', false);
});
var navbar = nav_container.append('div').attr('id', 'navbar').attr('class', 'navbar-collapse collapse');
function navbar_toggle() {
  if(navbar.classed('in')) { 
    navbar.classed('in', false);
  }
  else {
    navbar.classed('in', true);
  }
  if(navbar_button.classed('collapsed')) {
    navbar_button.classed('collapsed', false);
  }
  else {
    navbar_button.classed('collapsed', true);
  }
}
var navbar_ul_left = navbar.append('ul').attr('class', 'nav navbar-nav');
navbar_ul_left.append('li').attr('class', 'active').append('a').attr('href', '#').html('Home');
navbar_ul_left.append('li').append('a').attr('href', '#product').html('Product');
navbar_ul_left.append('li').append('a').attr('href', '#service').html('Service');
var navbar_ul_right = navbar.append('ul').attr('class', 'nav navbar-nav navbar-right');
navbar_ul_right.append('li').append('a').attr('href', '#about').html('About');
navbar_ul_right.append('li').append('a').attr('href', '#contact').html('Contact');
d3.selectAll('#navbar li').on('click', activate);
function activate () { 
  d3.selectAll('#navbar li').classed('active', false); 
  d3.select(this).classed('active', true); 
  navbar_toggle();
}

`);
}
