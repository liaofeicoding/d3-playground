## Lesson 31

[Link to Website](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Functions)

Mupltiplying
selection = d3.select("body").append("div");
selection.append("input").attr("type","number").attr("id","i_a");
selection.append("text").html("*");
selection.append("input").attr("type","number").attr("id","i_b");
selection.append("button").html("=").on("click",function(){
var num1 = selection.select("input#i_a").property("value");
var num2 = selection.select("input#i_b").property("value");
var product= Number.parseFloat(num1) * Number.parseFloat(num2);
selection.append("text").html(product);
});

Addition
selection = d3.select("body").append("div");
selection.append("input").attr("type","number").attr("id","i_a");
selection.append("text").html("+");
selection.append("input").attr("type","number").attr("id","i_b");
selection.append("button").html("=").on("click",function(){
var num1 = selection.select("input#i_a").property("value");
var num2 = selection.select("input#i_b").property("value");
var sum = Number.parseFloat(num1) + Number.parseFloat(num2);
selection.append("text").html(sum);
});

