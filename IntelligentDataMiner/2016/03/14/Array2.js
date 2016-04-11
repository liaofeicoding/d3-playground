title="Menu";
d3.select("title").html(title);
d3.select("body").append("h1").html(title);

function print_array(array){
  var ul = d3.select('body').append('ul');
  array.forEach(function(item, index,array) {
  ul.append('li').html(item).attr('class','item-' +index);
  console.log(array)
});
}

menu1=["Salad","Soup","Steak","Cake"];
print_array(menu1);


menu2=["Lemonade","Coke","Tea","Water"];
print_array(menu2);
