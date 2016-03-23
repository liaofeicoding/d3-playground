function f(c, d) {
  c.selectAll('div').data(d).enter().append('div').html(function (d) { return d; });
}

c = d3.select('body').append('div');
d = ['电视机', '洗衣机', '冰箱'，'烤箱'];
f(c, d);
