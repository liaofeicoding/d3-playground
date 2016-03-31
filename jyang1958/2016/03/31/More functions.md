## Some random function thing

### Lesson 59
function f(c, d) {
  c.selectAll('div').data(d).enter().append('div').html(function (d) { return d; });
}

c = d3.select('body').append('div');
d = ['1', '2', '3'];
f(c, d);
