d3.text('https://bigdata-mindstorms/d3-playground/blob/gh-pages/sweetcan/2016/03/01/style.css', 
function(e,d){
   d3.select('head').append('style').html(d);
   })
