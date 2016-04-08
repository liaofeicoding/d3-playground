function add_tags(data) {
  //title
  d3.select('title').remove();
  d3.select('head').append('title').html(data.title);

  //meta description
  d3.select('head').append('meta').attr("name", "description").attr("content", data.description);
  
  //meta keywords
  d3.select('head').append('meta').attr("name", "keywords").attr("content", data.keywords);

}
