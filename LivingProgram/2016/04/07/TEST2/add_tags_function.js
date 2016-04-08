function add_tags(data) {
  //title
  d3.select('title').remove();
  d3.select('head').append('title').html(data.title);

  //meta description
  d3.select('head').append('meta').attr("name", "description").attr("content", data.description);
  
  //meta keywords
  d3.select('head').append('meta').attr("name", "keywords").attr("content", data.keywords);

  //all og tags
  d3.select('head')
  .selectAll('meta').data(data.ogtags).enter()
  .append('meta')
  .attr("property", function (d) { return d.property; })
  .attr("content", function (d) { return d.content; });
}
console.log('hello');
