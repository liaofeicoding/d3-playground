d3.text('https://bigdata-mindstorms.github.io/d3-playground/amarande/2016/03/04/background.css', 
function(e,d){
   d3.select('head').append('style').html(d);
   })
