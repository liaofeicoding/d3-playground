body.html('');
title = 'JavaScript Expressions';
d3.select('title')
  .html(title);

body.append('h1')
  .html(title)

body.append('p')
  .html('An expression is any valid unit of code that resolves to a value.');

output = body.append('div')
  .style('border', '1px solid #CCC')
  .style('margin', '0.5em')
  .style('padding', '0.5em');

data_src = 'https://bigdata-mindstorms.github.io/d3-playground/littleGauze/2016/01/04/expressions.yaml';
expression_list = [];
d3.text(data_src, function (e, d) {
  if(!e) {
    expression_list = js_yaml.load(d);
    while (expression_list.length) {
      next()
    }
  }
});

function next () {
    expression = expression_list.shift()
      output.append('pre')
      .style('color', 'green')
      .text('expression > ' + expression);
    try {
      value = eval(expression);
      output.append('pre')
        .style('color', 'blue')
        .text('     value > ' + value);
    }
    catch (e) {
      output.append('pre')
        .style('color', 'red')
        .text('     error > ' + e);
    }
}
