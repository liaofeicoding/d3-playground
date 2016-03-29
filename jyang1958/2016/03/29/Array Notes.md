###Lesson 33
[Lesson 33](https://github.com/bigdata-mindstorms/d3-playground/issues/33)

Code:
function print_array(array) {
  var ul = d3.select('body').append('ul');
  array.forEach(function(item, index, array) {
    ul.append('li').html(item).attr('class', 'item-' + index);
    console.log(array);
  });
}

A = [1, 2, 3];
print_array(A);

B = [4,5, 6];
print_array(B);
