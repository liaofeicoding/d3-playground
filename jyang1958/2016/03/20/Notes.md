#Lesson 29

[Selector Notes](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

[Selections](https://github.com/mbostock/d3/wiki/Selections)

console.log(document.querySelector('body'));
console.log(d3.select('body'));

console.log(d3.select("body"));
d3.select("body").append("p").html("Hi!");
d3.select("body").append("p").attr("id","Hi").html("Hi?");
console.log(d3.selectAll("p#Hi").style("color","red").text());
