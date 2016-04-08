function add_tags(data) {
  //title
  d3.select('title').remove();
  d3.select('head').append('title').html(function (d) { return d.data.title; });

  //meta description
  d3.select('head').append('meta').attr("name", "description").attr("content", function (d) { return d.data.description; });
  
  //meta keywords
  d3.select('head').append('meta').attr("name", "keywords").attr("content", function (d) { return d.data.keywords; });

}
